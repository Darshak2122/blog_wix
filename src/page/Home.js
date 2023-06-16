import React, { useState, useEffect } from "react";

import "../css/HomePage.css";

const HomePage = ({ setScreen }) => {
  const [data, setData] = useState();

  
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json.posts));
  }, []);

  return (
    <div className="back">
      <div className="aa">
        <div class="col-sm-6 mb-3 mb-sm-0">
          {data?.map((elem) => (
            <div class="card1">
              <div class="card-body">
                <h5 class="card-title">{elem.title}</h5>
                <p class="card-text">{elem.body}</p>
                <p class="card-text">userId : {elem.userId}</p>
                <div style={{ display: "flex" }}>
                  <p class="card-text">Tags : {elem.tags[0]}</p>,
                  <p class="card-text">{elem.tags[1]}</p>,
                  <p class="card-text"> {elem.tags[2]}</p>
                </div>
                {/* {elem.tags((val) => (
                <div>
                  <p>{val}</p>
                </div>
              ))} */}
                <p class="card-text">reactions : {elem.reactions}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
