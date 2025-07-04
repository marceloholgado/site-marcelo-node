import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import "./style.css";

function ThreeScene() {
  const canvasRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(40);

    const geometry = new THREE.TorusGeometry(10, 3, 10, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0xff6347,
      wireframe: true,
    });
    const torus = new THREE.Mesh(geometry, material);
    //scene.add(torus);

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    const spaceTexture = new THREE.TextureLoader().load("lab2.jpg");
    scene.background = spaceTexture;

    const marceloTexture = new THREE.TextureLoader().load("me_hologram.png");
    const marcelo = new THREE.Mesh(
      new THREE.BoxGeometry(12, 12, 12),
      new THREE.MeshBasicMaterial({ map: marceloTexture })
    );

    scene.add(marcelo);

    let clock = new THREE.Clock();
    marcelo.position.set(0, 10, 0);

    function animate() {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      renderer.render(scene, camera);
      marcelo.rotation.y += 0.004;
    }
    animate();

    // Responsividade (opcional)
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas id="bg" ref={canvasRef} className="fixed top-0 left-0 z-[-1]" />
  );
}

export default ThreeScene;
