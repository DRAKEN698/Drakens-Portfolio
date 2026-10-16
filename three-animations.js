/**
 * =============================================================================
 * DRAKENS PORTFOLIO - THREE.JS 3D ANIMATION ENGINE (V2.0 HIGH-OCTANE)
 * =============================================================================
 * Designed and engineered for Draken's Graphic Design & AI Portfolio.
 * Aesthetic: Cyberpunk / Hyper-Cinematic Dark with Neon Crimson (#E60000) accents.
 *
 * Modules:
 * 1. Hero 3D Cyber Particle Constellation Nebula (#hero-three-canvas)
 * 2. Hero 3D Interactive Cyber Core Hologram (#hero-core-canvas)
 * 3. Global 3D Ambient Cyber Embers (#global-embers-canvas)
 * 4. AI Work 3D Holographic Neural Sphere (#ai-neural-canvas)
 * 5. Footer 3D Cyber Wave Grid Horizon (#footer-grid-canvas)
 * 6. 3D Interactive Card Perspective Tilt
 * =============================================================================
 */

(function () {
  'use strict';

  // Device detection
  const isMobile = window.innerWidth < 768;

  let particleTexture = null;

  // Soft circular glow sprite generator for Three.js points
  function getParticleTexture() {
    if (particleTexture) return particleTexture;
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.2, 'rgba(255, 70, 70, 0.9)');
    grad.addColorStop(0.55, 'rgba(230, 0, 0, 0.4)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    particleTexture = new THREE.CanvasTexture(canvas);
    return particleTexture;
  }

  /* =========================================================================
     1. HERO 3D CYBER CONSTELLATION NEBULA
     ========================================================================= */
  function initHeroNebula() {
    const canvas = document.getElementById('hero-three-canvas');
    if (!canvas) return;

    const heroSection = canvas.closest('.hero') || canvas.parentElement;
    let width = heroSection ? heroSection.clientWidth : window.innerWidth;
    let height = heroSection ? heroSection.clientHeight : window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030303, 0.0016);

    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 3000);
    camera.position.z = 650;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle Cloud Setup
    const count = isMobile ? 320 : 680;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const cRed = new THREE.Color(0xe60000);
    const cRuby = new THREE.Color(0xff3b4d);
    const cWhite = new THREE.Color(0xffffff);
    const cCyan = new THREE.Color(0x38bdf8);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 450 + Math.random() * 450;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = (radius * 0.65) * Math.sin(phi) * Math.sin(theta);
      const z = (radius * 0.75) * Math.cos(phi);

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      originalPositions[i3] = x;
      originalPositions[i3 + 1] = y;
      originalPositions[i3 + 2] = z;

      const rnd = Math.random();
      const col = rnd < 0.65 ? cRed : rnd < 0.85 ? cRuby : rnd < 0.95 ? cWhite : cCyan;
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pMat = new THREE.PointsMaterial({
      size: isMobile ? 8 : 11,
      map: getParticleTexture(),
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, pMat);
    scene.add(particles);

    // Connecting Constellation Lines
    const maxConnections = isMobile ? 120 : 320;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineColors = new Float32Array(maxConnections * 6);

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const lineMesh = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lineMesh);

    // Mouse Tracking
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    const halfX = window.innerWidth / 2;
    const halfY = window.innerHeight / 2;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX - halfX;
      mouseY = e.clientY - halfY;
    }, { passive: true });

    // Window Resize
    function handleResize() {
      if (!heroSection) return;
      width = heroSection.clientWidth;
      height = heroSection.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener('resize', handleResize);

    // Render loop
    let clock = new THREE.Clock();
    let isVisible = true;

    function renderLoop() {
      if (!isVisible) return;
      requestAnimationFrame(renderLoop);

      const elapsed = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      camera.position.x = targetX * 0.45;
      camera.position.y = -targetY * 0.45 + Math.sin(elapsed * 0.7) * 12;
      camera.lookAt(scene.position);

      particles.rotation.y = elapsed * 0.04;
      particles.rotation.x = Math.sin(elapsed * 0.02) * 0.08;
      lineMesh.rotation.y = particles.rotation.y;
      lineMesh.rotation.x = particles.rotation.x;

      // Update harmonic wave motion
      const pos = geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        pos[i3] = originalPositions[i3] + Math.sin(elapsed * 1.2 + i) * 6;
        pos[i3 + 1] = originalPositions[i3 + 1] + Math.cos(elapsed * 0.9 + i) * 6;
      }
      geometry.attributes.position.needsUpdate = true;

      // Update dynamic lines every 2nd frame
      if (Math.floor(elapsed * 60) % 2 === 0) {
        let vIdx = 0;
        let cIdx = 0;
        let lineCount = 0;
        const threshold = isMobile ? 90 : 120;

        for (let i = 0; i < count && lineCount < maxConnections; i += 2) {
          const i3 = i * 3;
          for (let j = i + 1; j < count && lineCount < maxConnections; j += 4) {
            const j3 = j * 3;
            const dx = pos[i3] - pos[j3];
            const dy = pos[i3 + 1] - pos[j3 + 1];
            const dz = pos[i3 + 2] - pos[j3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < threshold) {
              const alpha = (1 - dist / threshold) * 0.75;

              linePositions[vIdx++] = pos[i3];
              linePositions[vIdx++] = pos[i3 + 1];
              linePositions[vIdx++] = pos[i3 + 2];

              linePositions[vIdx++] = pos[j3];
              linePositions[vIdx++] = pos[j3 + 1];
              linePositions[vIdx++] = pos[j3 + 2];

              lineColors[cIdx++] = 0.9 * alpha;
              lineColors[cIdx++] = 0.05 * alpha;
              lineColors[cIdx++] = 0.05 * alpha;

              lineColors[cIdx++] = 0.9 * alpha;
              lineColors[cIdx++] = 0.05 * alpha;
              lineColors[cIdx++] = 0.05 * alpha;

              lineCount++;
            }
          }
        }
        lineGeo.setDrawRange(0, lineCount * 2);
        lineGeo.attributes.position.needsUpdate = true;
        lineGeo.attributes.color.needsUpdate = true;
      }

      renderer.render(scene, camera);
    }

    if ('IntersectionObserver' in window && heroSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (!isVisible) {
              isVisible = true;
              clock.start();
              renderLoop();
            }
          } else {
            isVisible = false;
          }
        });
      }, { threshold: 0.05 });
      observer.observe(heroSection);
    } else {
      renderLoop();
    }
  }

  /* =========================================================================
     2. HERO 3D INTERACTIVE CYBER CORE HOLOGRAPHIC GYROSCOPE
     ========================================================================= */
  function initHeroCyberCore() {
    const canvas = document.getElementById('hero-core-canvas');
    if (!canvas) return;

    const box = canvas.parentElement || document.querySelector('.hero__3d-core-box');
    let width = box ? box.clientWidth : 80;
    let height = box ? box.clientHeight : 80;
    if (width === 0) width = 80;
    if (height === 0) height = 80;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Faceted Crystal Core
    const crystalGeo = new THREE.IcosahedronGeometry(1.25, 0);
    const crystalMat = new THREE.MeshPhongMaterial({
      color: 0x990000,
      emissive: 0x550000,
      specular: 0xff3333,
      shininess: 90,
      flatShading: true,
      transparent: true,
      opacity: 0.92
    });
    const crystal = new THREE.Mesh(crystalGeo, crystalMat);
    coreGroup.add(crystal);

    // 2. Glowing Wireframe Shell
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xff2233,
      wireframe: true,
      transparent: true,
      opacity: 0.65
    });
    const wireShell = new THREE.Mesh(new THREE.IcosahedronGeometry(1.3, 1), wireMat);
    coreGroup.add(wireShell);

    // 3. Concentric Gyro Rings
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0xe60000,
      emissive: 0x330000,
      metalness: 0.85,
      roughness: 0.2
    });
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.9, 0.04, 16, 80), ringMat1);
    coreGroup.add(ring1);

    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xff4455,
      emissive: 0x220000,
      metalness: 0.7,
      roughness: 0.3
    });
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.3, 0.035, 16, 80), ringMat2);
    ring2.rotation.x = Math.PI / 3;
    coreGroup.add(ring2);

    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(2.65, 0.025, 16, 80), ringMat3);
    ring3.rotation.y = Math.PI / 4;
    coreGroup.add(ring3);

    // 4. Orbiting Sparks
    const sparkCount = 40;
    const sparkGeo = new THREE.BufferGeometry();
    const sparkPos = new Float32Array(sparkCount * 3);
    const sparkAngles = [];

    for (let i = 0; i < sparkCount; i++) {
      const i3 = i * 3;
      const r = 1.6 + Math.random() * 1.3;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      sparkAngles.push({ r, theta, phi, speed: 0.015 + Math.random() * 0.03 });

      sparkPos[i3] = r * Math.cos(theta) * Math.cos(phi);
      sparkPos[i3 + 1] = r * Math.sin(theta) * Math.cos(phi);
      sparkPos[i3 + 2] = r * Math.sin(phi);
    }

    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
    const sparkMat = new THREE.PointsMaterial({
      size: 5,
      map: getParticleTexture(),
      color: 0xff3344,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const sparkMesh = new THREE.Points(sparkGeo, sparkMat);
    coreGroup.add(sparkMesh);

    // Lighting
    const pointLight = new THREE.PointLight(0xff0022, 3.5, 15);
    scene.add(pointLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.6);
    dirLight1.position.set(4, 4, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 1.2);
    dirLight2.position.set(-4, -4, 2);
    scene.add(dirLight2);

    // Interactivity
    const widget = document.getElementById('hero3DWidget') || canvas;
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let dragVelocity = { x: 0, y: 0 };
    let speedMult = 1;

    widget.addEventListener('mousedown', (e) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => { isDragging = false; });
    window.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const dx = e.clientX - prevMouse.x;
        const dy = e.clientY - prevMouse.y;
        dragVelocity.x = dx * 0.015;
        dragVelocity.y = dy * 0.015;
        coreGroup.rotation.y += dragVelocity.x;
        coreGroup.rotation.x += dragVelocity.y;
        prevMouse = { x: e.clientX, y: e.clientY };
      }
    });

    // Touch
    widget.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    window.addEventListener('touchend', () => { isDragging = false; });
    window.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches.length === 1) {
        const dx = e.touches[0].clientX - prevMouse.x;
        const dy = e.touches[0].clientY - prevMouse.y;
        coreGroup.rotation.y += dx * 0.015;
        coreGroup.rotation.x += dy * 0.015;
        prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    // Hover
    widget.addEventListener('mouseenter', () => {
      speedMult = 2.8;
      if (window.gsap) {
        window.gsap.to(coreGroup.scale, { x: 1.15, y: 1.15, z: 1.15, duration: 0.35, ease: 'back.out(2)' });
      }
    });

    widget.addEventListener('mouseleave', () => {
      speedMult = 1;
      if (window.gsap) {
        window.gsap.to(coreGroup.scale, { x: 1, y: 1, z: 1, duration: 0.45, ease: 'power2.out' });
      }
    });

    // Click Pulse Shockwave
    widget.addEventListener('click', () => {
      pointLight.intensity = 8;
      if (window.gsap) {
        window.gsap.to(ring1.scale, { x: 1.35, y: 1.35, z: 1.35, duration: 0.25, yoyo: true, repeat: 1 });
        window.gsap.to(ring2.scale, { x: 1.25, y: 1.25, z: 1.25, duration: 0.3, yoyo: true, repeat: 1, delay: 0.05 });
        window.gsap.to(pointLight, { intensity: 3.5, duration: 0.7, ease: 'power2.out' });
      }
    });

    function handleResize() {
      if (!box) return;
      const w = box.clientWidth || 80;
      const h = box.clientHeight || 80;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener('resize', handleResize);

    // Loop
    let clock = new THREE.Clock();
    let isVisible = true;

    function renderLoop() {
      if (!isVisible) return;
      requestAnimationFrame(renderLoop);

      const time = clock.getElapsedTime();

      if (!isDragging) {
        dragVelocity.x *= 0.94;
        dragVelocity.y *= 0.94;
        coreGroup.rotation.y += (0.014 * speedMult) + dragVelocity.x;
        coreGroup.rotation.x += (0.007 * speedMult) + dragVelocity.y;
      }

      ring1.rotation.z += 0.018 * speedMult;
      ring2.rotation.y -= 0.022 * speedMult;
      ring3.rotation.x += 0.025 * speedMult;

      const breath = 1 + Math.sin(time * 2.8) * 0.04;
      crystal.scale.set(breath, breath, breath);

      // Sparks
      const pos = sparkGeo.attributes.position.array;
      for (let i = 0; i < sparkCount; i++) {
        const i3 = i * 3;
        sparkAngles[i].theta += sparkAngles[i].speed * speedMult;
        const r = sparkAngles[i].r;
        const theta = sparkAngles[i].theta;
        const phi = sparkAngles[i].phi;

        pos[i3] = r * Math.cos(theta) * Math.cos(phi);
        pos[i3 + 1] = r * Math.sin(theta) * Math.cos(phi);
        pos[i3 + 2] = r * Math.sin(phi);
      }
      sparkGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    }

    if ('IntersectionObserver' in window && widget) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (!isVisible) {
              isVisible = true;
              clock.start();
              renderLoop();
            }
          } else {
            isVisible = false;
          }
        });
      }, { threshold: 0.1 });
      observer.observe(widget);
    } else {
      renderLoop();
    }
  }

  /* =========================================================================
     3. GLOBAL 3D AMBIENT CYBER EMBERS (Floating in view space)
     ========================================================================= */
  function initGlobalEmbers() {
    const canvas = document.getElementById('global-embers-canvas');
    if (!canvas) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 1, 1500);
    camera.position.z = 600;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const emberCount = isMobile ? 50 : 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(emberCount * 3);
    const colors = new Float32Array(emberCount * 3);
    const speeds = [];

    const c1 = new THREE.Color(0xe60000);
    const c2 = new THREE.Color(0xff4433);
    const c3 = new THREE.Color(0xffaa22);

    for (let i = 0; i < emberCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * width * 1.5;
      positions[i3 + 1] = (Math.random() - 0.5) * height * 1.8;
      positions[i3 + 2] = (Math.random() - 0.5) * 400;

      speeds.push({
        y: 0.45 + Math.random() * 0.9,
        xOsc: 0.6 + Math.random() * 1.4,
        freq: 0.5 + Math.random() * 1.8
      });

      const rnd = Math.random();
      const col = rnd < 0.6 ? c1 : rnd < 0.88 ? c2 : c3;
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: isMobile ? 9 : 13,
      map: getParticleTexture(),
      transparent: true,
      opacity: 0.7,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const embers = new THREE.Points(geometry, material);
    scene.add(embers);

    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });

    let clock = new THREE.Clock();
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const curY = window.scrollY;
      scrollVelocity = (curY - lastScrollY) * 0.04;
      lastScrollY = curY;
    }, { passive: true });

    function renderLoop() {
      requestAnimationFrame(renderLoop);
      const time = clock.getElapsedTime();
      scrollVelocity *= 0.92;

      const pos = geometry.attributes.position.array;
      const topBound = height * 0.9;
      const bottomBound = -height * 0.9;

      for (let i = 0; i < emberCount; i++) {
        const i3 = i * 3;
        pos[i3 + 1] += speeds[i].y + Math.abs(scrollVelocity);
        pos[i3] += Math.sin(time * speeds[i].freq + i) * speeds[i].xOsc * 0.3;

        if (pos[i3 + 1] > topBound) {
          pos[i3 + 1] = bottomBound;
          pos[i3] = (Math.random() - 0.5) * width * 1.5;
        }
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    }

    renderLoop();
  }

  /* =========================================================================
     4. AI WORK 3D HOLOGRAPHIC NEURAL MATRIX SPHERE
     ========================================================================= */
  function initAiNeuralSphere() {
    const canvas = document.getElementById('ai-neural-canvas');
    if (!canvas) return;

    const box = canvas.parentElement || document.querySelector('.ai-3d-neural-box');
    let width = box ? box.clientWidth : 80;
    let height = box ? box.clientHeight : 80;
    if (width === 0) width = 80;
    if (height === 0) height = 80;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const group = new THREE.Group();
    scene.add(group);

    // Fibonacci Sphere nodes
    const nodeCount = isMobile ? 50 : 85;
    const nodes = [];
    const phi = Math.PI * (3 - Math.sqrt(5));
    const radius = 1.85;

    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeColors = new Float32Array(nodeCount * 3);

    const cRed = new THREE.Color(0xe60000);
    const cCyan = new THREE.Color(0x38bdf8);
    const cWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2;
      const rAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * rAtY;
      const z = Math.sin(theta) * rAtY;

      const vec = new THREE.Vector3(x, y, z).multiplyScalar(radius);
      nodes.push(vec);

      const i3 = i * 3;
      nodePositions[i3] = vec.x;
      nodePositions[i3 + 1] = vec.y;
      nodePositions[i3 + 2] = vec.z;

      const rnd = Math.random();
      const col = rnd < 0.65 ? cRed : rnd < 0.85 ? cCyan : cWhite;
      nodeColors[i3] = col.r;
      nodeColors[i3 + 1] = col.g;
      nodeColors[i3 + 2] = col.b;
    }

    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    nodeGeo.setAttribute('color', new THREE.BufferAttribute(nodeColors, 3));

    const nodeMat = new THREE.PointsMaterial({
      size: isMobile ? 7 : 8,
      map: getParticleTexture(),
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const nodePoints = new THREE.Points(nodeGeo, nodeMat);
    group.add(nodePoints);

    // Synapse Lines
    const lineIndices = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 1.05) {
          lineIndices.push(nodes[i].x, nodes[i].y, nodes[i].z);
          lineIndices.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }

    const synapseGeo = new THREE.BufferGeometry();
    synapseGeo.setAttribute('position', new THREE.Float32BufferAttribute(lineIndices, 3));

    const synapseMat = new THREE.LineBasicMaterial({
      color: 0xff2244,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const synapseMesh = new THREE.LineSegments(synapseGeo, synapseMat);
    group.add(synapseMesh);

    // Inner Core Orb
    const coreMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.65, 18, 18),
      new THREE.MeshBasicMaterial({
        color: 0xe60000,
        wireframe: true,
        transparent: true,
        opacity: 0.65
      })
    );
    group.add(coreMesh);

    // Orbiting rings
    const ring1 = new THREE.Mesh(
      new THREE.RingGeometry(2.15, 2.2, 50),
      new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.55
      })
    );
    ring1.rotation.x = Math.PI / 2.2;
    group.add(ring1);

    // Interactivity
    const widget = document.getElementById('aiNeuralWrap') || canvas.parentElement || canvas;
    let isDragging = false;
    let prev = { x: 0, y: 0 };
    let speed = 0.01;

    canvas.addEventListener('mousedown', (e) => {
      isDragging = true;
      prev = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => { isDragging = false; });
    window.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const dx = e.clientX - prev.x;
        const dy = e.clientY - prev.y;
        group.rotation.y += dx * 0.012;
        group.rotation.x += dy * 0.012;
        prev = { x: e.clientX, y: e.clientY };
      }
    });

    widget.addEventListener('mouseenter', () => {
      speed = 0.03;
      synapseMat.opacity = 0.85;
    });

    widget.addEventListener('mouseleave', () => {
      speed = 0.01;
      synapseMat.opacity = 0.5;
    });

    // Loop
    let clock = new THREE.Clock();
    let isVisible = true;

    function renderLoop() {
      if (!isVisible) return;
      requestAnimationFrame(renderLoop);

      const time = clock.getElapsedTime();

      if (!isDragging) {
        group.rotation.y += speed;
        group.rotation.x = Math.sin(time * 0.6) * 0.15;
      }

      ring1.rotation.z += 0.012;
      coreMesh.rotation.y -= 0.015;

      renderer.render(scene, camera);
    }

    if ('IntersectionObserver' in window && widget) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (!isVisible) {
              isVisible = true;
              clock.start();
              renderLoop();
            }
          } else {
            isVisible = false;
          }
        });
      }, { threshold: 0.1 });
      observer.observe(widget);
    } else {
      renderLoop();
    }
  }

  /* =========================================================================
     5. FOOTER 3D CYBER WAVE GRID HORIZON
     ========================================================================= */
  function initFooterWaveGrid() {
    const canvas = document.getElementById('footer-grid-canvas');
    if (!canvas) return;

    const wrap = canvas.parentElement || document.querySelector('.footer__3d-grid-wrap');
    let width = wrap ? wrap.clientWidth : window.innerWidth;
    let height = wrap ? wrap.clientHeight : 280;
    if (width === 0) width = window.innerWidth;
    if (height === 0) height = 280;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030303, 0.048);

    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 100);
    camera.position.set(0, 3.2, 8.5);
    camera.rotation.x = -0.32;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const cols = isMobile ? 32 : 54;
    const rows = isMobile ? 24 : 36;
    const planeGeo = new THREE.PlaneGeometry(36, 24, cols, rows);
    planeGeo.rotateX(-Math.PI / 2);

    const posAttr = planeGeo.attributes.position;
    const origY = new Float32Array(posAttr.count);
    for (let i = 0; i < posAttr.count; i++) {
      origY[i] = posAttr.getY(i);
    }

    const planeMat = new THREE.MeshBasicMaterial({
      color: 0xe60000,
      wireframe: true,
      transparent: true,
      opacity: 0.58
    });

    const terrain = new THREE.Mesh(planeGeo, planeMat);
    terrain.position.y = -1;
    scene.add(terrain);

    // Glowing horizon line
    const horizonGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-18, -1, -12),
      new THREE.Vector3(18, -1, -12)
    ]);
    const horizonMat = new THREE.LineBasicMaterial({
      color: 0xff3344,
      linewidth: 2,
      transparent: true,
      opacity: 0.85
    });
    scene.add(new THREE.Line(horizonGeo, horizonMat));

    let mouseX = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 4;
    }, { passive: true });

    function handleResize() {
      if (!wrap) return;
      width = wrap.clientWidth || window.innerWidth;
      height = wrap.clientHeight || 280;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener('resize', handleResize);

    let clock = new THREE.Clock();
    let isVisible = true;

    function renderLoop() {
      if (!isVisible) return;
      requestAnimationFrame(renderLoop);

      const time = clock.getElapsedTime() * 1.8;
      const pos = planeGeo.attributes.position;

      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const z = pos.getZ(i);

        const w1 = Math.sin(x * 0.35 + time + mouseX) * 0.45;
        const w2 = Math.cos(z * 0.45 + time) * 0.4;
        const w3 = Math.sin((x + z) * 0.2 + time * 1.2) * 0.28;

        pos.setY(i, origY[i] + w1 + w2 + w3);
      }
      pos.needsUpdate = true;

      camera.position.x += (mouseX * 0.7 - camera.position.x) * 0.05;
      renderer.render(scene, camera);
    }

    const footer = document.querySelector('.footer');
    if ('IntersectionObserver' in window && footer) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (!isVisible) {
              isVisible = true;
              clock.start();
              renderLoop();
            }
          } else {
            isVisible = false;
          }
        });
      }, { threshold: 0.05 });
      observer.observe(footer);
    } else {
      renderLoop();
    }
  }

  /* =========================================================================
     6. CARD 3D TILT EFFECT (Vanilla CSS 3D perspective)
     ========================================================================= */
  function init3DCardTilt() {
    if (isMobile) return;

    const cards = document.querySelectorAll('.portfolio__card, .feature-card, .service-item, .tool-item');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        card.style.transition = 'transform 0.5s ease-out';
      });

      card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
      });
    });
  }

  /* =========================================================================
     BOOTSTRAP ENGINE - ENSURE THREE IS LOADED
     ========================================================================= */
  let retryCount = 0;
  function bootstrap() {
    if (typeof THREE === 'undefined') {
      if (retryCount < 50) {
        retryCount++;
        setTimeout(bootstrap, 80);
      } else {
        console.error('Failed to load Three.js after multiple attempts.');
      }
      return;
    }

    initHeroNebula();
    initHeroCyberCore();
    initGlobalEmbers();
    initAiNeuralSphere();
    initFooterWaveGrid();
    init3DCardTilt();
    console.log('⚡ [Drakens-Portfolio] Three.js 3D Engine V2.0 initialized successfully!');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }

})();
