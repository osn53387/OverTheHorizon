function startTime() {    
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('Live-Clock').innerHTML =  hours + ":" + minutes + ":" + seconds;
    setTimeout(startTime, 1000);
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i} 
    else if (i == 0) {i = 00}; // add zero in front of numbers < 10
    return i;
  }

  let popup = document.getElementById("Pop-up");

  function startNewProject() {
    popup.classList.add("open-Pop-up");
  }

  function finalizeNewProject() {
    popup.classList.remove("open-Pop-up");
  }

  function calculateTimeDifference() {
    const today = new Date();
    let todayDate = today.getDate();

    let placeHolder = document.getElementById("Date-For-Goal").innerHTML;
    let Goal = placeHolder.getDate();

    let calculateTimeDifference = todayDate.getTime() - Goal.getTime();
    let dayDifference = Math.ceil(calculateTimeDifference / (1000 * 3600 * 24));
    
    if (dayDifference <= 10) {
       let remainingTime = calculateTimeDifference / (1000 * 3600);
       document.getElementById('Time-Remaining').innerHTML = remainingTime;
       setTimeout(calculateTimeDifference, 1000);
    }
    // Will need a date validation here
  }

  function displayProjectName() {
    let projectName = document.getElementById('Name-For-Project').innerHTML;

  }