import { INodeList, NodeList } from '@core/NodeList';
import { ISystem, System } from '@core/System';

import { GameNode, IGameNode } from 'nodes/GameNode';

export interface Configuration {
}

export interface IGameManager extends ISystem {
}

export class GameManager extends System implements IGameManager {
  private readonly gameNode: INodeList;

  constructor(
    private readonly config: Partial<Configuration> = {},
  ) {
    super();

    this.gameNode = new GameNode();
  }

  public update(): void {
    //
  }
}
