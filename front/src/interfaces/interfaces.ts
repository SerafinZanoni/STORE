export interface User {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: string;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId?: number;
}

export interface ICategory {
  id: number;
  name: string;
  products: IProduct[];
}

export interface Order {
  id: number;
  status: string;
  date: Date;
}

export interface Credential {
  id: number;
  password: string;
}

export interface IProductDetail {
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

export interface IProductDetailProps {
  params: {
    id: string;
  };
  product: IProduct;
}
