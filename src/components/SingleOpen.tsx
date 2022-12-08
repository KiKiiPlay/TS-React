import { News } from "../types";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

interface NewsProps {
  news: News;
}

const SingleOpen = () => {
  const [single, setSingle] = useState<News[]>([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      let response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/17542`
      );
      if (response.ok) {
        let data = await response.json();
        setSingle(data);
      } else {
        console.log("error from the server");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="imageUrl" />
        <Card.Body>
          <Card.Title>title</Card.Title>
          <Card.Text>summary</Card.Text>
          <Card.Text>published</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleOpen;
