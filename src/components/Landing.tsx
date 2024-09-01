import { ReactElement, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBar({ onChange }: { onChange: (value: string) => void }): ReactElement {
    return (
        <div className="relative w-full max-w-lg">
            <div className="flex items-center border border-gray-300 rounded-lg pl-3 pr-3 py-2">
                <FaSearch className="h-4 w-4 text-muted-foreground" />
                <input
                    type="search"
                    className="w-full bg-background pl-3 focus:outline-none border-none"
                    placeholder="Search for fashion brands"
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </div>
    );
}

function SelectBar({ label, options, onChange }: { label: string, options: string[], onChange: (value: string) => void }): ReactElement {
    return (
        <select className="w-full bg-white border border-input rounded-lg px-3 py-2"
                onChange={(e) => {
                    onChange(e.target.value);
                }}>
            <option value="">{label}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    );
}

function SearchSection({ keyword, onSearch, onSubmit }: { keyword: string, onSearch: (keyword: string) => void, onSubmit: () => void }): ReactElement {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What are you looking for?</h2>
                        <p className="text-lg">
                            Describe the fashion brands you're interested in and we'll help you find the perfect match.
                        </p>
                    </div>
                    <SearchBar onChange={onSearch} />
                    <button
                        className="bg-black text-white font-medium py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors mt-4"
                        onClick={onSubmit}
                    >
                        GO&SEARCH
                    </button>
                </div>
            </div>
        </section>
    );
}

function SelectSection({ onSelect }: { onSelect: (value: string, index: number) => void }): ReactElement {
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
                            <SelectBar
                                label="HQ Location"
                                options={["United States", "United Kingdom", "Italy", "France", "Germany", "korea"]}
                                onChange={(value) => onSelect(value, 0)}
                            />
                            <SelectBar
                                label="Revenue Size"
                                options={[" ~ $1M", "$1M - $10M", "$10M ~ "]}
                                onChange={(value) => onSelect(value, 1)}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <SelectBar
                                label="Price Range"
                                options={["Basic", "Standard", "Premium", "Luxury"]}
                                onChange={(value) => onSelect(value, 2)}
                            />
                            <SelectBar
                                label="Main Categories"
                                options={["Menswear", "Womenswear", "Kids", "Sportswear", "Accessories", "Shoes"]}
                                onChange={(value) => onSelect(value, 3)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Landing(): ReactElement {
    const [selectOptions, setSelectOptions] = useState<string[]>(["", "", "", ""]);
    const [keyword, setKeyword] = useState<string>("");

    const handleSearch = (keyword: string) => {
        setKeyword(keyword);
    };

    const handleSelect = (value: string, index: number) => {
        const newOptions = [...selectOptions];
        newOptions[index] = value;
        setSelectOptions(newOptions);
    };

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (keyword.length == 0) {
            alert("검색어를 입력해주세요.");
            return;
        }
        navigate('/loading-page', {
            state: {
                keyword: keyword,
                location: selectOptions[0],
                revenue: selectOptions[1],
                price: selectOptions[2],
                categories: selectOptions[3]
            }
        });
    };

    return (
        <div className="w-full min-h-screen bg-background text-foreground">
            <SelectSection onSelect={handleSelect} />
            <SearchSection keyword={keyword} onSearch={handleSearch} onSubmit={handleSubmit} />
        </div>
    );
}

export default Landing;
