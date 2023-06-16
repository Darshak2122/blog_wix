import React, { useState } from "react";
import UserRegistation from "./page/UserRegistation";
import LoginPage from "./page/LoginPage";
import Home from "./page/Home";
import MyPost from "./page/MyPost";
import PostDetail from "./page/PostDetail";
import AddPost from "./page/AddPost";
import UserProfile from "./page/UserProfile";
import HomeHeader from "./page/Hf/HomeHeader";

function App() {
  const userId = localStorage.getItem("user_id") || "";
  const defaultScreen = userId ? "Home" : "LoginPage";
  const [screen, setScreen] = useState(defaultScreen);

  const Rendering = () => {
    switch (screen) {
      case "LoginPage":
        return <LoginPage setScreen={setScreen} />;
      case "Registation":
        return <UserRegistation setScreen={setScreen} LoginPage={LoginPage} />;
      case "Home":
        return <Home setScreen={setScreen} />;
      case "MyPost":
        return <MyPost setScreen={setScreen} />;
      case "PostDetail":
        return <PostDetail setScreen={setScreen} />;
      case "AddPost":
        return <AddPost setScreen={setScreen} />;
   case "UserProfile":
         return <UserProfile setScreen={setScreen} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div>
      <HomeHeader setScreen={setScreen} screen={screen} />
        <Rendering />
      </div>
    </>
  );
}

export default App;
