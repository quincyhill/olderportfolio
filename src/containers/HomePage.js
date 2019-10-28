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
              <p>Engineer | Developer</p>
              <h3>Email : therealquincyhill@gmail.com</h3>
              <h3>Phone : 224-256-0892</h3>
              <h3>
                <a href='https://github.com/quincyhill'>Github</a>
              </h3>
              <h3>
                <a href='https://www.linkedin.com/in/quincy-hill-4bb550176/'>
                  LinkedIn
                </a>
              </h3>
            </div>
          </header>
          <hr />

          <div className='container'>
            <section>
              <DropDownButton name='Goals' content={data.first} />
            </section>
            <section>
              <DropDownButton name='Education' content={data.second} />
            </section>
            <section>
              <DropDownButton
                name='Projects | Experience'
                content={data.third}
              />
            </section>
            <section>
              <DropDownButton name='Skill Set' content={data.fourth} />
            </section>
          </div>
          <footer className='footer'>
            <p>&copy; 2019 Quincy Hill</p>
          </footer>
        </body>
      </div>
    );
  }
}
