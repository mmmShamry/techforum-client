
export const getAnswerId = (answer) => (answer ? answer.Id : null);

export const getAnswerBody = (answer) => (answer ? answer.Body : null);

export const getAnswerOwner = (answer) => (answer && answer.FirstName && answer.LastName ? `${answer.FirstName} ${answer.LastName}` : null);

export const getAnswerOwnerId = (answer) => (answer && answer.UserId ? answer.UserId : 0);

export const getAnswerDate = (answer) => (answer && answer.CreatedDate ? answer.CreatedDate : null);