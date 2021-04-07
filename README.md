# Would you Rather?
## Components
1. PollItem
1. UserScore
1. Nav
1. Login
1. HomeUnanswered
	1. PollItemList
1. HomeAnswered
	1. PollItemList
1. PollDetail
	1. PollAnswer
	1. PollResult
		1. OptionResult
1. LeaderBoard
	1. List of UserScore
1. NewPoll

## Events
1. AuthedUser
	1. Login
	1. Logout
1. Users
	1. Receive Users
1. Polls
	1. Receive Polls
	1. Add Poll
	1. Answer Poll

## Store
1. Users
1. Questions
1. AuthedUser

## _DATA
The API provides:
1. _getUsers ()
1. _getQuestions ()
1. _saveQuestion (question)
1. _saveQuestionAnswer ({ authedUser, qid, answer })
