import React, { useState } from "react";
import "./search.css";
import { Link } from "react-router-dom";
import ProductData from "../../data/data";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const SearchPage = () => {
  const [products, setproducts] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    const newProducts = ProductData.filter((p) =>
      p.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setproducts(newProducts);
  };
  return (
    <div className="searchPage">
      <ContentWrapper>
        <div className="inputsearch">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            name="search"
            value={search}
            onChange={handleSearch}
            placeholder="Search For Dishes"
          />
          <Link to={"/"}>
            <i className="fa-solid fa-xmark"></i>
          </Link>
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <div className="searchResult">
          {products.map((data) => (
            <div className="searchProduct">
              <div className="searchProductImg"></div>
              <p>{data.name}</p>
              <p>{data.price} Rs</p>
            </div>
          ))}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default SearchPage;
