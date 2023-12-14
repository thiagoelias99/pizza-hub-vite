import { useQuery } from "react-query";
import { getAllProducts } from "@/client/axios/products";
import { TProduct } from "@/models";
import { AxiosError } from "axios";

export const useProducts = () => {
    const { data: products, isLoading, error } = useQuery<TProduct[], AxiosError>("products", getAllProducts);

    return { products, isLoading, error };
}
