import "./App.css";

let launguage = "JavaScript";
let moon = "🌕";
// This is the main App component that renders the TimeOfDayGreeting component with props.
function App() {
  return (
    <div>
      <TimeOfDayGreeting />
      <WelcomeMessage launguage={launguage} moon={moon} />
      <WelcomeMessage launguage="Java" moon="mars" />{" "}
      {/* passing different props to demonstrate reusability of the WelcomeMessage component */}
      <PropsDemo
        developerInfo={{
          name: "Satish",
          level: "Beginner",
          knowlang: "JavaScript",
        }}
      />
      <CodingSkillsInfo skillsInfo={codingSkills} />
    </div>
  );
}

function WelcomeMessage({ launguage, moon }) {
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
        <marquee scrollamount="20" style={{ fontSize: "24px" }}>
          Hello, {launguage} developers! on the planet {moon}
        </marquee>
      </h2>
      <p>
        Welcome to the React course. Let's build something amazing together!
      </p>
    </div>
  );
}

function PropsDemo({ developerInfo }) {
  const { name, level, knowlang } = developerInfo;
  console.log("Received props in PropsDemo:", { name, level, knowlang });
  return (
    <div className="props-demo">
      <p>
        Hi <b>{name}</b>!
      </p>
      <p>
        You are at level: <strong>{level}</strong>
      </p>
      <p>
        You know: <em>{knowlang}</em>
      </p>
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
