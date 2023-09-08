import React from "react";
import Fade from "react-reveal";

const About = (props) => {
  const increaseData = [
    { company: "LG에너지솔루션", increasePercentage: 354.07 },
    { company: "기아", increasePercentage: 26.45 },
    { company: "SK하이닉스", increasePercentage: 17.2 },
    { company: "현대차", increasePercentage: 1.58 },
    { company: "현대모비스", increasePercentage: 1.1 },
    { company: "KB금융", increasePercentage: 0.97 },
    { company: "삼성전자우", increasePercentage: 0.36 },
    { company: "LG전자", increasePercentage: 0.2 },
    { company: "LG화학", increasePercentage: 0.17 },
    { company: "신한지주", increasePercentage: 0.14 },
  ];
  const decreaseData = [
    { company: "삼성전자", decreasePercentage: -5.71 },
    { company: "POSCO홀딩스", decreasePercentage: -3.63 },
    { company: "SK이노베이션", decreasePercentage: -1.07 },
    { company: "NAVER", decreasePercentage: -0.46 },
    { company: "셀트리온", decreasePercentage: -0.4 },
    { company: "삼성SDI", decreasePercentage: -0.33 },
    { company: "삼성물산", decreasePercentage: -0.19 },
    { company: "삼성바이오로직스", decreasePercentage: -0.13 },
    { company: "포스코인터내셔널", decreasePercentage: 0.0 },
    { company: "삼성생명", decreasePercentage: 0.0 },
  ];
    const volumeData = [
      { company: "KODEX 코스닥150선물인버스", tradeVolume: 123509459 },
      { company: "KODEX 200선물인버스2X", tradeVolume: 118606981 },
      { company: "삼부토건", tradeVolume: 51772691 },
      { company: "한국ANKOR유전", tradeVolume: 29051700 },
      { company: "신한 인버스 2X WTI원유 선물 ETN(H)", tradeVolume: 25053289 },
      { company: "KODEX 코스닥150레버리지", tradeVolume: 22321628 },
      { company: "에이프로젠바이오로직스", tradeVolume: 21363493 },
      { company: "KODEX 인버스", tradeVolume: 20753967 },
      { company: "KODEX 레버리지", tradeVolume: 19527342 },
      { company: "에이프로젠", tradeVolume: 18872655 },
    ];

  const increaseList = increaseData.map((item, index) => {
    return (
      <li key={index}>
        {index + 1}. {item.company} (⬆{item.increasePercentage} %)
      </li>
    );
  });
  const decreaseList = decreaseData.map((item, index) => {
    return (
      <li key={index}>
        {index + 1}. {item.company} (⬇{item.decreasePercentage} %)
      </li>
    );
  });
    const volumeList = volumeData.map((item, index) => {
      return (
        <li key={index}>
          {index + 1}. {item.company} ({item.tradeVolume})
        </li>
      );
    });

  if (!props.data) return null;
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
            <h2>Stock Rankings</h2>
            <div className="row">
              <br />
              <div className="stock-ranking-container">
                <div className="stock-rankings-sub">
                  <div className="stock-rankings-sub-sub">
                    <h3>Top 10 by Trade Volume</h3>
                    <div className="row">{volumeList}</div>
                  </div>
                  <br />
                  <br />
                  <div className="stock-rankings-sub-sub">
                    <h3>Top 10 Performers</h3>
                    <div className="row">{increaseList}</div>
                  </div>
                  <br />
                  <br />

                  <div className="stock-rankings-sub">
                    <h3>Worst 10 Performers</h3>
                    <div className="row">{decreaseList}</div>
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
