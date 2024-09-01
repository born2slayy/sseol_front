import { ReactElement } from "react";
import useInput, { InputState } from "../tools/useInput";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useContractAPI, { ContractApiOut } from "../api/useContractAPI";
import { cardDataList } from "../tools/testData";
import { SearchApiResponse } from "../api/useSearchAPI";

//design: https://v0.dev/r/prIHE5fgaNv

interface SearchBarProps {
    searchState: InputState,
}

interface CardsProps {
    search: string,
}

export interface CardProps {
    brandName: string,
    brandLogo: string, //url
    url2: string, //url
    location: string,
    revenue: string,
    priceRange: string,
    category: string,
}

function Card(props: CardProps): ReactElement {

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <img 
                src={props.brandLogo} 
                alt={props.brandLogo} 
                className="w-full h-32 object-cover rounded-md mb-4" 
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">{props.brandName}</h3>
            <p className="text-gray-600 mb-2">{props.location}</p>
            <p className="text-gray-600 mb-2">Revenue: {props.revenue}</p>
            <p className="text-gray-600 mb-2">Price Range: {props.priceRange}</p>
            <p className="text-gray-600 mb-4">Category: {props.category}</p>
            <img 
                src={props.brandLogo} 
                alt={props.brandLogo} 
                className="w-full h-80 object-cover rounded-md mb-4" 
            />
            <Link to={`/order/${props.brandName}`} className="w-full">
                <button className="flex items-center justify-center bg-white border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition duration-300">
                    <FaShoppingCart size={20} color="black" />
                    <span className="ml-2">Add to Cart</span>
                </button>
            </Link>
        </div>
    );
}

function Cards({search}: CardsProps): ReactElement {
    const pattern: RegExp = new RegExp(search, 'i');
    // const location = useLocation();
    // const dataList: SearchApiResponse = location.state!;
    const dataList = cardDataList;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {dataList.brands
                .filter(cardData => pattern.test(cardData.brandName))
                .map((cardData: CardProps, index: number): ReactElement => (
                    <Card key={index} {...cardData} />
                )
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
        <div className="mt-10 mb-10 ml-20 mr-20 p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Fashion Brand Search</h1>
            <SearchBar searchState={searchState} />
            <Cards search={searchState.state}/>
        </div>
    );
}

export default Result;
