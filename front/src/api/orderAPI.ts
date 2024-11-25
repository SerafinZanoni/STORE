import Swal from "sweetalert2";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(products: number[], token: string) {
  try {
    const res = await fetch(`${APIURL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ products }),
    });
    return res.json();
  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: `Something went wrong `,
      icon: "error",
      confirmButtonText: "Ok",
      background: "#000000",
    });
    throw new Error(`Error creating order: ${error}`);
  }
}

export async function getOrders(token: string) {
  try {
    const res = await fetch(`${APIURL}/users/orders`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    return res.json();
  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: `Something went wrong `,
      icon: "error",
      confirmButtonText: "Ok",
      background: "#000000",
    });
    throw new Error(`Error getting orders: ${error}`);
  }
}
