import { ISystem, System } from '@core/System';

export interface ISystemList {
  add(system: ISystem): void;
  end(): void;
  remove(system: ISystem): void;
  removeAll(): void;
  start(): void;
}

export class SystemList implements ISystemList {
  public add(system: ISystem): void {
    //
  }

  public end(): void {
    //
  }

  public remove(system: ISystem): void {
    //
  }

  public removeAll(): void {
    //
  }

  public start(): void {
    //
  }
}
