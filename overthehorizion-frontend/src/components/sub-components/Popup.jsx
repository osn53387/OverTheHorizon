import React, { Component } from "react";

export default () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>
      <div className="Pop-up" id="Pop-up">
        <h2>New Project</h2>
        <input type="text" id="Name-For-Project" placeholder="Project Name" />
        <input type="date" id="Date-for-Goal" />
        <button type="submit" onClick="finalizeNewProject()">
          Begin the Countdown
        </button>
      </div>
    </div>
  </Popup>
);
