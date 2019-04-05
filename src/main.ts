import 'reflect-metadata';

import Bind from 'class-autobind-decorator';

import * as THREE from 'three';

import { Core, ICore } from '@core/Core';
import { Entity, IEntity } from '@core/Entity';

import { GameManager, IGameManager } from 'systems/GameManager';

import { GameState, IGameState } from 'components/GameState';

interface IWorkbench {
  render(): void;
}

@Bind()
class Workbench implements IWorkbench {
  private static readonly MAX_HEIGHT: number = window.innerHeight;
  private static readonly MAX_WIDTH: number = window.innerWidth;

  private camera!: THREE.PerspectiveCamera;
  private readonly core: ICore;
  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene: THREE.Scene;

  constructor() {
    this.renderer = new THREE.WebGLRenderer();
    this.scene = new THREE.Scene();

    this.core = new Core();

    this.scene.background = new THREE.Color(0xffffff);

    this.appendCamera();

    this.appendLight();
    this.appendGridHelper();
    this.appendGround();

    this.appendCoub(0, 0, -100, 15);
    this.appendCoub(50, 0, -100, 90);

    this.prepare();

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(Workbench.MAX_WIDTH, Workbench.MAX_HEIGHT);

    const ref = document.getElementById('container');
    if (!ref) {
      throw new Error('Can\'t find DOM element #container');
    }

    ref.appendChild(this.renderer.domElement);
  }

  private appendCamera(): void {
    const aspect = window.innerWidth / window.innerHeight;
    const far = 2000;
    const fov = 60;
    const near = 1;

    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    this.camera.position.y = 20;
    this.camera.position.x = 0;
    this.camera.position.z = 0;

    this.scene.add(this.camera);
  }

  private appendLight(): void {
    const primary = new THREE.DirectionalLight(0xffffff);

    primary.position.set(30, 30, 30);
    this.scene.add(primary);

    const secondary = new THREE.DirectionalLight(0xffffff);

    secondary.position.set(0, 30, 30);
    this.scene.add(secondary);
  }

  private appendGridHelper(): void {
    const size = 400;
    const divisions = 40;

    const grid = new THREE.GridHelper(size, divisions, 0x0000ff, 0x808080);

    grid.position.x = -150;
    grid.position.y = -150;

    this.scene.add(grid);
  }

  private appendGround(): void {
    const geometry = new THREE.PlaneBufferGeometry(200, 200);
    const material = new THREE.MeshPhongMaterial({
      color: 0x999999,
      depthWrite: false,
    });

    const ground = new THREE.Mesh(geometry, material);

    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;

    this.scene.add(ground);
  }

  private appendCoub(x: number, y: number, z: number, deg: number): void {
    // Make the shape of the cube that is UNITWIDTH wide/deep, and UNITHEIGHT tall
    const geometry = new THREE.BoxGeometry(20, 25, 10);
    // Make the material of the cube and set it to blue
    const material = new THREE.MeshPhongMaterial({
      color: 0x81cfe0,
    });

    // Combine the geometry and material to make the cube
    const cube = new THREE.Mesh(geometry, material);

    // Add the cube to the scene
    this.scene.add(cube);

    // Update the cube's position
    cube.position.y = y;
    cube.position.x = x;
    cube.position.z = z;

    cube.rotation.y = deg * Math.PI / 180;
  }

  private prepare(): void {
    // this.core
    //   .appendSystem(new GameManager());

    // const entities = new Entity('game')
    //   .add(new GameState());

    // this.core.appendEntity(entities);
  }

  public render(): void {
    requestAnimationFrame(this.render);

    this.renderer.render(this.scene, this.camera);
  }
}

const workbench: IWorkbench = new Workbench();

workbench.render();
