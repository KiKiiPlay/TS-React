import { News } from "../types";
import { useEffect, useState } from "react";

const SingleOpen = () => {
  const [single, setSingle] = useState<News[]>([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      if (response.ok) {
        let data = await response.json();
        setLatestNews(data);
      } else {
        console.log("error from the server");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>h1</h1>
    </>
  );
};

export default SingleOpen;
