import React, { useState, useEffect } from "react";
import { arr } from "./Home";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Grid from "@material-ui/core/Grid";
import "./Card.css";
function Card1() {
  const url = `https://api.github.com/users/${arr[arr.length - 1]}`;
  const [account, setAccount] = useState(null);
  useEffect(() => {
    axios.get(url).then((response) => {
      setAccount(response.data);
    });
  }, [url]);
  if (account) {
    return (
      <div className="acc">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src={account.avatar_url} />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>GitoCard</Card.Title>
              <Card.Text>
                <strong>{account.bio}</strong>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                User Name: <strong>{account.login}</strong>
              </ListGroup.Item>
              <ListGroup.Item>
                Name:<strong>{account.name}</strong>{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                Number. of public repository:{" "}
                <strong>{account.public_repos}</strong>
              </ListGroup.Item>
              <ListGroup.Item>
                No. of public gists: <strong>{account.public_gists}</strong>
              </ListGroup.Item>
              <ListGroup.Item>
                Profile created: <strong>{account.created_at}</strong>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href={`https://github.com/${arr[arr.length - 1]}`}>
                Github Link
              </Card.Link>
            </Card.Body>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default Card1;
