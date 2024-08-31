import { useState } from "react";

export interface InputState {
    state: string,
    handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function useInput(init: string) {
    const [state, setState] = useState<string>(init);
    
    const handler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setState(e.target.value);
    };

    return ({
        state,
        handler,
    });
}

export default useInput;