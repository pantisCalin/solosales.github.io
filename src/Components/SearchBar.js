import { useState } from "react";
import { NavLink } from "react-router-dom";

const SearchBar = ({
  filterOptions,
  filteredProducts,
  showResults,
  useHiddenList,
  outline,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [didHeFocused, setDidHeFocused] = useState(false);
  return (
    <div className="searchBar">
      <input
        type="text"
        className="searchBarInput"
        placeholder="Incepe sa scrii denumirea produsului..."
        onFocus={() => {
          setIsFocused(true);
          setDidHeFocused(true);
        }}
        onBlur={() =>
          setTimeout(() => {
            setIsFocused(false);
          }, 100)
        }
        style={
          outline
            ? {
                boxShadow: "0 0 10px gray",
                borderRadius: "25px",
                padding: "10px 30px",
                boxSizing: "borderBox",
                width: "95vw",
                margin: "30px 0px",
              }
            : {}
        }
        onChange={filterOptions}
        onKeyDown={showResults}
      />

      {useHiddenList && (
        <div
          className={`hiddenList ${
            didHeFocused ? (isFocused ? "extend" : "collapse") : "noDisp"
          }`}
        >
          {didHeFocused &&
            filteredProducts.map((product, index) => (
              <NavLink
                to={`/produse/${product.denumire.replace("/", "theSlash")}`}
                key={product.cod}
                className="optionList"
              >
                <div className="optionName">{product.denumire}</div>
                <img
                  alt="Produs Imagine"
                  className="searchImage"
                  src={`${process.env.PUBLIC_URL}/${product.imagine}`}
                />
              </NavLink>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
