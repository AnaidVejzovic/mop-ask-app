package models

type Answer struct {
	Id uint `json:"id"`
	Answer string `json:"answer"`
	APosterId uint `json:"aPosterId"`
	QuestionId uint `json:"questionId"`
}