import React, { Component } from "react";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <head>
          <title>This is MY title</title>
        </head>
        <body>
          <header className='showcase'>
            <div className='showcase-social-media'>
              <a href='#' className='btn btn-rounded' id='sign-in'>
                Sign in
              </a>
            </div>
            <div className='showcase-content'>
              <h1>Quincy Hill</h1>
              <p>Engineering | Computer Science</p>
              <p>
                <a href='therealquincyhill@gmail.com'>Email</a>
                {"  "}224-256-0892{"  "}
              </p>
            </div>
          </header>
          <hr />

          <div className='container'>
            <section>
              <a
                href='https://www.github.com/quincyhill'
                className='btn btn-xl'
              >
                Github <i className='fas fa-chevron-right btn-icon'></i>
              </a>
            </section>

            <p>Quincy Hill </p>
            <p>Antioch IL </p>
            <p>
              therealquincyhill@gmail.com 1-224-256-0892{" "}
              <a href='https://www.github.com/quincyhill'>Github</a>
            </p>
          </div>
          <footer class='footer'>
            <p>Questions? Call 1-224-256-0892</p>
            <div className='footer-cols'>
              <ul>
                <li>
                  <a href='#'>FAQ</a>
                </li>
                <li>
                  <a href='#'>Investor Relations</a>
                </li>
                <li>
                  <a href='#'>Ways to Watch</a>
                </li>
                <li>
                  <a href='#'>Corporate Information</a>
                </li>
                <li>
                  <a href='#'>Netflix Originals</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href='#'>Help Center</a>
                </li>
                <li>
                  <a href='#'>Jobs</a>
                </li>
                <li>
                  <a href='#'>Terms Of Use</a>
                </li>
                <li>
                  <a href='#'>Contact Us</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href='#'>Account</a>
                </li>
                <li>
                  <a href='#'>Redeem Gift Cards</a>
                </li>
                <li>
                  <a href='#'>Privacy</a>
                </li>
                <li>
                  <a href='#'>Speed Test</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href='#'>Media Center</a>
                </li>
                <li>
                  <a href='#'>Buy Gift Cards</a>
                </li>
                <li>
                  <a href='#'>Cookie Preferences</a>
                </li>
                <li>
                  <a href=''>Legal Notices</a>
                </li>
              </ul>
            </div>
          </footer>
        </body>
      </div>
    );
  }
}
