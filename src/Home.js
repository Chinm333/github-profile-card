import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Grid from "@material-ui/core/Grid";
import Card1 from "./Card";
export const arr = [];

function Home() {
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();
  let gitName = userName;
  const handleSubmit = (event) => {
    arr.push(userName);
    console.log(arr);
    event.preventDefault();

    // 👇️ clear all input values in the form
    setUserName("");

    // 👇️ redirect to /contacts
    navigate("/card");
  };

  <Card1 userName={userName} />;
  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <h1>Github profile Card</h1>
        <Card
          style={{
            width: "18rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card.Img
            variant="top"
            src="https://media.giphy.com/media/2ikwIgNrmPZICNmRyX/giphy.gif"
          />
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  <strong>Enter your Username of Github</strong>
                </Form.Label>
                <Form.Control
                  onChange={(event) => setUserName(event.target.value)}
                  value={userName}
                  className="usernamebar"
                  type="text"
                  placeholder="Enter Username"
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Grid>
    </div>
  );
}

export default Home;
