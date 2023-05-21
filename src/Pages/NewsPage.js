import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainSlider from "../Components/MainSlider/MainSlider";
import News from "../Components/News/News";
import NewsGroups from "../Components/NewsGroups/NewsGroups";
import axios from "axios";

const NewsPage = () => {
  const [newsData, setNewsData] = useState({
    beforeSlider: [],
    afterSlider: [],
  });

  useEffect(() => {
    axios(`${process.env.REACT_APP_BASIC_URL}/news?limit=8`)
      .then((response) => {

        let responseData = response.data.data;
        setNewsData({
          beforeSlider: responseData.slice(0, 4),
          afterSlider: responseData.slice(4, 8),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(newsData.beforeSlider.length > 0)

  const [filter, setFilter] = useState({
    sort: "latest",
    group: "all",
  });

  const groups = [
    {
      id: "1449",
      name: "All",
      value: "all",
    },
    {
      id: "1450",
      name: "news group name1",
      value: "news_group_name1",
    },
    {
      id: "1451",
      name: "news group name2",
      value: "news_group_name2",
    },
    {
      id: "1452",
      name: "news group name3",
      value: "news_group_name3",
    },
    {
      id: "1453",
      name: "news group name4",
      value: "news_group_name4",
    },
    {
      id: "1454",
      name: "news group name5",
      value: "news_group_name5",
    },
    {
      id: "1455",
      name: "news group name6",
      value: "news_group_name6",
    },
    {
      id: "1456",
      name: "news group name7",
      value: "news_group_name7",
    },
    {
      id: "1457",
      name: "news group name8",
      value: "news_group_name8",
    },
  ];



  return (
    <div className="container">
      <div className="pages-anchor">
        <Link to="/">Home</Link>
        <span>{`>`}</span>
        <Link to="/news">News</Link>
      </div>
      <div className="row" style={{ position: "relative", marginTop: "24px" }}>
        <div className="col-md-12 slider-container">
          <div
            className="items-header-with-select"
            style={{ marginBottom: "24px" }}
          >
            <p className="page-titles" style={{marginBottom: "0px"}}>
              News <span>60,000</span>
            </p>
            <div className="items-header-select">
              <span className="items-header-select-name">Sort by</span>
              <select
                className={`select-form-control shops-sort-dropdown`}
                onChange={(e) =>
                  setFilter((prevState) => {
                    return { ...prevState, sort: e.target.value };
                  })
                }
              >
                <option value="latest">Latest</option>
                <option value="z-a">Z - A</option>
                <option value="a-z">A - Z</option>
              </select>
            </div>
          </div>
          <NewsGroups
            groups={groups}
            activeGroup={filter}
            setActiveGroup={setFilter}
          />
        </div>
        <div className="news-items-content col-md-12">
          {newsData.beforeSlider.length > 0 &&
            newsData.beforeSlider.map((news) => {
              return <News data={news} key={news.id} />;
            })}
          <div style={{width: "100%", marginBottom: "20px"}}>
            <MainSlider productsPages={true}/>
          </div>
          {newsData.afterSlider.length > 0 &&
            newsData.afterSlider.map((news) => {
              return <News data={news} key={news.id} />;
            })}
          <div className="load-more">
            <button className="load-more-button" >
              Load
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
