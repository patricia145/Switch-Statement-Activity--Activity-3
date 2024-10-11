function scheduleCheck() {
    let day = prompt("Enter a day of the week: ");
    switch (day) {
        case "Monday":
            alert("Your task for Monday is: Do homework");
            break;
        case "Tuesday":
            alert("Your task for Tuesday is: Doing Household Chores");
            break;
        case "Wednesday":
            alert("Your task for Wednesday is: Watching K drama");
            break;
        case "Thursday":
            alert("Your task for Thursday is: Exercise");
            break;
        case "Friday":
            alert("Your task for Friday is: Gala with Friends");
            break;
        case "Saturday":
            alert("Your task for Saturday is: Study");
            break;
        case "Sunday":
            alert("Your task for Sunday is: Go to Church");
            break;
        default:
            alert("Please only enter a day of a week.");
    }
}
