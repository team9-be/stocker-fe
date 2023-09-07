import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;


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
                What is <im>stocker</im> ?
              </h2>
              <p>{bio}</p>
              <br /> <br />
              <br /> <br />
              <div className="row">
                <h2>Stock Rankings</h2>
                <div className="stock-ranking-container">
                  <div className="stock-rankings-sub">
                    <h3>Top 10 Performers</h3>
                    <div className="row">
                      <li> 1 </li>
                      <li> 2 </li>
                      <li> 3 </li>
                      <li> 4 </li>
                      <li> 5 </li>
                      <li> 6 </li>
                      <li> 7 </li>
                      <li> 8 </li>
                      <li> 9 </li>
                      <li> 10 </li>
                    </div>
                  </div>

                  <div className="stock-rankings-sub">
                    <h3>Worst 10 Performers</h3>

                    <div className="row">
                      <li> whatev1 </li>
                      <li> whatev2 </li>
                      <li> whatev3 </li>
                      <li> whatev4 </li>
                      <li> whatev5 </li>
                      <li> whatev6 </li>
                      <li> whatev7 </li>
                      <li> whatev8 </li>
                      <li> whatev9 </li>
                      <li> whatev10 </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
