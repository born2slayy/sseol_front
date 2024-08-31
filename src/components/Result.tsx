import { ReactElement } from "react";
import useInput, { InputState } from "../tools/useInput";
import { Link } from "react-router-dom";

interface SearchBarProps {
    searchState: InputState,
}

interface CardsProps {
    search: string,
}

interface CardProps {
    img1URL: string,
    img2URL: string,
    name: string,
    location: string,
    revenue: string,
    price: string,
    category: string,
    pageID: string,
}

function Card(props: CardProps): ReactElement {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <img 
                src={props.img1URL} 
                alt={props.img1URL} 
                className="w-full h-32 object-cover rounded-md mb-4" 
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">{props.name}</h3>
            <p className="text-gray-600 mb-2">{props.location}</p>
            <p className="text-gray-600 mb-2">Revenue: {props.revenue}</p>
            <p className="text-gray-600 mb-2">Price Range: {props.price}</p>
            <p className="text-gray-600 mb-4">Category: {props.category}</p>
            <img 
                src={props.img2URL} 
                alt={props.img2URL} 
                className="w-full h-80 object-cover rounded-md mb-4" 
            />
            <Link to={`/order/${props.pageID}`}>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                    Add to Cart
                </button>
            </Link>
        </div>
    );
}


function Cards({search}: CardsProps): ReactElement {
    const pattern: RegExp = new RegExp(search, 'i');

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {cardDataList
                .filter(cardData => pattern.test(cardData.name))
                .map((cardData: CardProps, index: number): ReactElement => {
                    return <Card key={index} {...cardData} />
                }
            )}
        </div>
    );
}

function SearchBar({ searchState }: SearchBarProps): ReactElement {
    return (
        <input
            placeholder="Search for brands..."
            onChange={searchState.handler}
            className="w-full p-4 mb-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}

function Result(): ReactElement {
    const searchState: InputState = useInput("");

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Fashion Brand Search</h1>
            <SearchBar searchState={searchState} />
            <Cards search={searchState.state}/>
        </div>
    );
}

const cardDataList: CardProps[] = [
    {
        img1URL: "",
        img2URL: "",
        name: 'Acme Fashion',
        location: 'New York, USA',
        revenue: '100M - 500M',
        price: '$50 - $500',
        category: 'Apparel',
        pageID: 'acme-fashion-ny',
    },
    {
        img1URL: "",
        img2URL: "",
        name: 'Stylish Designs',
        location: 'London, UK',
        revenue: '50M - 100M',
        price: '$30 - $300',
        category: 'Accessories',
        pageID: 'stylish-designs-london',
    },
    {
        img1URL: "",
        img2URL: "",
        name: 'Trendy Threads',
        location: 'Paris, France',
        revenue: '500M - 1B',
        price: '$80 - $800',
        category: 'Apparel',
        pageID: 'trendy-threads-paris',
    },
    {
        img1URL: "",
        img2URL: "",
        name: 'Chic Boutique',
        location: 'Milan, Italy',
        revenue: '20M - 50M',
        price: '$40 - $400',
        category: 'Accessories',
        pageID: 'chic-boutique-milan',
    },
    {
        img1URL: "",
        img2URL: "",
        name: 'Elegant Essentials',
        location: 'Tokyo, Japan',
        revenue: '100M - 500M',
        price: '$60 - $600',
        category: 'Apparel',
        pageID: 'elegant-essentials-tokyo-1',
    },
    {
        img1URL: "",
        img2URL: "",
        name: 'Elegant Essentials',
        location: 'Tokyo, Japan',
        revenue: '100M - 500M',
        price: '$60 - $600',
        category: 'Apparel',
        pageID: 'elegant-essentials-tokyo-2',
    },
    {
        img1URL: "",
        img2URL: "",
        name: 'Elegant Essentials',
        location: 'Tokyo, Japan',
        revenue: '100M - 500M',
        price: '$60 - $600',
        category: 'Apparel',
        pageID: 'elegant-essentials-tokyo-3',
    },
    {
        img1URL: "",
        img2URL: "",
        name: 'Elegant Essentials',
        location: 'Tokyo, Japan',
        revenue: '100M - 500M',
        price: '$60 - $600',
        category: 'Apparel',
        pageID: 'elegant-essentials-tokyo-4',
    },
    {
        img1URL: "",
        img2URL: "",
        name: 'Elegant Essentials',
        location: 'Tokyo, Japan',
        revenue: '100M - 500M',
        price: '$60 - $600',
        category: 'Apparel',
        pageID: 'elegant-essentials-tokyo-5',
    },
    {
        img1URL: "",
        img2URL: "",
        name: 'Elegant Essentials',
        location: 'Tokyo, Japan',
        revenue: '100M - 500M',
        price: '$60 - $600',
        category: 'Apparel',
        pageID: 'elegant-essentials-tokyo-6',
    },
];



export default Result;
