import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { getTest } from '../features/initialSlice'
import { useSelector } from "react-redux";

function HomePage() {
  const navigate = useNavigate();

  const testValueRx = useSelector(getTest);

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
    </div>
  );
}

export default HomePage;
