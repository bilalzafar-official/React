
import React, { useState } from "react";
import UserContext from "./Context/UserContext";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import './App.css'
function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <h1>My App</h1>
        <Login />
        <Profile />
      </div>
    </UserContext.Provider>
  );
}

export default App;
