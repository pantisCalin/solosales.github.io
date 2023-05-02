import React from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

const Produse = ({ filterOptions, filteredProducts, showResults }) => {
  return (
    <div className="Produse">
      <SearchBar
        filterOptions={filterOptions}
        filteredProducts={filteredProducts}
        showResults={showResults}
        useHiddenList={false}
        outline={true}
      />
      <div className="produseFiltrate">
        {filteredProducts.map((product, index) => (
          <NavLink
            to={`/produse/${product.denumire.replace("/", "theSlash")}`}
            key={product.cod}
            className="flexProdus"
          >
            <img
              alt="Produs Imagine"
              className="flexImagine"
              src={`${process.env.PUBLIC_URL}/${product.imagine}`}
            />
            <div className="flexNume">{product.denumire}</div>
            <div className="flexPret">{`${product.pret} RON/${product.unitate}`}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Produse;
