// "Id": "2",
// "Body": "test answer 2",
// "CreatedDate": "2022-12-13",
// "FirstName": "test",
// "LastName": "user",
// "UserId": "1"

export const getAnswerId = (answer) => (answer ? answer.Id : null);

export const getAnswerBody = (answer) => (answer ? answer.Body : null);

export const getAnswerOwner = (answer) => (answer && answer.FirstName && answer.LastName ? `${answer.FirstName} ${answer.LastName}` : null);

export const getAnswerOwnerId = (answer) => (answer && answer.UserId ? answer.UserId : 0);

export const getAnswerDate = (answer) => (answer && answer.CreatedDate ? answer.CreatedDate : null);