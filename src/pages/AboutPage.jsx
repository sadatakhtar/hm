import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function AboutPage() {
  const navigate = useNavigate();

  const handleBtn = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>About Page</h1>
      <Button variant="contained" onClick={handleBtn}>
        Go to home page
      </Button>
    </div>
  );
}

export default AboutPage;
