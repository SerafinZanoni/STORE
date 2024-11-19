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
