import React from "react";

const ProductCategoryRow = ({ category }) => {
    return (
        <tr className="bg-sky-500">
            <th colSpan="2">{category}</th>
        </tr>
    );
};

export default ProductCategoryRow;
