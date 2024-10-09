function scheduleCheck() {
    let day = prompt("Enter a day of the week: ");
    switch (day) {
        case "Monday":
            alert("Your task for Monday is: Finish your assignments");
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
            alert("Your task for Friday is: Sleep All Day");
            break;
        case "Saturday":
            alert("Your task for Saturday is: Doing Mukbang");
            break;
        case "Sunday":
            alert("Your task for Sunday is: Gala");
            break;
        default:
            alert("Please only enter a day of a week.");
    }
}
