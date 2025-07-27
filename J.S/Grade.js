function calculate_grade(score) {
    if (score >= 90) return "A";
    else if (score >= 77) return "B";
    else if (score >= 70) return "C";
    else if (score >= 50) return "D";
    else return "F";
}

function get_feedback(grade) {
    switch (grade) {
        case "A":
            return "Excellent performance!";
        case "B":
            return "Good job, keep improving!";
        case "C":
            return "Fair effort, keep working on it!";
        case "D":
            return "You can do better—keep studying!";
        case "F":
            return "Needs Improvement, Ask for help!";
        default:
            return "Invalid grade.";
}
}

function process_score(score) {
    if (isNaN(score) || score < 0 || score > 100) {
        console.log(`Invalid score for ${score}. Please use a value between 0 and 100.`);
        return;
}

    let grade = calculate_grade(score);
    let feedback = get_feedback(grade);
    console.log(`Score: ${score}`);
    console.log(`Grade: ${grade}`);
    console.log(`Feedback: ${feedback}`);
}

function main() {
    let score = 59; 
    process_score(score);
    
    score = 77; 
    process_score(score);
}

main();