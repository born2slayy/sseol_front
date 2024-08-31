import { ReactElement } from "react";
import { Link } from "react-router-dom";
//https://v0.dev/t/PEpY7siw0Ll
//lower part
function SearchSection(): ReactElement {
    return (
        <>
            <Link to='/loading'>
                <button>tmp</button>
            </Link>
        </>
    );
}

//upper part
function SelectSection(): ReactElement {
    return (
        <>
        </>
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