import 'reflect-metadata';

import Bind from 'class-autobind-decorator';

import * as THREE from 'three';

interface IWorkbench {
  render(): void;
}

@Bind()
class Workbench implements IWorkbench {
  private static readonly MAX_HEIGHT: number = window.innerHeight;
  private static readonly MAX_WIDTH: number = window.innerWidth;

  private readonly camera: THREE.PerspectiveCamera;
  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene: THREE.Scene;

  constructor() {
    const aspect = window.innerWidth / window.innerHeight;
    const far = 1000;
    const fov = 75;
    const near = 0.1;

    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.renderer = new THREE.WebGLRenderer();
    this.scene = new THREE.Scene();
  }

  public render(): void {
    this.renderer.setSize(Workbench.MAX_WIDTH, Workbench.MAX_HEIGHT);

    document.body.appendChild(this.renderer.domElement);
  }
}

const ref: IWorkbench = new Workbench();

requestAnimationFrame(ref.render);
