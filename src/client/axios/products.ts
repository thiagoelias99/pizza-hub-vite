import { TProduct } from "@/models";
import axiosInstance from ".";

async function getAllProducts() {
    const products = await axiosInstance.get<TProduct[]>('products')
    return products.data
}

export { getAllProducts }