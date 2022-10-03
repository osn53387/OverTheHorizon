import { React, useEffect } from "react";
import "./main.css";

const Main = () => {
  function startTime() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById("Live-Clock").innerHTML =
      hours + ":" + minutes + ":" + seconds;
    setTimeout(startTime, 1000);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } else if (i === 0) {
      i = parseInt("00");
    } // add zero in front of numbers < 10
    return i;
  }

  let popup = document.getElementById("Pop-up");

  function startNewProject() {
    popup.classList.add("open-Pop-up");
  }

  function finalizeNewProject() {
    popup.classList.remove("open-Pop-up");
    calculateTimeDifference();
  }

  function calculateTimeDifference() {
    const today = new Date();
    let todayDate = today.getDate();

    let placeHolder = document.getElementById("Date-For-Goal");
    let Goal = placeHolder.getDate();

    let calculateTimeDifference = todayDate.getTime() - Goal.getTime();
    let dayDifference = Math.ceil(calculateTimeDifference / (1000 * 3600 * 24));
    document.getElementById("Live-Clock").innerHTML =
      dayDifference + " days left";
    setTimeout(calculateTimeDifference, -(1000 * 3600 * 24));

    if (dayDifference <= 10) {
      let remainingTime = calculateTimeDifference / (1000 * 3600);
      document.getElementById("Live-Clock").innerHTML = remainingTime;
      setTimeout(calculateTimeDifference, 1000);
    }
    // Will need a date validation here
  }

  function displayProjectName() {
    let projectName = document.getElementById("Name-For-Project").innerHTML;
  }

  useEffect(() => {
    function startTime() {
      const today = new Date();
      let hours = today.getHours();
      let minutes = today.getMinutes();
      let seconds = today.getSeconds();
      minutes = checkTime(minutes);
      seconds = checkTime(seconds);
      document.getElementById("Live-Clock").innerHTML =
        hours + ":" + minutes + ":" + seconds;
      setTimeout(startTime, 1000);
    }
    startTime();
  }, []);

  return (
    <div>
      <div className="TopUI">
        <button type="button">Sign up!</button>
        <button type="button">Login</button>
      </div>
      <div className="Front-Background">
        <h1>Over the Horizon</h1>
        <p>You can see, so go and meet it.</p>
        <div id="Live-Clock" className="World-Time"></div>
        <div className="Main-Buttons">
          <button id="New-Project" type="button" onclick="startNewProject()">
            Set up new project
          </button>
          <div className="Pop-up" id="Pop-up">
            <h2>New Project</h2>
            <input
              type="text"
              id="Name-For-Project"
              placeholder="Project Name"
            />
            <input type="date" id="Date-for-Goal" />
            <button type="submit" onclick="finalizeNewProject()">
              Begin the Countdown
            </button>
          </div>
          <button id="Continue-Project" type="button">
            Continue current journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
