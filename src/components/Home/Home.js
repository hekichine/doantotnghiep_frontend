import React from "react";

import "./Home.scss";

let fakeData = [
  {
    username: "dat123",
  },
  {
    username: "minhlap",
  },
  {
    username: "handmate",
  },
  {
    username: "kacut",
  },
  {
    username: "hanti",
  },
  {
    username: "nobat",
  },
  {
    username: "sanhu",
  },
  {
    username: "lucky",
  },
];
const Home = () => {
  return (
    <>
      <div className="container home-container">
        <div className="row gx-3 gy-3">
          <h2>User List</h2>
          {fakeData.map((user, index) => (
            <div className="col col-4 text-center" key={index}>
              <div className="col-inner">
                <div className="username">{user.username}</div>
                <button className="delete-user">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
