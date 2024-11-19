import { IProduct } from "@/interfaces/interfaces";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts(): Promise<IProduct[]> {
  try {
    const res = await fetch(`${API_URL}/products`, {
      cache: "no-cache",
      next: { revalidate: 1500 },
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }
    const products = await res.json();
    return products;
  } catch (error) {
    throw new Error(`Error fetching products: ${error}`);
  }
}

export async function getProductById(id: string): Promise<IProduct> {
  try {
    const products: IProduct[] = await getProducts();
    const productFiltered = products.find(
      (product) => product.id.toString() === id
    );
    if (!productFiltered) throw new Error("El producto no se encontró");
    return productFiltered;
  } catch (error) {
    throw new Error(`Error obtaining the product: ${error}`);
  }
}
