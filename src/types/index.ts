export interface IProduct{
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  inStock: boolean;
}

export interface ICart{
  cart: IProduct[]
}