import { get } from "../utils/Http";

export const getAllQuestions = () => {
    get('question_controller')
        .then((response) => [null, response.data.data])
        .catch((err) => [err, null])
}