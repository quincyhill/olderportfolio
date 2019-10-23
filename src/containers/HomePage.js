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
            <div className='showcase-top'>
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
              <a
                href='https://www.github.com/quincyhill'
                className='btn btn-xl'
              >
                Github <i className='fas fa-chevron-right btn-icon'></i>
              </a>
            </div>
          </header>
          <hr />

          <section className='tabs'>
            <div className='container'>
              <div id='tab-1' className='tab-item tab-border'>
                <i className='fas fa-door-open fa-3x'></i>
                <p className='hide-sm'>Cancel anytime</p>
              </div>
              <div id='tab-2' className='tab-item'>
                <i className='fas fa-tablet-alt fa-3x'></i>
                <p className='hide-sm'>Watch anywhere</p>
              </div>
              <div id='tab-3' className='tab-item'>
                <i className='fas fa-tags fa-3x'></i>
                <p className='hide-sm'>Pick your price</p>
              </div>
            </div>
          </section>

          <p>This is not what you expected now did you?</p>
          <div className='content'>
            <p>Quincy Hill </p>
            <p>Antioch IL </p>
            <p>
              therealquincyhill@gmail.com 1-224-256-0892{" "}
              <a href='https://www.github.com/quincyhill'>Github</a>
            </p>
          </div>
          <script></script>
        </body>
      </div>
    );
  }
}
