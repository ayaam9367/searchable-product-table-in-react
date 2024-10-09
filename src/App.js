import React from 'react'

const FilterableProductTable = () => {
  return (
    <>
    <SearchBar />
    <div>.....</div>
    <ProductTable />
    </>
  )
}

const SearchBar = () => {
  return(
    <>
    <div>Search...</div>
    <div>Only show products in stock</div>
    </>
  );
}

const ProductTable = () => {
  return(
    <>
    <div>Name Price</div>
    <div>....</div>
    <ProductCategoryRow />
    <ProductRow />
    </>
  );
}

const ProductCategoryRow = () => {
  return(
    <>
    <div>Fruits</div>
    <div>..........</div>
    </>
  );
}

const ProductRow = () => {
  return(
    <>
    <div>Apple 1$</div>
    <div>Dragonfruit 1$</div>
    <div>Passionfruit 1$</div>
    </>
  );
}

const products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];


export default FilterableProductTable;