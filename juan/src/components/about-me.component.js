import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class AboutMe extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-3 marg">
          <img
            src="assets/images/juanito.jpg"
            alt="This is an image of myself"
            id="float"
          />
        </div>
        <div className="col-6 marg">
          <p id="fart">
            My name is Juan Alberto Pimentel JR. I am 24 years old, I am 6'2,
            and despite my skin color, I am 100% Mexican, not white/mixed.
          </p>
          <br />
          <p id="fart">
            I have been attending PCC for 4 years. I was originally majoring in
            Nursing. I completed all my general ed courses, as well as the
            classes required to apply to the Nursing progam. I am currently
            studying for my TEA's exam, so I could apply to Nursing school.
            While I improve my knowledge in Nursing, I thought it would be great
            to enroll in UCLA's coding bootcamp. So far the class seems
            stressfull, but at the same time I am enjoying the class content.
          </p>
        </div>
      </div>
    );
  }
}
