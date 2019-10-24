import React, { Component } from "react";
import DropDownButton from "../components/DropDownButton";
import "./HomePage.css";
import { data } from "../components/MyData";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <head>
          <title>This is MY title</title>
        </head>
        <body>
          <header className='showcase'>
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
              <DropDownButton name='Objective' content={data.first} />
            </section>
            <section>
              <DropDownButton name='Education' content={data.second} />
            </section>
            <section>
              <DropDownButton name='Personal Projects' content={data.third} />
            </section>
            <section>
              <DropDownButton name='Skills' content={data.fourth} />
            </section>
          </div>
          <footer class='footer'>
            <p>&copy; 2019 Quincy Hill</p>
          </footer>
        </body>
      </div>
    );
  }
}
