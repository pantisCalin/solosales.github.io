import mainImage from "../mainImage.jpg";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Home = ({
  sortByCategory,
  filterOptions,
  filteredProducts,
  showResults,
}) => {
  return (
    <div className="home" style={{ backgroundImage: `url(${mainImage})` }}>
      <div className="searchPart">
        <div className="homeLabel">Caută produse</div>
        <SearchBar
          filterOptions={filterOptions}
          filteredProducts={filteredProducts}
          showResults={showResults}
          useHiddenList={true}
          outline={false}
        />

        <div className="underButtonsHome">
          <Link className="HomeButton" to={`${process.env.PUBLIC_URL}/produse`}>
            Vezi toate produsele
          </Link>
          <Link
            name="sudura"
            onClick={sortByCategory}
            className="HomeButton"
            to={`${process.env.PUBLIC_URL}/produse`}
          >
            Sudură
          </Link>
          <Link
            name="accesorii"
            onClick={sortByCategory}
            className="HomeButton"
            to={`${process.env.PUBLIC_URL}/produse`}
          >
            Accesorii
          </Link>
          <Link
            name="scule"
            onClick={sortByCategory}
            className="HomeButton"
            to={`${process.env.PUBLIC_URL}/produse`}
          >
            Consumabile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
