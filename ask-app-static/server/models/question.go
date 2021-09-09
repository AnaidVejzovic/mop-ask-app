package models

type Question struct {
	Id uint `json:"id"`
	Question string `json:"question"`
	QPosterId string `json:"qPosterId"`
	QPosterName string `json:"qPosterName"`
	Likes uint `json:"likes"`
	Answer string `json:"answer"`
	APosterId string `json:"aPosterId"`
	APosterName string `json:"aPosterName"`
}

// dodati QPosterName
// 