export interface IEntity {
  add(component: any): this;
  get(): any;
  getName(): string;
  remove(): void;
}

export class Entity implements IEntity {
  constructor(
    private readonly name: string,
  ) {
  }

  public getName(): string {
    return this.name;
  }

  public add(component: any): this {
    return this;
  }

  public get(): any {
    //
  }

  public remove(): void {
    //
  }
}
