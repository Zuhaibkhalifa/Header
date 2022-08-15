import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [massage, setMassage] = useState(null);
  useEffect(() => {
    const curr = axios
      .get("https://dummy-server123.herokuapp.com/")
      .then((data) => {
        setMassage(data.data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {massage && (
        <div>
          <h1>{massage.status}</h1>
          <h2>{massage.data}</h2>
        </div>
      )}
    </div>
  );
};

export default Home;
