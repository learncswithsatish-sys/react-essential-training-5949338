
import './App.css'

let launguage = 'JavaScript';
let moon = '🌕';  
// This is the main App component that renders the TimeOfDayGreeting component with props.
function App() {
  
  return (<div>
    <TimeOfDayGreeting/>
    <WelcomeMessage launguage={launguage} moon={moon} />
  </div>);
}

function WelcomeMessage({ launguage, moon }) {
  console.log('Rendering WelcomeMessage with launguage:', launguage, 'and moon:', moon);
  return (
    
    <div>
  <h2>Hello, {launguage} developers! {moon}</h2>
  <p>Welcome to the React course. Let's build something amazing together!</p>
 </div>);

}
function TimeOfDayGreeting() {
  
  const hours = new Date().getHours();
  console.log('Current hours:', hours);
  let greeting;
  if (hours < 12) {
    greeting = 'Good morning';
  } else if (hours < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }
  return (
    <h1>{greeting}!</h1>
  );
} 


export default App;
export { TimeOfDayGreeting };
export { WelcomeMessage };