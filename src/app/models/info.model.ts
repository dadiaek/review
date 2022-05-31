export interface IInfo<T> {
  id: number,
  quantite: number;
  title: string;
  data?: T;
}

export interface IData {
  commentaire?: string,
  couleur?: string,
  materiaux?: string[]
}
