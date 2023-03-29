import logo from './logo.svg';
import './App.css';

function App() {
  let isUserLoggedIn = true;
  if (isUserLoggedIn) {
    return <h1>Hello User</h1>;
  } else {
    return <h1>Login Now</h1>;
  }
}

export default App;
