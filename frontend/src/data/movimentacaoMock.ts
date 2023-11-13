import { Movimentacao } from "../types/Movimentacao";

export const movimentacaoMock: Movimentacao[] = [
  {
    id: "1",
    idProduct: "Produto 1",
    type: "Compra",
    quant: 10,
    nameProduct: "Produto 1",
    date: new Date("2021-05-01T00:00:00.000Z"),
  },
  {
    id: "2",
    idProduct: "Produto 2",
    type: "Doação",
    quant: 10,
    nameProduct: "Produto 2",
    date: new Date("2021-05-01T00:00:00.000Z"),
  },
  {
    id: "3",
    idProduct: "Produto 3",
    type: "Descarte",
    quant: 10,
    nameProduct: "Produto 3",
    date: new Date("2021-05-01T00:00:00.000Z"),
  },
  {
    id: "4",
    idProduct: "Produto 4",
    type: "Encaminhamento para outra instituição",
    quant: 10,
    nameProduct: "Produto 4",
    date: new Date("2021-05-01T00:00:00.000Z"),
  },
  {
    id: "5",
    idProduct: "Produto 5",
    type: "Distribuição pelo projeto",
    quant: 10,
    nameProduct: "Produto 5",
    date: new Date("2021-05-01T00:00:00.000Z"),
  },
];
