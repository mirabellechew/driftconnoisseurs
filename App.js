import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AuthDetails from "./components/auth/AuthDetails";

export default function App() {
  return (
    <div className="App">
        <h1>driftconnoisseurs.com</h1>
        <Login />
        <Register />
        <AuthDetails />
    </div>
  );
}

