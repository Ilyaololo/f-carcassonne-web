import Bind from 'class-autobind-decorator';

import { Entity, IEntity } from '@core/Entity';
import { EntityList, IEntityList } from '@core/EntityList';
import { INodeList, NodeList } from '@core/NodeList';
import { ISystem, System } from '@core/System';
import { ISystemList, SystemList } from '@core/SystemList';

export interface ICore {
  appendEntity(entity: IEntity): this;
  appendSystem(system: ISystem): this;
  getNodeList(): INodeList[];
  removeAllEntities(): void;
  removeAllSystems(): void;
  removeEntity(entity: IEntity): this;
  removeSystem(system: ISystem): this;
  update(): void;
}

@Bind()
export class Core implements ICore {
  private readonly entities!: IEntityList;
  private readonly nodes: any[] = [];
  private readonly systems!: ISystemList;

  constructor() {
    this.entities = new EntityList();
    this.systems = new SystemList();
  }

  public appendEntity(entity: IEntity): this {
    if (!this.entities.has(entity)) {
      throw new Error(`The entity name ${entity.getName()} is already in use by another entity.`);
    }

    this.entities.add(entity);

    return this;
  }

  public removeEntity(entity: IEntity): this {
    this.entities.remove(entity);

    return this;
  }

  public removeAllEntities(): void {
    //
  }

  public appendSystem(system: ISystem): this {
    this.systems.add(system);
    this.systems.start();

    return this;
  }

  public removeSystem(system: ISystem): this {
    this.systems.end();
    this.systems.remove(system);

    return this;
  }

  public removeAllSystems(): void {
    //
  }

  public getNodeList(): INodeList[] {
    return [];
  }

  public update(): void {
    //
  }
}
