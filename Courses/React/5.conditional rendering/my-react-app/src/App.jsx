import UserGreeting from "./assets/UserGreeting";

function App() {
 return(
  <>
  <UserGreeting isLoggedIn={true} username="Yasmine"/>
  <UserGreeting/>
  </>
 );
}

export default App
