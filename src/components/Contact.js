import React from "react";
import "./Contact.css";
import facebook from "./Images/facebook.png";
import instagram from "./Images/instagram.png";
import mail from "./Images/gmail.png";
import linkedin from "./Images/linkedin.png";

export default function Contact() {
  return (
    <>
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              dolorem repellat consequuntur incidunt. Esse ad quam labore sequi,
              culpa recusandae?
            </p>
            <div className="icons">
              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Asha Rani K P</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Bangalore</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">asharanikp@gmail.com</div>
                </div>
              </div>
              <div className="social">
                  <p className="link1">
                    <a
                      href="https://www.instagram.com/_s.joshi__/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img src={instagram} alt="" />
                    </a>
                    <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                      <img src={facebook} alt="" />
                    </a>
                    <a
                      href="mailto:sudhanvasjoshi2002@gmail.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img src={mail} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/mwlite/in/sudhanva-s-joshi-35176622a"
                    rel="noreferrer"
                    target="_blank"
                    >
                      <img src={linkedin} alt="" />
                    </a>
                  </p>
                </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form action="#">
              <div className="fields">
                <div className="field name">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="field email">
                  <input type="email" placeholder="Email" required />
                </div>
              </div>
              <div className="field">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Describe project.."
                ></textarea>
              </div>
              <div className="button">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
      <footer>
        <span>Created By <a href='#HOME'>Asha Rani K P</a> | <span className= "far fa-copyright"></span> 2022 All rights reserved.</span>
    </footer>
    </>
  );
}
