import { ReactElement, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useSearchAPI, { SearchApiProps } from "../api/useSearchAPI";

//design: https://v0.dev/t/OoUVupeFpge

function LoadingSpinner(): ReactElement {
    return (
        <div className="relative w-20 h-20">
            <div className="absolute w-full h-full border-4 border-solid border-black border-l-transparent rounded-full animate-spin"></div>
            <div aria-label="Loading..." role="status" className="absolute inset-0 flex items-center justify-center">
                <svg className="h-12 w-12 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                    <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                    <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                    <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                    <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                    <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                    <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                    <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                    <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                </svg>
            </div>
        </div>
    );
}

function Loading(): ReactElement {
    const navigate = useNavigate();
    const location = useLocation();
    const inputs: SearchApiProps = location.state!;
    const {data, loading, error} = useSearchAPI(inputs);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-white">
              <div className="flex flex-col items-center justify-center">
                <LoadingSpinner />
                <p className="text-gray-600 text-2xl mt-4">AI Agent is searching...</p>
              </div>
            </div>
        );
    }
    else if (error) {
        console.error(error);
        return (<></>);
    }
    else {
        navigate('/result', {state: data});
        return (<></>);
    }

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         navigate('/result');
    //     }, 3000);

    //     return (() => clearTimeout(timer));
    // }, [navigate]);

    // return (
    //     <div className="flex items-center justify-center h-screen bg-white">
    //       <div className="flex flex-col items-center justify-center">
    //         <LoadingSpinner />
    //         <p className="text-gray-600 text-2xl mt-4">AI Agent is searching...</p>
    //       </div>
    //     </div>
    // );
}

export default Loading;
