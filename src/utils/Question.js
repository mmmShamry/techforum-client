export const getQuestionId = (question) => (question ? question.Id : null);

export const getQuestionBody = (question) => (question ? question.Question : null);

export const getQuestionTitle = (question) => (question && question.Title ? question.Title : "Question");

export const getQuestionOwner = (question) => (question && question.FirstName && question.LastName ? `${question.FirstName} ${question.LastName}` : null);

export const getTotalAnswers = (question) => (question && question.totalAnswers ? question.totalAnswers : 0);

export const getQuestionCreatedDate = (question) => (question && question.CreatedDate ? question.CreatedDate : null)