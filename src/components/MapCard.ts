export interface IMapCard {
}

export class MapCard implements IMapCard {
  /**
   * Угол поворота карточки
   */
  public angle: number = 0; // deg

  /**
   * Метки особенностей у карточки
   */
  public features: any[] = [];
}
