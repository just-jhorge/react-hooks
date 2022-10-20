import React from "react";
import { PRODUCTS } from "./data";
import FilterableProductTable from "./FilterableProductTable";

const App = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-600 to-blue-600">
            <FilterableProductTable products={PRODUCTS} />
        </div>
    );
};

export default App;
