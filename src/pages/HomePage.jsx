import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const handleBtn = () => {
    navigate("/about");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Button variant="contained" onClick={handleBtn}>
        Go to About
      </Button>
    </div>
  );
}

export default HomePage;
