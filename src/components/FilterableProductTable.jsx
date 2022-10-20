import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = ({ products }) => {
    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div className="flex flex-col w-[40%] items-start justify-center bg-white p-5 rounded-lg shadow-lg">
            <SearchBar
                filterText={filterText}
                onFilterTextChange={setFilterText}
                inStockOnly={inStockOnly}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
};

export default FilterableProductTable;
