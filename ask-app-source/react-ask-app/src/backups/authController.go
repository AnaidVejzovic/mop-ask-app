package controllers

import (
	"go-auth/database"
	"go-auth/models"
	"strconv"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)
const SecretKey = "secret"

func Register(c *fiber.Ctx) error {
	var data map[string]string

	if err:=c.BodyParser(&data); err!=nil{
		return err
	}
	password, _:=bcrypt.GenerateFromPassword([]byte(data["password"]), 14)
	var answers uint = 0
	user := models.User{
		FirstName:data["firstName"],
		LastName:data["lastName"],
		Email: data["email"],
		Password: password,
		Answers: answers,
	}
	database.DB.Create(&user)
	return c.JSON(user)
}

func PostQuestion(c* fiber.Ctx) error{
	var data map[string] string
	if err:=c.BodyParser(&data); err!=nil{
		return err
	}
	var likes uint=0
	question:= models.Question{
		Question: data["question"],
		QPosterId: data["id"],
		QPosterName: data["name"],
		Likes: likes,
	}
	database.DB.Create(&question)
	return c.JSON(question)	
}

func GetNameById(c* fiber.Ctx) error {
	var data map[string] string
	if err:=c.BodyParser(&data); err!=nil{
		return err
	}
	var user models.User
	var name string
	//sqlStatement := `SELECT first_name FROM users WHERE id = ?;`
	//database.DB.Table("users").Exec(sqlStatement,data["qPosterId"]).First(&firstName)
	database.DB.Table("users").Select("first_name, last_name").Where("id=?",data["qPosterId"]).First(&user)
	//firstName=user.FirstName
	name=user.FirstName+" "+user.LastName
	//database.DB.Exec(sqlStatement, data["qPosterId"]).First((&firstName))
	//database.DB.Where("q_poster_id=?", data["qPosterId"]).First(&firstName)
	return c.JSON(name)
}

func GetAnswersById(c* fiber.Ctx) error {
	var data map[string] string
	if err:=c.BodyParser(&data); err!=nil{
		return err
	}
	var answers []models.Answer
	//database.DB.Table("answers").Select("id, answer, a_poster_id").Where("question_id=?",data["questionId"]).First(&answers)
	database.DB.Where("question_id=?",data["questionId"]).Find(&answers)
	return c.JSON(answers)
}

func GetQuestions(c* fiber.Ctx) error {
	var questions []models.Question
	database.DB.Find(&questions)
	return c.JSON(questions)
}
func GetUsers(c *fiber.Ctx) error{
	var users []models.User
	database.DB.Order("answers desc").Find(&users)
	return c.JSON(users)
}
func GetTopQuestions(c* fiber.Ctx) error {
	var questions []models.Question
	database.DB.Order("likes desc").Limit(10).Find(&questions)
	return c.JSON(questions)
}

func ChangePassword(c *fiber.Ctx) error {
	var data map[string]string

	if err:=c.BodyParser(&data); err!=nil{
		return err
	}
	var user models.User
	database.DB.Where("email=?", data["email"]).First(&user)
	//password, _:=bcrypt.GenerateFromPassword([]byte(data["newPassword"]), 14)
	if err:=bcrypt.CompareHashAndPassword(user.Password, []byte(data["oldPassword"])); err!= nil{
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"message":"incorrect password",
		})
	}else{
		password, _:=bcrypt.GenerateFromPassword([]byte(data["newPassword"]), 14)
		id := user.Id;
		sqlStatement := `UPDATE users SET Password = ? WHERE Id = ?;`
		//database.DB.Update("UPDATE users set Password=? WHERE Id = ?", password,id)
		database.DB.Exec(sqlStatement, password, id)
		return c.JSON(fiber.Map{
			"message":"Password changed successfully",
		})
	}
	// var answers uint = 0
	/*user := models.User{
		FirstName:data["firstName"],
		LastName:data["lastName"],
		Email: data["email"],
		Password: password,
		// Answers: answers,
	}*/
	/*id := &user.Id;
	//database.DB.Create(&user.Id)
	sqlStatement := `UPDATE users SET Password = $2 WHERE id = $1;`
	database.DB.Exec(sqlStatement, id, password)*/
	//return c.JSON(user)
}

func ChangeFirstName(c *fiber.Ctx) error {
	var data map[string]string

	if err:=c.BodyParser(&data); err!=nil{
		return err
	}
	var user models.User
	database.DB.Where("email=?", data["email"]).First(&user)
	firstName := data["firstName"]
	id:= user.Id
	sqlStatement := `UPDATE users SET first_name = ? WHERE Id = ?;`
		database.DB.Exec(sqlStatement, firstName, id)
		return c.JSON(fiber.Map{
			"message":"First name changed successfully. Please refresh",
		})	
}

func ChangeLastName(c *fiber.Ctx) error {
	var data map[string]string

	if err:=c.BodyParser(&data); err!=nil{
		return err
	}
	var user models.User
	database.DB.Where("email=?", data["email"]).First(&user)
	lastName := data["lastName"]
	id:= user.Id
	sqlStatement := `UPDATE users SET last_name = ? WHERE Id = ?;`
		database.DB.Exec(sqlStatement, lastName, id)
		return c.JSON(fiber.Map{
			"message":"Last name changed successfully. Please refresh",
		})	
}

func ChangeEmail(c *fiber.Ctx) error {
	var data map[string]string

	if err:=c.BodyParser(&data); err!=nil{
		return err
	}
	var user models.User
	database.DB.Where("email=?", data["email"]).First(&user)
	newEmail := data["newEmail"]
	id:= user.Id
	sqlStatement := `UPDATE users SET email = ? WHERE Id = ?;`
		database.DB.Exec(sqlStatement, newEmail, id)
		return c.JSON(fiber.Map{
			"message":"E-mail address changed successfully. Please refresh",
		})	
}

func Login(c *fiber.Ctx) error {
	var data map[string]string

	if err:=c.BodyParser(&data); err!=nil{
		return err
	}

	var user models.User

	database.DB.Where("email=?", data["email"]).First(&user)

	if user.Id == 0{
		c.Status(fiber.StatusNotFound)
		return c.JSON(fiber.Map{
			"message":"user not found",
		})
	}

	if err:=bcrypt.CompareHashAndPassword(user.Password, []byte(data["password"])); err!= nil{
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"message":"incorrect password",
		})
	}
	claims:=jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer: strconv.Itoa(int(user.Id)),
		ExpiresAt: time.Now().Add(time.Hour*24).Unix(),
	})

	token, err:=claims.SignedString([]byte(SecretKey))

	if err != nil{
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"message":"could not login",
		})
	}

	cookie := fiber.Cookie{
		Name: "jwt",
		Value: token,
		Expires: time.Now().Add(time.Hour*24),
		HTTPOnly: true,
	}

	c.Cookie(&cookie)

	return c.JSON(fiber.Map{
		"message":"success",
	})

}


func User(c *fiber.Ctx) error{
	cookie:= c.Cookies("jwt")
	token,err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{}, func(t *jwt.Token) (interface{}, error) {
		return []byte(SecretKey),nil
	})

	if err!=nil{
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"message":"unathenticated",
		})
	}

	claims := token.Claims.(*jwt.StandardClaims)

	var user models.User

	database.DB.Where("id=?", claims.Issuer).First(&user)

	return c.JSON(user)

}

func Logout(c *fiber.Ctx) error{
	cookie:=fiber.Cookie{
		Name:"jwt",
		Value: "",
		Expires: time.Now().Add(-time.Hour),
		HTTPOnly: true,
	}

	c.Cookie(&cookie)

	return c.JSON(fiber.Map{
		"message":"success",
	})
}