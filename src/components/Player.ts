export interface IPlayer {
}

export class Player implements IPlayer {
  /**
   * Цвет фишки игрока
   */
  public color: number = 0xffffff;

  /**
   * Очки игрока
   */
  public hits: number = 0;

  /**
   * Количество фишек
   */
  public units: number = 7;
}
