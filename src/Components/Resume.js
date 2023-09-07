import React, { useCallback } from "react";
import Slide from "react-reveal";
import axios from "axios";

const Resume = (props) => {

const sendRequest = useCallback(async (endpoint) => {
  const url = `https://stocker9.com/api/trade/test/${endpoint}`;
  try {
    const res = await axios.post(url);
    console.log(res.data);
    alert("Trade Order Submitted"); 
  } catch (error) {
    console.error(error);
    alert(error); 
  }
}, []);

const clickBuy = () => {
  sendRequest("buy");
}
const clickBuy2 = () => {
  sendRequest("buy2");
};
const clickSell = () => {
  sendRequest("sell");
};
const clickSell2 = () => {
  sendRequest("sell2");
};


  return (
    <section id="resume">
      <Slide left duration={1300}>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Trade</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <br /> <br />
                <div key="삼성전자">
                  <h3>삼성전자</h3>
                  <div className="trade-button-wrapper">
                    <br />
                    <div className="trade-button-container">
                      <button className="buy-1" onClick={clickBuy}>
                        BUY
                      </button>
                      <button className="sell-1" onClick={clickSell}>
                        SELL
                      </button>
                    </div>
                    <br />
                  </div>
                </div>
                <div key="sk하이닉스">
                  <h3>sk하이닉스</h3>
                  <div className="trade-button-wrapper">
                    <br />

                    <div className="trade-button-container">
                      <button className="buy-2" onClick={clickBuy2}>
                        BUY
                      </button>
                      <button className="sell-2" onClick={clickSell2}>
                        SELL
                      </button>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
};

export default Resume;