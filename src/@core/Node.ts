import { Entity } from '@core/Entity';

export interface INode {
}

export class Node implements INode {
  public entity!: Entity;
}
