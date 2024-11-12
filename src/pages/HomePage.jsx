import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { getTest } from '../features/initialSlice'
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config"
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/authenticationSlice";

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const testValueRx = useSelector(getTest);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(clearUser());
      console.log('Signed out!!')
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };


  const handleBtn = () => {
    navigate("/about");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page</p>
      <p>Redux toolkit is implemented, Redux state value: {testValueRx}</p>
      <Button variant="contained" onClick={handleBtn}>
        Go to About
      </Button>
      <Button variant="contained" onClick={handleSignOut}>
        Logout
      </Button>
    </div>
  );
}

export default HomePage;
