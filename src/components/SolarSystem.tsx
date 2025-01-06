import React from 'react';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';


const SolarSystem = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    const loader = new OBJLoader();
    const textureLoader = new THREE.TextureLoader();
    const mtlLoader = new MTLLoader();

    // Set up the canvas
    const canvasContainer = canvasRef.current;
    if (!canvasContainer) return;
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasContainer.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Dim ambient light
    const pointLight = new THREE.PointLight(0xffffff, 2, 100); // Increased intensity for better visibility
    pointLight.position.set(0, 0, 0); // Sun's position
    scene.add(ambientLight);
    scene.add(pointLight);

    // Create the Sun (center of the solar system)
    let sun: any | undefined;

    loader.load('/models/Sun.obj', (obj: any) => {
      sun = obj;
      sun.scale.set(0.0002, 0.0002, 0.0002); // Adjust size of the sun
      sun.position.set(0, 0, 0); // Position the Sun at the center

      // Load the Sun's texture and apply it
      textureLoader.load('/models/Sun.jpg', (texture: any) => {
        sun?.traverse((child: any) => {
          if (child instanceof THREE.Mesh) {
            const material = new THREE.MeshBasicMaterial({ map: texture });
            child.material = material;
          }
        });
      });

      scene.add(sun);
    });

    // Create planets and their orbits (simplified)
    const planets: { planet: any, orbitSpeed: number, rotationSpeed: number, radius: number, name: string }[] = [];
    const orbitSpeeds: number[] = [ 
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5 // Example orbital periods (Earth years)
    ];

    // 0.24, 0.615, 1, 1.88, 11.86, 29.46, 84.01, 164.8, 248, 70000 // Example orbital periods (Earth years)
    const planetData = [
      { modelPath: '/models/Mercury.obj', radius: 10, size: 1, texturePath: '/models/Mercury.png', name: 'Mercury', inclination: 90 },
      { modelPath: '/models/Venus.obj', radius: 15, size: 1, texturePath: '/models/Venus.png', name: 'Venus', inclination: 90 },
      { modelPath: '/models/Earth.obj', radius: 20, size: 1, texturePath: '/models/Earth.png', name: 'Earth', inclination: 23.4 },
      { modelPath: '/models/Mars.obj', radius: 25, size: 0.003, texturePath: '/models/Mars.jpg', name: 'Mars', inclination: 90 },
      { modelPath: '/models/Jupiter.obj', radius: 40, size: 0.01, texturePath: '/models/Jupiter.jpg', name: 'Jupiter', inclination:  1 },
      { modelPath: '/models/Saturn.obj', radius: 50, size: 0.01, texturePath: '/models/Saturn.jpg', name: 'Saturn', inclination: 90},
      { modelPath: '/models/Uranus.obj', radius: 60, size: 0.01, texturePath: '/models/Uranus.jpg', name: 'Uranus', inclination: 90 },
      { modelPath: '/models/Neptune.obj', radius: 70, size: 0.002, texturePath: '/models/Neptune.jpg', name: 'Neptune', inclination: 0 },
    ];

    // Load all the planets with their textures
    planetData.forEach((planet, index) => {
      loader.load(planet.modelPath, (obj: any) => {
        const planetObj = obj;
        planetObj.scale.set(planet.size, planet.size, planet.size);
        planetObj.position.set(planet.radius, 0, 0); // Set the planet's starting position

        if (planet.inclination) {
            const inclinationRadians = planet.inclination * (Math.PI / 180); // Convert degrees to radians
            planetObj.rotation.x = inclinationRadians; // Apply the inclination to the X-axis
        }

        // Load the planet's texture and apply it
        textureLoader.load(planet.texturePath, (texture: any) => {
          const material = new THREE.MeshLambertMaterial({ map: texture });
          planetObj.traverse((child: any) => {
            if (child instanceof THREE.Mesh) {
              child.material = material;
            }
          });
        });

        scene.add(planetObj);

        planets.push({
          planet: planetObj,
          orbitSpeed: 2 * Math.PI / orbitSpeeds[index], // Speed = 2*pi/orbitalPeriod
          rotationSpeed: 0.01, // Rotation speed of the planet itself
          radius: planet.radius,
          name: planet.name,
        });
      });
    });

    // Camera position
    camera.position.z = 30; // Move the camera further out to see all objects    

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate planets around the sun
      planets.forEach((planet) => {
        // Update the position of the planet
        const angle = - Date.now() * planet.orbitSpeed * 0.0001;
        planet.planet.position.x = planet.radius * Math.cos(angle);
        planet.planet.position.z = planet.radius * Math.sin(angle);

        if (planet.name === 'Mercury') {
            const initialTilt = Math.PI / 180 * 0;
            planet.planet.rotation.x = initialTilt;
            planet.planet.rotation.y += planet.rotationSpeed;
        } else if (planet.name === 'Venus') {
            const initialTilt = Math.PI / 180 * 177.3;
            planet.planet.rotation.x = initialTilt;
            planet.planet.rotation.y += planet.rotationSpeed;
        } else if (planet.name === 'Mars') {
            planet.planet.rotation.x = Math.PI / 180 * 90;
            planet.planet.rotation.y = Math.PI / 180 * 180;
            planet.planet.rotation.z += planet.rotationSpeed;
        } else if (planet.name === 'Jupiter') {
            
            planet.planet.rotation.x = Math.PI / 180 * 90;
            planet.planet.rotation.y = Math.PI / 180 * 180;
            planet.planet.rotation.z += planet.rotationSpeed; 
        } else if (planet.name === 'Saturn') {
            const initialTilt = Math.PI / 180 * 26.73;
            planet.planet.rotation.y = initialTilt;
            planet.planet.rotation.y += planet.rotationSpeed;
        } else if (planet.name === 'Uranus') {
            const initialTilt = Math.PI / 180 * 0;
            planet.planet.rotation.y = initialTilt;
            planet.planet.rotation.x += planet.rotationSpeed;
        } else if (planet.name === 'Neptune') {
            const initialTilt = Math.PI / 180 * 28.3;
            planet.planet.rotation.x = initialTilt;
            planet.planet.rotation.y += planet.rotationSpeed;
        } else {
            planet.planet.rotation.y += planet.rotationSpeed * 2;
          }
      });

      if (sun) {
        sun.rotation.y += 0.005; // Adjust the speed of rotation (0.005 radians per frame)
      }

      // Render the scene
      renderer.render(scene, camera);
    };

    // Start the animation
    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default SolarSystem;
