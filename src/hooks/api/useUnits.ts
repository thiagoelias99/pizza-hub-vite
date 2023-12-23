import { useQuery } from "react-query";
import { getAllUnits } from "@/client/axios/units";
import { TUnit } from "@/models";
import { AxiosError } from "axios";

export const useUnits = () => {
    const { data: units, isLoading, error } = useQuery<TUnit[], AxiosError>("units", getAllUnits);

    return { units, isLoading, error };
}
