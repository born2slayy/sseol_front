import { ReactElement } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

//design: https://v0.dev/t/PEpY7siw0Ll

function SearchBar(): ReactElement {
    return (
        <div>
            <FaSearch className="text-gray-500 mr-2" /> {/*돋보기 아이콘*/}
        </div>
    );
}

function SelectBar(): ReactElement {
    return (
        <></>
    );
}

//lower part
function SearchSection(): ReactElement {
    return (
        <>
            <h1>Title</h1>
            <p>text...</p>
            <SearchBar />
            <Link to='/loading'>
                <button>Go&SEARCH</button>
            </Link>
        </>
    );
}

//upper part
function SelectSection(): ReactElement {
    return (
        <div>
            <SelectBar />
            <SelectBar />
            <SelectBar />
            <SelectBar />
        </div>
    );
}

function Landing(): ReactElement {
    return (
        <>
            <SelectSection />
            <SearchSection />
        </>
    );
}

export default Landing;