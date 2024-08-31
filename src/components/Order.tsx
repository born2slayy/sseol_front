import { ReactElement } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import useCounter, { CounterSet } from "../tools/useCounter";
import { FaShoppingCart } from 'react-icons/fa';

interface OrderCardProps {
    imgURLs: string[],
    name: string,
    code: string,
    wholeSale: string,
    suggestedRetail: string,
}

interface CounterProps {
    counterSet: CounterSet,
}

interface ImageSliderProps {
    imgURLs: string[],
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
                {imgURLs.map((url: string, index: number): ReactElement => (
                    <div key={index}>
                        <img src={url} alt='slide' className="w-full h-64 object-cover rounded-md" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

function OrderCard(props: OrderCardProps): ReactElement {
    const counterSet: CounterSet = useCounter();

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <ImageSlider imgURLs={props.imgURLs} />
            <h3 className="text-xl font-bold text-center mt-4">{props.name}</h3>
            <p className="text-center text-gray-500 mb-4">{props.code}</p>
            <div className="flex justify-center space-x-2 mb-4">
                <button className="w-8 h-8 bg-gray-200 rounded-full focus:outline-none" />
                <button className="w-8 h-8 bg-gray-200 rounded-full focus:outline-none" />
                <button className="w-8 h-8 bg-gray-200 rounded-full focus:outline-none" />
            </div>
            <div className="text-center mb-4">
                <div className="flex justify-between text-gray-600">
                    <div className="flex flex-col items-center">
                        <label className="mb-1 font-medium">Wholesale</label>
                        <span className="text-lg font-semibold">{props.wholeSale}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <label className="mb-1 font-medium">Suggested Retail</label>
                        <span className="text-lg font-semibold">{props.suggestedRetail}</span>
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

function OrderCards(): ReactElement {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {orderCardData.map((data: OrderCardProps, index: number): ReactElement => (
                <OrderCard key={index} {...data} />
            ))}
        </div>
    );
}

function Order(): ReactElement {
    const { pageID } = useParams();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="p-8">
            <OrderCards />
            <button 
                onClick={goBack} 
                className="w-1/4 mt-8 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
            >
                Go Back to Search
            </button>
        </div>
    );
}

const orderCardData: OrderCardProps[] = [
    {
        imgURLs: [
            "https://via.placeholder.com/600x400/ff7f7f/333333",
            "https://via.placeholder.com/600x400/ffbf7f/333333",
            "https://via.placeholder.com/600x400/ffff7f/333333",
        ],
        name: "Dresses",
        code: "R23CD02",
        wholeSale: "150.00",
        suggestedRetail: "450.00",
    },
    {
        imgURLs: [
            "https://via.placeholder.com/600x400/7f7fff/333333",
            "https://via.placeholder.com/600x400/7fbfff/333333",
            "https://via.placeholder.com/600x400/7fffff/333333",
        ],
        name: "Tops",
        code: "R23CT09",
        wholeSale: "65.00",
        suggestedRetail: "195.00",
    },
    {
        imgURLs: [
            "https://via.placeholder.com/600x400/7fff7f/333333",
            "https://via.placeholder.com/600x400/bfff7f/333333",
            "https://via.placeholder.com/600x400/ffff7f/333333",
        ],
        name: "Skirts",
        code: "R23CS08",
        wholeSale: "65.00",
        suggestedRetail: "195.00",
    },
    {
        imgURLs: [
            "https://via.placeholder.com/600x400/ff7fff/333333",
            "https://via.placeholder.com/600x400/ff7f7f/333333",
            "https://via.placeholder.com/600x400/ffbf7f/333333",
        ],
        name: "Dresses",
        code: "R23CD05",
        wholeSale: "140.00",
        suggestedRetail: "420.00",
    },
    {
        imgURLs: [
            "https://via.placeholder.com/600x400/ff7fff/333333",
            "https://via.placeholder.com/600x400/ff7f7f/333333",
            "https://via.placeholder.com/600x400/ffbf7f/333333",
        ],
        name: "Dresses",
        code: "R23CD05",
        wholeSale: "140.00",
        suggestedRetail: "420.00",
    },
    {
        imgURLs: [
            "https://via.placeholder.com/600x400/ff7fff/333333",
            "https://via.placeholder.com/600x400/ff7f7f/333333",
            "https://via.placeholder.com/600x400/ffbf7f/333333",
        ],
        name: "Dresses",
        code: "R23CD05",
        wholeSale: "140.00",
        suggestedRetail: "420.00",
    },
    {
        imgURLs: [
            "https://via.placeholder.com/600x400/ff7fff/333333",
            "https://via.placeholder.com/600x400/ff7f7f/333333",
            "https://via.placeholder.com/600x400/ffbf7f/333333",
        ],
        name: "Dresses",
        code: "R23CD05",
        wholeSale: "140.00",
        suggestedRetail: "420.00",
    },
    
];

export default Order;
