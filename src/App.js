import React from "react";

const FilterableProductTable = ({products}) => {
  return (
    <>
      <SearchBar />
      <ProductTable products = {products} />
    </>
  );
};

const SearchBar = () => {
  return(
    <form>
      <input type = "text" placeholder="Search..." ></input>
      <label>
        <input type = "checkbox"></input>
        {' '}
        Only show products in stock
      </label>
    </form>
  );
};

const ProductTable = ({products}) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if(lastCategory !== product.category){
      rows.push(
        <ProductCategoryRow category = {product.category} key = {product.category} />
      );
    }

    rows.push(
      <ProductRow product = {product} key = {product.name} />
    );

    lastCategory = product.category;
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
};

const ProductRow = ({ product }) => {
  // const price = product.price;
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
  );
};

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

const App = () => {
  return <FilterableProductTable products={PRODUCTS} />;
};



export default App;
//can I have the same export in multiple files
//