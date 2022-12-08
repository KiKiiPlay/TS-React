import { Card } from "react-bootstrap";
import { News } from "../types";

interface NewsProps {
  news: News;
}

const NewsSingle = ({ news }: NewsProps) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={news.imageUrl} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>{news.summary}</Card.Text>
        <Card.Text>{news.publishedAt}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsSingle;
