import { ReactElement } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function SearchBar(): ReactElement {
    return (
        <div className="relative w-full max-w-lg">
            {/* 검색창과 돋보기를 감싸는 외부 테두리 */}
            <div className="flex items-center border border-gray-300 rounded-lg pl-3 pr-3 py-2">
                <FaSearch className="h-4 w-4 text-muted-foreground"/>
                <input
                    type="search"
                    className="w-full bg-background pl-3 focus:outline-none border-none"
                    placeholder="Search for fashion brands"
                />
            </div>
        </div>
    );
}

function SelectBar(): ReactElement {
    return (
        <select className="w-full bg-white border border-input rounded-lg px-3 py-2">
            <option>Select an option</option>
        </select>
    );
}

function SearchSection(): ReactElement {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What are you looking for?</h2>
                        <p className="text-lg">
                            Describe the fashion brands you're interested in and we'll help you find the perfect match. e.g.,
                            region, country, distribution, keywords, mood, concept, and whatever you want.
                        </p>
                    </div>
                    <SearchBar />
                    <Link to='/loading' className="block mt-4">
                        <button
                            className="bg-black text-white font-medium py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors">
                            GO&SEARCH
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function SelectSection(): ReactElement {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Find the perfect fashion brands for your business
                        </h2>
                        <p>Discover the right brands for your business with our advanced AI agent!</p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <SelectBar />
                            <SelectBar />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <SelectBar />
                            <SelectBar />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Landing(): ReactElement {
    return (
        <div className="w-full min-h-screen bg-background text-foreground">
            <SelectSection />
            <SearchSection />
        </div>
    );
}

export default Landing;
