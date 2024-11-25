export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId?: number;
}

export interface ICardProps {
  product: IProduct;
}
export interface IProductDetailProps {
  params: {
    id: string;
  };
}

export interface IUserDataLogin {
  email: string;
  password: string;
  token?: string;
}

export interface IRegisterProps {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

export interface IRegisterErrorrs {
  name?: string;
  email?: string;
  password?: string;
  address?: string;
  phone?: string;
}

export interface FormData {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

export interface IUserSession {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: string;
    credential: {
      id: number;
      password: string;
    };
  };
}

export interface IUserOrder {
  id: number;
  date: string;
  status: string;
  products: IProduct[];
}
