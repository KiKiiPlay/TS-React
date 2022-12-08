import { useEffect, useState } from "react";
import { News } from "../types";
import Header from "./Header";
import NewsSingle from "./NewsSingle";

const NewsList = () => {
  const [latestNews, setLatestNews] = useState<News[]>([]);

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
      <Header />
      <h1>Latest Releases</h1>
      {latestNews.map((news) => (
        <NewsSingle news={news} key={news.id} />
      ))}
    </>
  );
};

export default NewsList;
