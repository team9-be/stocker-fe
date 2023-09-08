import React, { useEffect } from "react";
import Fade from "react-reveal";
import axios from "axios";

const About = (props) => {

  const [increasing, setIncreasing] = React.useState([]);
  const [decreasing , setDecreasing] = React.useState([]);

  useEffect(() => {
    const fetchIncreaseData = async () => {
      const res = await axios.get(`https://stocker9.com/api/stocks/increase`);
      console.log(res.data);
     setIncreasing(res.data);
    };
    const fetchDecreaseData = async () => {
      const res = await axios.get(`https://stocker9.com/api/stocks/decrease`);
      console.log(res.data);
     setDecreasing(res.data);
    };
    fetchIncreaseData();
    fetchDecreaseData();
  }, []);

  // const data = [
  //   { company: "삼성전자", increasePercentage: 1.0 },
  //   { company: "LG에너지솔루션", increasePercentage: 2.0 },
  //   { company: "SK하이닉스", increasePercentage: 3.0 },
  //   { company: "삼성바이오로직스", increasePercentage: 4.0 },
  //   { company: "POSCO홀딩스", increasePercentage: 5.0 },
  //   { company: "삼성전자우", increasePercentage: 6.0 },
  //   { company: "삼성SDI", increasePercentage: 7.0 },
  //   { company: "LG화학", increasePercentage: 8.0 },
  //   { company: "현대차", increasePercentage: 9.0 },
  //   { company: "NAVER", increasePercentage: 999.0 },
  // ];

  // useEffect(() => {
  //   data.map((item, index) => {
  //     console.log(item.company);
  //     console.log(item.increasePercentage);
  //     console.log(index);
  //   });
  // }
  // )
  const increaseList = increasing.map((item, index) => {
    return (
      <li key={index}>
        {index + 1}. {item.company} (⬆{item.increasePercentage} %)
      </li>
    );
  });
  const decreaseList = decreasing.map((item, index) => {
    return (
      <li key={index}>
        {index + 1}. {item.company} (⬇{item.increasePercentage} %)
      </li>
    );
  });

  const profilepic = "images/" + props.data.image;
  const bio = props.data.bio;

  return (
    <section id="about">
      <Fade duration={1000}>
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Stocker Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>
              What is <im>Stocker</im> ?
            </h2>
            <p>{bio}</p>
            <br /> <br />
            <br /> <br />
            <div className="row">
              <h2>Stock Rankings</h2>
              <br />
              <div className="stock-ranking-container">
                <div className="stock-rankings-sub">
                  <h3>Top 10 Performers</h3>
                  <div className="row">
                    {increaseList}
                  </div>
                </div>

                <div className="stock-rankings-sub">
                  <h3>Worst 10 Performers</h3>

                  <div className="row">
                    {decreaseList}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
