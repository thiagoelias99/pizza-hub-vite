import { TUnit } from "@/models";
import axiosInstance from ".";

async function getAllUnits() {
    const products = await axiosInstance.get<TUnit[]>('units')
    return products.data
}

export { getAllUnits }