export interface Product {
  id: number;
  name: string;
  description: string;
  validityDate: string;
  price: number;
  image: string;
  quantity?: number;
}
