import {GetOneResponse} from "@/types/get-one-response";
import {BASE_API_URL} from "@/constants/api";

export const getOneById = async <T>(path: string, id: string): GetOneResponse<T> => {
    const response = await fetch(`${BASE_API_URL}${path}/${id}`);

    if (response.status === 404) {
        return {
            isError: false,
        }
    }

    if (!response.ok) {
        return {
            isError: true,
        }
    }

    const data = await response.json() as T;

    return {
        isError: false,
        data,
    };
};