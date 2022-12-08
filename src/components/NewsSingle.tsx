import { Button, Card } from "react-bootstrap";
import { News } from "../types";
import { useNavigate } from "react-router-dom";

interface NewsProps {
  news: News;
}

const NewsSingle = ({ news }: NewsProps) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={news.imageUrl} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>{news.summary}</Card.Text>
        <Card.Text>{news.publishedAt}</Card.Text>
        <Button variant="primary" onClick={() => navigate("/detail")}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsSingle;
