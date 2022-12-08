import { Button, Card } from "react-bootstrap";
import { News } from "../types";
import { useNavigate } from "react-router-dom";
import SingleOpen from "./SingleOpen";

interface NewsProps {
  news: News;
}

const NewsSingle = ({ news }: NewsProps) => {
  const navigate = useNavigate();
  return (
    <Card className="mx-auto" style={{ width: "50%" }}>
      <Card.Img variant="top" src={news.imageUrl} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>{news.summary}</Card.Text>
        <Card.Text>{news.publishedAt}</Card.Text>
        <Button
          variant="primary"
          onClick={() => navigate("/detail/" + news.id)}
        >
          {/*`detail/${news.id}` */}
          SEE MORE
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsSingle;
