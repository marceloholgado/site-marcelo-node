import { useRef, useEffect } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import "./style.css";
import Nav from "./Nav";

function LoadingScreen({ onFinish }) {
  const canvasRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;

    const light = new THREE.HemisphereLight(0xffffff, 0x444444, 3);
    scene.add(light);

    let mixer;
    let model = null;
    let action = null;
    const stopX = 6;

    const loader = new FBXLoader();
    let barProgress;
    const barWidth = 10;
    const barHeight = 0.5;

    loader.load("/Running.fbx", (fbx) => {
      fbx.scale.set(0.01, 0.01, 0.01);
      fbx.rotation.y = Math.PI / 2;
      fbx.position.x = -4;

      scene.add(fbx);

      const barBaseGeometry = new THREE.PlaneGeometry(barWidth, barHeight);
      const barBaseMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.2,
      });
      const barBase = new THREE.Mesh(barBaseGeometry, barBaseMaterial);
      barBase.position.set(0, -1.5, 0.001);
      scene.add(barBase);

      const barProgressGeometry = new THREE.PlaneGeometry(barWidth, barHeight);
      barProgressGeometry.translate(barWidth / 2, 0, 0);
      const barProgressMaterial = new THREE.MeshBasicMaterial({
        color: 0x0052b1,
      });
      barProgress = new THREE.Mesh(barProgressGeometry, barProgressMaterial);
      barProgress.position.set(-5, -1.5, 0.001);

      scene.add(barProgress);
      model = fbx;

      const clip = fbx.animations[0];
      const filteredTracks = clip.tracks.filter(
        (track) => !track.name.includes(".position")
      );
      const filteredClip = new THREE.AnimationClip(
        clip.name,
        clip.duration,
        filteredTracks
      );

      mixer = new THREE.AnimationMixer(fbx);
      action = mixer.clipAction(filteredClip);
      action.play();
    });
    const spaceTexture = new THREE.TextureLoader().load("lab4.jpg");
    scene.background = spaceTexture;
    const clock = new THREE.Clock();
    let elapsedTime = 0;

    const totalTime = 5;
    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      elapsedTime += delta;
      if (mixer) mixer.update(delta);

      if (barProgress && barProgress.scale.x < 80) {
        const normalized = Math.min(elapsedTime / totalTime, 1);
        barProgress.scale.x = normalized;
      }
      if (model && model.position.x < stopX) {
        model.position.x += delta * 2;
      }
      renderer.render(scene, camera);
    };
    animate();

    const timeout = setTimeout(onFinish, totalTime * 1000);
    return () => clearTimeout(timeout);
  }, [onFinish]);

  // 👇 Este useEffect está fora do principal
  useEffect(() => {
    const handleResize = () => {
      const camera = cameraRef.current;
      const renderer = rendererRef.current;
      if (!camera || !renderer) return;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="loading-container">
        <h1 className="title neon loading-h1 pt-10">Wellcome!</h1>
      </div>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-50 bg-transparent"
      />
    </div>
  );
}

export default LoadingScreen;
