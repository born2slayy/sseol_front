import { ReactElement } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import useCounter, { CounterSet } from "../tools/useCounter";
import { FaShoppingCart } from 'react-icons/fa';
import useContractAPI, { ContractApiOut, ContractApiResponse } from "../api/useContractAPI";

//design: https://v0.dev/t/alUG20X5HZM

export interface OrderCardProps {
    productImgs: string[],
    productName: string,
    productCode: string,
    wholesalePrice: number,
    suggestedRetail: number,
}

interface CounterProps {
    counterSet: CounterSet,
}

interface ImageSliderProps {
    imgURLs: string[],
}

interface OrderCardsProps {
    data: ContractApiResponse,
}

function Counter({ counterSet }: CounterProps): ReactElement {
    return (
        <div className="flex items-center space-x-2">
            <button 
                onClick={counterSet.minusHandler} 
                className="bg-gray-200 text-gray-700 w-8 h-8 flex items-center justify-center rounded-md"
            >
                -
            </button>
            <p className="text-gray-700">{counterSet.count}</p>
            <button 
                onClick={counterSet.plusHandler} 
                className="bg-gray-200 text-gray-700 w-8 h-8 flex items-center justify-center rounded-md"
            >
                +
            </button>
        </div>
    );
}

function ImageSlider({imgURLs}: ImageSliderProps): ReactElement {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="mb-10">
            <Slider {...settings} >
                {imgURLs.map((url: string, index: number): ReactElement => {
                    const cleanedUrl = url.replace(/"/g, '');
                    return (
                    <div key={index}>
                        <img src={cleanedUrl} alt='slide' className="w-full h-96 object-cover rounded-md" />
                    </div>);
})}
            </Slider>
        </div>
    );
}

function OrderCard(props: OrderCardProps): ReactElement {
    const counterSet: CounterSet = useCounter();

    return (
        <div className="bg-white p-4 rounded-lg shadow-md h-full min-h-[500px]">
            <ImageSlider imgURLs={props.productImgs} />
            <h3 className="text-xl font-bold text-center mt-4">{props.productName}</h3>
            <p className="text-center text-gray-500 mb-4">{props.productCode}</p>
            <div className="flex justify-center space-x-2 mb-4">
                <button className="w-4 h-4 border bg-black focus:outline-none" />
                <button className="w-4 h-4 border bg-white focus:outline-none" />
                <button className="w-4 h-4 border bg-gray-500 focus:outline-none" />
            </div>
            <div className="text-center mb-4">
                <div className="flex justify-between text-gray-600">
                    <div className="flex flex-col items-center">
                        <label className="mb-1 font-medium">Wholesale</label>
                        <span className="text-lg font-semibold">{props.wholesalePrice.toFixed(2)}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <label className="mb-1 font-medium">Suggested Retail</label>
                        <span className="text-lg font-semibold">{props.suggestedRetail.toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between mb-4">
                <Counter counterSet={counterSet} />
                <button className="ml-8 p-2 bg-white text-blue-500 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
                    <FaShoppingCart size={20} color="black" />
                </button>
            </div>
        </div>
    );
}

function OrderCards({data}: OrderCardsProps): ReactElement {
    return (
        <div className="mt-10 ml-20 mr-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((data: OrderCardProps, index: number): ReactElement => (
                <OrderCard key={index} {...data} />
            ))}
        </div>
    );
}

function Order(): ReactElement {
    const navigate = useNavigate();
    const {pageID} = useParams();
    const data:ContractApiOut = useContractAPI({brandName: pageID!});
    
    if (data.loading) {
        return (<></>);
    }
    else if (data.error) {
        console.error(data.error);
        return (<></>);
    }
    const dataList: ContractApiResponse = data.data!;
    // const dataList:ContractApiResponse = orderCardData;
    const goBack = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center">
            <OrderCards data={dataList}/>
            <button 
                onClick={goBack} 
                className="w-1/2 mt-8 mb-8 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
            >
                Go Back to Search
            </button>
        </div>
    );
}

export default Order;
