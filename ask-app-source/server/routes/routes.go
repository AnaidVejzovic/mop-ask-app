package routes

import (
	"server/controllers"

	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App){
	app.Post("/api/register", controllers.Register)
	app.Post("/api/changepassword", controllers.ChangePassword)
	app.Post("/api/changefirstname", controllers.ChangeFirstName)
	app.Post("/api/changelastname", controllers.ChangeLastName)
	app.Post("/api/changeemail", controllers.ChangeEmail)
	app.Post("/api/postquestion", controllers.PostQuestion)
	app.Post("/api/postanswer", controllers.PostAnswer)
	app.Post("/api/deleteanswer", controllers.DeleteAnswer)
	app.Post("/api/getquestions", controllers.GetQuestions)
	app.Post("/api/getuserquestions", controllers.GetUserQuestions)
	app.Post("/api/getuseranswers", controllers.GetUserAnswers)
	app.Post("/api/gettopquestions", controllers.GetTopQuestions)
	app.Post("/api/getusers", controllers.GetUsers)
	app.Post("/api/getnamebyid", controllers.GetNameById)
	app.Post("/api/getanswersbyid", controllers.GetAnswersById)
	app.Post("/api/getnotifications", controllers.GetNotifications)
	app.Post("/api/resetnotifications", controllers.ResetNotifications)
	app.Post("/api/likequestion", controllers.LikeQuestion)
	app.Post("/api/dislikequestion", controllers.DislikeQuestion)
	app.Post("/api/login", controllers.Login)
	app.Get("/api/user", controllers.User)
	app.Post("/api/logout", controllers.Logout)
}