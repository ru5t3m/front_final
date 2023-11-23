document.getElementById("submit-quiz").addEventListener("click", function () {
    const responses = {
        question1: document.querySelector('input[name="question1"]:checked').value,
        question2: document.querySelector('input[name="question2"]:checked').value,
        question3: document.querySelector('input[name="question3"]:checked').value,
        question4: document.querySelector('input[name="question4"]:checked').value,
        question5: document.querySelector('input[name="question5"]:checked').value,
        question6: document.querySelector('input[name="question6"]:checked').value,
        question7: document.querySelector('input[name="question7"]:checked').value,
        question8: document.querySelector('input[name="question8"]:checked').value,
        question9: document.querySelector('input[name="question9"]:checked').value,
        question10: getCheckboxValues('question10')
    };

    const educationalPlan = generateEducationalPlan(responses);
    displayEducationalPlan(educationalPlan);
});

function getCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    const values = [];
    checkboxes.forEach(checkbox => {
        values.push(checkbox.value);
    });
    return values;
}

function generateEducationalPlan(responses) {
    let plan = "Based on your responses, here's a general educational plan for you:\n\n";

    // Modify the plan based on user responses
    if (responses.question1 === "yes") {
        plan += "- Choose a country of preference to study abroad.\n";
    }
    if (responses.question2 === "yes") {
        plan += "- Examine universities in the selected country.\n";
    }
    if (responses.question3 === "yes") {
        plan += "- Explore and narrow down the suitable universities based on your preferences and their requirements.\n";
    }
    if (responses.question4 === "yes") {
        plan += "- Start preparing for the IELTS exam as it's essential for foreign university applications.\n";
    }
    if (responses.question5 === "yes") {
        plan += "- Engage more in extracurricular activities to enhance your profile.\n";
    }
    if (responses.question6 === "yes") {
        plan += "- Initiate and manage a scientific project within your school.\n";
    }
    if (responses.question7 === "yes") {
        plan += "- Gather recommendation letters from mentors or teachers.\n";
    }
    if (responses.question8 === "yes") {
        plan += "- Begin drafting a motivational letter for your university applications.\n";
    }
    if (responses.question9 === "yes") {
        plan += "- Ensure you meet all the specified requirements for your chosen universities.\n";
    }
    if (responses.question10.includes("other")) {
        plan += "- Additionally, focus on fulfilling any other specific requirements outlined by the universities.\n";
    }

    return plan;
}

function displayEducationalPlan(plan) {

    alert(plan);

}
