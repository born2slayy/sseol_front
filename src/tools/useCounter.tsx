import { useState } from "react";

export interface CounterSet {
    count: number,
    minusHandler: () => void,
    plusHandler: () => void,
}

function useCounter(): CounterSet {
    const [count, setCount] = useState<number>(0);
    const minusHandler = (): void => {
        setCount((prior: number): number => {
            if(prior > 0) {
                return prior - 1;
            }
            else {
                return prior;
            }
        });
    };
    const plusHandler = (): void => {
        setCount((prior: number): number => prior + 1);
    };

    return {
        count,
        minusHandler,
        plusHandler,
    };
}

export default useCounter;