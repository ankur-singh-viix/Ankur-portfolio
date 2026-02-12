'use client'

// ================================================
// THREE.JS SACRED GEOMETRY SCENE
// Runs as a fixed background canvas
// ================================================

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current

    // ── Renderer ──────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2

    // ── Scene & Camera ────────────────────────────
    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 300)
    camera.position.set(0, 0, 22)

    // ── Lighting ──────────────────────────────────
    scene.add(new THREE.AmbientLight(0xf59e0b, 0.3))

    const light1 = new THREE.PointLight(0xf59e0b, 2.5, 80)
    light1.position.set(12, 18, 10)
    scene.add(light1)

    const light2 = new THREE.PointLight(0xc084fc, 2, 70)
    light2.position.set(-15, -10, 5)
    scene.add(light2)

    const light3 = new THREE.PointLight(0x818cf8, 1.2, 60)
    light3.position.set(0, 0, -20)
    scene.add(light3)

    // ── Sacred Star Particles ─────────────────────
    const PARTICLE_COUNT = 2500
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const colors    = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const r     = 35 + Math.random() * 55
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      // Gold → Violet color palette
      const t = Math.random()
      colors[i * 3]     = 0.96 * (1 - t) + 0.5 * t   // R
      colors[i * 3 + 1] = 0.62 * (1 - t) + 0.3 * t   // G
      colors[i * 3 + 2] = 0.04 * (1 - t) + 0.99 * t  // B
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    pGeo.setAttribute('color',    new THREE.BufferAttribute(colors, 3))
    const pMat = new THREE.PointsMaterial({
      size: 0.1, vertexColors: true, transparent: true, opacity: 0.6, sizeAttenuation: true,
    })
    scene.add(new THREE.Points(pGeo, pMat))

    // ── Sacred Icosahedron (main orb) ─────────────
    const icoGeo = new THREE.IcosahedronGeometry(2.8, 2)
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.9, roughness: 0.1,
      emissive: 0x7c2d12, emissiveIntensity: 0.4,
    })
    const ico = new THREE.Mesh(icoGeo, icoMat)
    ico.position.set(9, 1.5, -5)
    scene.add(ico)

    // Wireframe overlay
    const icoWire = new THREE.Mesh(
      icoGeo,
      new THREE.MeshBasicMaterial({ color: 0xfbbf24, wireframe: true, transparent: true, opacity: 0.1 })
    )
    icoWire.position.copy(ico.position)
    scene.add(icoWire)

    // ── Torus (sacred ring / aura) ─────────────────
    const torusGeo = new THREE.TorusGeometry(3.5, 0.04, 16, 100)
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc, transparent: true, opacity: 0.25,
    })
    const torus1 = new THREE.Mesh(torusGeo, torusMat)
    torus1.position.set(-8, 2, -8)
    torus1.rotation.x = Math.PI / 3
    scene.add(torus1)

    const torus2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.03, 16, 80),
      new THREE.MeshBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0.2 })
    )
    torus2.position.set(-8, 2, -8)
    torus2.rotation.x = Math.PI / 1.8
    torus2.rotation.z = Math.PI / 4
    scene.add(torus2)

    // ── Octahedron (spirit crystal) ────────────────
    const octGeo = new THREE.OctahedronGeometry(1.5, 1)
    const octMat = new THREE.MeshStandardMaterial({
      color: 0xc084fc, metalness: 0.95, roughness: 0.05,
      emissive: 0x4c1d95, emissiveIntensity: 0.5,
    })
    const oct = new THREE.Mesh(octGeo, octMat)
    oct.position.set(7, -7, -3)
    scene.add(oct)

    // ── Tetrahedron (fire element) ─────────────────
    const tetraGeo = new THREE.TetrahedronGeometry(1.2, 0)
    const tetraMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24, metalness: 0.88, roughness: 0.12,
      emissive: 0x92400e, emissiveIntensity: 0.4,
    })
    const tetra = new THREE.Mesh(tetraGeo, tetraMat)
    tetra.position.set(-5, 8, -4)
    scene.add(tetra)

    // ── Mouse parallax ─────────────────────────────
    let mx = 0, my = 0, tx = 0, ty = 0
    document.addEventListener('mousemove', (e) => {
      mx = (e.clientX / window.innerWidth  - 0.5) * 2
      my = (e.clientY / window.innerHeight - 0.5) * 2
    })

    // ── Resize ─────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    // ── Render loop ────────────────────────────────
    let animId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      // Smooth mouse follow
      tx += (mx - tx) * 0.028
      ty += (my - ty) * 0.028
      camera.position.x = tx * 2
      camera.position.y = -ty * 1.5
      camera.lookAt(0, 0, 0)

      // Sacred rotations
      ico.rotation.x  = t * 0.16
      ico.rotation.y  = t * 0.22
      icoWire.rotation.x = ico.rotation.x
      icoWire.rotation.y = ico.rotation.y

      torus1.rotation.y = t * 0.18
      torus2.rotation.x = t * 0.22
      torus2.rotation.y = t * 0.14

      oct.rotation.x = t * 0.3
      oct.rotation.z = t * 0.22

      tetra.rotation.x = t * 0.25
      tetra.rotation.y = t * 0.35

      // Floating oscillation
      ico.position.y    =  1.5  + Math.sin(t * 0.45) * 0.6
      torus1.position.y =  2    + Math.sin(t * 0.35) * 0.5
      oct.position.y    = -7    + Math.cos(t * 0.6)  * 0.5
      tetra.position.y  =  8    + Math.sin(t * 0.5)  * 0.7

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw', height: '100vh',
        pointerEvents: 'none',
        zIndex: -2,
      }}
    />
  )
}
