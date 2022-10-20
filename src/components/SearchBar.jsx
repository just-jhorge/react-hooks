import React from "react";

const SearchBar = ({
    filterText,
    onFilterTextChange,
    inStockOnly,
    onInStockOnlyChange,
}) => {
    return (
        <form className="flex flex-col items-start justify-center mb-3">
            <input
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
                className="border-b-[1px] border-black mb-2"
            />
            <label>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                />{" "}
                Only show products in stock
            </label>
        </form>
    );
};

export default SearchBar;
