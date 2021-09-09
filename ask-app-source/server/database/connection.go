package database

import (
	"server/models"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)
var DB *gorm.DB
func Connect (){
	connection, err := gorm.Open(mysql.Open("root:rootroot@/ask_app_db"), &gorm.Config{})
	//.Open(username:password@/database_name)

    if err != nil {
        panic("could not connect to the database")
    }
	DB=connection
	connection.AutoMigrate(&models.User{})
	connection.AutoMigrate(&models.Question{})
	//connection.AutoMigrate(&models.Answer{})
	// Migrirati pitanja i odgovore
}