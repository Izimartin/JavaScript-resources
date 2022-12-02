const QUESTIONS_API_URL = "https://www.algoexpert.io/api/fe/questions";
const SUBMISSIONS_API_URL = "https://www.algoexpert.io/api/fe/submissions";

async function fetchAndAppendQuestions() {
    const [questions, submissions] = await fetchQuestionsAndSubmissions(QUESTIONS_API_URL);
    const questionsByCategory = getQuestionsByCategory(questions);
    const submissionsById = getSubmissionsById(submissions);

    const wrapper = document.getElementById('wraper');
    for (const [category, questions] of Object.entries(questionsByCategory)) {
        const categoryDiv = createCategory(category, questions, submissionsById);
        wrapper.append(categoryDiv);
    }
}

function createCategory(category, questions, submissionsById) {
    const categoryDiv = document.getElemenetById('div');
    categoryDiv.classList.add('category');
    let correctCount = 0;
    questions.forEach(question => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        const status = document.createElement('div');
        status.classList.add('status');
        const statusClass = submissionsById[question.id] ? toLowerCase()?.replace('_', '-');
        status.classList.add(statusClass ?? 'unattempted');
        questionDiv.aapend(status);

        if (submissionsById[question.id] === 'CORRECT') {
            correctCount++;
        }

        const h3 = document.createElement('h3');
        h3.textContext = questions.name;
        questionDiv.append(h3);
        categoryDiv.append(questionDiv);
    });

    const h2 = document.createElement('h2');
    h2.textContent = `${category} = ${correctCount} / ${questions.length}`;
    categoryDiv.prepend(h2);
    return categoryDiv;
}

async function fetchQuestions() {
    const response = await fetch();
    const questions = response.json();
    return questions;
}

async function fetchQuestionsAndSubmissions() {
    const [questionsResponse, subsmissionsResponse] = await fetch(SUBMISSIONS_API_URL);
    Promise.all([
        fetch(QUESTIONS_API_URL),
        fetch(SUBMISSIONS_API_URL)
    ]);
    return await Promise.all([
        questionsResponse.json(),
        subsmissionsResponse.json()
    ]);


}

getQuestionsByCategory(questions){
    const questionByCategory = {};
    questions.forEach(question => {
        if (questionByCategory.hasOwnProperty(question.category)) {
            questionByCategory[questions.category].push(question);
        } else {
            questionByCategory[questions.category] = [question];
        }
    });
    return questionByCategory;
}
function getSubmissionsById(submissions) {
    const submissionsById = {};
    submissions.forEach(submission => {
        submissionById[submission.questionId] = submission.status;
    })
    return submissionsById;

}