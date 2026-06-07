import "./App.css";
import React, { useState, useReducer, useEffect } from "react";

let launguage = "JavaScript";
let moon = "🌕";
// This is the main App component that renders the TimeOfDayGreeting component with props.
function App() {
  // Using useState to manage the current language and training status. The output will show the initial language and the function to update it.
  const [currentLaunguage, trainingStatus] = useState(launguage);
  //useReducer is used to manage the state of the moon phase. The output will show the current moon phase and the function to update it.
  const [currentMoon, updateMoon] = useReducer(
    (state, newPhase) => newPhase,
    moon,
  );
  console.log("useState output for language:", currentLaunguage);
  console.log("useReducer output for moon:", currentMoon);

  // Useeffect is used to perform side effects in the component. In this case, it logs a message to the console whenever the current language changes.
  React.useEffect(() => {
    console.log("Current language has changed to:", currentLaunguage);
  }, [currentLaunguage]);
  useEffect(() => {
    console.log("Current moon phase has changed to:", currentMoon);
  }, [currentMoon]);

  return (
    <div>
      <TimeOfDayGreeting />
      <button onClick={() => updateMoon("🌑")}>Change Moon Colour</button>

      <WelcomeMessage
        preRequisites={["HTML", "CSS"]}
        launguage={currentLaunguage}
        moon={currentMoon}
      />

      <CodingSkillsInfo skillsInfo={codingSkills} />
    </div>
  );
}

function WelcomeMessage({ preRequisites, launguage, moon }) {
  console.log(
    "Rendering WelcomeMessage with launguage:",
    launguage,
    "and moon:",
    moon,
  );
  return (
    <div>
      <h2>
        {" "}
        Hello, {launguage} developers! on the planet {moon}
      </h2>
      <p>
        Welcome to the React course. Let's build something amazing together!
      </p>
      <PropsDemo
        developerInfo={{
          name: "Satish",
          level: "Beginner",
          knowlang: "JavaScript",
          preRequisites: preRequisites,
        }}
      />
    </div>
  );
}

function PropsDemo({ developerInfo }) {
  const { name, level, knowlang, preRequisites } = developerInfo;
  // Using useState to demonstrate state management in React. The output will show the initial state value and the function to update it.
  const [competencyLevel, updateCompetencyLevel] = useState(level);
  console.log("useState output:", competencyLevel);
  console.log("Received props in PropsDemo:", {
    name,
    level,
    knowlang,
    preRequisites,
  });
  return (
    <div className="props-demo">
      <p>
        Developer Name: <b>{name}</b>!
      </p>
      <p>
        You are at level: <strong>{competencyLevel}</strong> for React!
      </p>
      <p>
        Pre-requisites Skills: <em>{preRequisites.join(", ")}</em>
      </p>
      <button onClick={() => updateCompetencyLevel("Intermediate")}>
        Update Competency Level
      </button>
    </div>
  );
}

function TimeOfDayGreeting() {
  const hours = new Date().getHours();
  console.log("Current hours:", hours);
  let greeting;
  if (hours < 12) {
    greeting = "Good morning";
  } else if (hours < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  return <h1>{greeting}!</h1>;
}

let codingSkills = ["HTML", "CSS", "JavaScript", "React", "Java", "Python"];
function CodingSkillsInfo({ skillsInfo }) {
  return (
    <div>
      <h2>Developer Skills</h2>
      <ul>
        {skillsInfo.map((skill, index) => (
          <li style={{ listStyle: "none" }} key={index}>
            {index + 1}. {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
// export { TimeOfDayGreeting };
// export { WelcomeMessage };
export { TimeOfDayGreeting, WelcomeMessage, PropsDemo, CodingSkillsInfo };
