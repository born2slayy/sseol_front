import axios from "axios";
import { useEffect, useState } from "react";


interface ContractApiProps {
    brandName: string,
}

interface ContractApiResponse {
    items: {
        productName: string,
        productCode: string,
        suggestedRetail: number,
        wholesalePrice: number,
        productImages: string[],
    }[],
}

interface ContractApiOut {
    loading: boolean,
    error: string | null;
    data: ContractApiResponse | null,
}

function useContractAPI(props: ContractApiProps): ContractApiOut {
    const [data, setData] = useState<ContractApiResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const baseURL = window.location.origin;
    const endPoint = '/brands/contract/';

    useEffect(() => {
        const apiCall = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get<ContractApiResponse>(`${baseURL}${endPoint}`, {params: {...props}});
                setData(response.data);
            } catch {
                setError("contractAPI error");
            } finally {
                setLoading(false);
            }
        };
        apiCall();
    }, [props]);

    return {data, loading, error};

}