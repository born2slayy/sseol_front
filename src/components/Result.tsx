import { ReactElement } from "react";
import useInput, { InputState } from "../tools/useInput";

interface SearchBarProps {
    searchState: InputState,
};

interface CardProps {
    img1URL: string,
    img2URL: string,
    name: string,
    location: string,
    revenue: string,
    price: string,
    category: string,
};

function Card(props: CardProps): ReactElement {
    return (
        <>
            <img src={props.img1URL} alt={props.img1URL} />
            <h3>{props.name}</h3>
            <p>{props.location}</p>
            <p>Revenue: {props.revenue}</p>
            <p>Price Range: {props.price}</p>
            <p>Category: {props.category}</p>
            <img src={props.img2URL} alt={props.img2URL} />
            <button>Add to Cart</button>
        </>
    );
}

function Cards(): ReactElement {
    return (
        <>
            {cardDataList.map((cardData: CardProps, index: number): ReactElement => {
                return <Card key={index} {...cardData} />
            })}
        </>
    );
}

function SearchBar({searchState}: SearchBarProps): ReactElement {
    return (
        <>
            <input placeholder="Search for brands..." onChange={searchState.handler} />
        </>
    );
}

function Result(): ReactElement {
    const searchState: InputState = useInput("");

    return (
        <>
            <h1>Fashion Brand Search</h1>
            <SearchBar searchState={searchState}/>
            <Cards />
        </>
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
    },
    {
      img1URL: "",
      img2URL: "",
      name: 'Stylish Designs',
      location: 'London, UK',
      revenue: '50M - 100M',
      price: '$30 - $300',
      category: 'Accessories',
    },
    {
      img1URL: "",
      img2URL: "",
      name: 'Trendy Threads',
      location: 'Paris, France',
      revenue: '500M - 1B',
      price: '$80 - $800',
      category: 'Apparel',
    },
    {
      img1URL: "",
      img2URL: "",
      name: 'Chic Boutique',
      location: 'Milan, Italy',
      revenue: '20M - 50M',
      price: '$40 - $400',
      category: 'Accessories',
    },
    {
      img1URL: "",
      img2URL: "",
      name: 'Elegant Essentials',
      location: 'Tokyo, Japan',
      revenue: '100M - 500M',
      price: '$60 - $600',
      category: 'Apparel',
    },
  ];
  

export default Result;