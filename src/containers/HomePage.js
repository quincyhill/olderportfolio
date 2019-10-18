import React, { Component } from "react";
import "./HomePage.css";
import * as THREE from "three";

export default class HomePage extends Component {
  componentDidMount() {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    var animate = function() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
    // === THREE.JS EXAMPLE CODE END ===
  }

  render() {
    return (
      <div className='container'>
        <head>
          <title>This is MY title</title>
        </head>
        <header>
          <h1>This is the header</h1>
          <h1 className='text'>This is the home page</h1>
        </header>
        <p>This is not what you expected now did you?</p>
        <div ref={ref => (this.mount = ref)} />
        <div className='content'>
          <p>Quincy Hill </p>
          <p>Antioch IL </p>
          <p>
            therealquincyhill@gmail.com 1-224-256-0892{" "}
            <a href='https://www.github.com/quincyhill'>Github</a>
          </p>
        </div>
        <script></script>
      </div>
    );
  }
}
