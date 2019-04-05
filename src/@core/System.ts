export interface ISystem {
  update(): void;
}

export abstract class System implements ISystem {
  public update(): void {
    throw new Error('Method \'update\' not implemented');
  }
}
