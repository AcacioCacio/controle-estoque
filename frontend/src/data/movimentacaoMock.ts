import { Movimentacao } from "../types/Movimentacao";

export const movimentacaoMock: Movimentacao[] = [
  {
    id: "1",
    idProduct: "Produto 1",
    type: "Compra",
    date: new Date("2021-05-01T00:00:00.000Z"),
  },
  {
    id: "2",
    idProduct: "Produto 2",
    type: "Doação",
    date: new Date("2021-05-01T00:00:00.000Z"),
  },
  {
    id: "3",
    idProduct: "Produto 3",
    type: "Descarte",
    date: new Date("2021-05-01T00:00:00.000Z"),
  },
  {
    id: "4",
    idProduct: "Produto 4",
    type: "Encaminhamento para outra instituição",
    date: new Date("2021-05-01T00:00:00.000Z"),
  },
  {
    id: "5",
    idProduct: "Produto 5",
    type: "Distribuição pelo projeto",
    date: new Date("2021-05-01T00:00:00.000Z"),
  },
];
