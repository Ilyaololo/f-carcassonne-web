import { Entity, IEntity } from '@core/Entity';

export interface IEntityList {
  add(entity: IEntity): void;
  has(entity: IEntity): boolean;
  remove(entity: IEntity): void;
  removeAll(): void;
}

export class EntityList implements IEntityList {
  public add(entity: IEntity): void {
    //
  }

  public has(entity: IEntity): boolean {
    return false;
  }

  public remove(entity: IEntity): void {
    //
  }

  public removeAll(): void {
    //
  }
}
