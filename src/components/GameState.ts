export interface IGameState {
  players: number;
}

export interface GameStateOptions {
  players: number;
}

export class GameState implements IGameState {
  /**
   * Количество игроков
   */
  public players: number = 2;

  constructor(
    config: Partial<GameStateOptions> = {},
  ) {
    this.players = config.players || 2;
  }
}
