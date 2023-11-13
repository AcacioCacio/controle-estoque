export class MovementDocument {
  static collectionName = 'movement';

  idProduct: string;
  nameProduct: string;
  type: string;
  quant: number;
  date: Date;
}
