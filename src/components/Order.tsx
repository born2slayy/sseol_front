import { ReactElement } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import useCounter, { CounterSet } from "../tools/useCounter";

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

function Counter({counterSet}: CounterProps): ReactElement {
    return (
        <div>
            <button onClick={counterSet.minusHandler}>-</button>
            <p>{counterSet.count}</p>
            <button onClick={counterSet.plusHandler}>+</button>
        </div>
    );
}

function OrderCard(props: OrderCardProps): ReactElement {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    }
    const counterSet: CounterSet = useCounter();

    return (
        <div>
            <Slider {...settings}>
                {props.imgURLs.map((url: string, index: number): ReactElement => (
                    <div key={index}>
                        <img src={url} alt='slide' />
                    </div>
                ))}
            </Slider>
            <h3>{props.name}</h3>
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
            <div>
                <label>WholeSale</label>
                <p>{props.wholeSale}</p>
            </div>
            <div>
                <label>Suggested Retail</label>
                <p>{props.suggestedRetail}</p>
            </div>
            <Counter counterSet={counterSet} />
            <button>cart</button>
        </div>
    );
}

function OrderCards(): ReactElement {
    return (
        <>
            {orderCardData.map((data: OrderCardProps, index: number): ReactElement => (
                <OrderCard {...data} />
            ))}
        </>
    );
}

function Order(): ReactElement {
    const {pageID: string} = useParams();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <>
            <OrderCards />
            <button onClick={goBack}>Go Back to Search</button>
        </>
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
];


export default Order;