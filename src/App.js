import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Produse from "./Components/Produse";
import Contact from "./Components/Contact";
import Navigare from "./Components/Navigare";
import { useEffect, useState } from "react";
import Produs from "./Components/Produs";
import Lista from "./Components/Lista";

function App() {
  const navigate = useNavigate();
  const levenshtein = require("js-levenshtein");
  const [allProducts, setAllProducts] = useState([
    {
      denumire: "",
      unitate: "",
      pret: "",
      cod: "",
      imagine: "",
    },
  ]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const makeLetterCase = (string) =>
    string.replaceAll(
      /\S*/g,
      (word) => `${word.slice(0, 1)}${word.slice(1).toLowerCase()}`
    );

  const ProcessData = (textData) => {
    const rows = textData.split("\n");
    let dataProducts = [];
    rows.map((row, index) => {
      const splittedRow = row.split(",");
      if (index > 0 && splittedRow.length === 5) {
        dataProducts.push({
          denumire: makeLetterCase(splittedRow[0]),
          unitate: splittedRow[1],
          pret: splittedRow[2],
          cod: splittedRow[3],
          imagine: splittedRow[4],
        });
      }
    });
    return dataProducts;
  };
  const fetchTheData = async () => {
    const textData = await fetch(`${process.env.PUBLIC_URL}/BazaDate.csv`).then(
      (response) => response.text()
    );
    const processedData = ProcessData(textData);
    setAllProducts(processedData);
    setFilteredProducts(processedData);
  };
  useEffect(() => {
    fetchTheData();
  }, []);

  const filterOptions = (e) => {
    const searchText = e.target.value.toLowerCase();
    let filteredProd = allProducts.filter((product) => {
      return product.denumire.toLowerCase().includes(searchText);
    });
    if (filteredProd.length == 0) {
      filteredProd = allProducts.map((product) => {
        let walker = searchText;
        let wayer = product.denumire.toLowerCase();
        let levenDist = levenshtein(wayer.toLowerCase(), walker);
        if (product.denumire.length < searchText.length) {
          walker = product.denumire.toLowerCase();
          wayer = searchText;
        }
        for (let i = 0; i < wayer.length - walker.length; i++) {
          const proposedleven = levenshtein(
            wayer.slice(i, walker.length - i),
            walker
          );
          if (proposedleven < levenDist) {
            levenDist = proposedleven;
          }
        }
        return {
          ...product,
          levenDist: levenDist,
        };
      });
      setFilteredProducts(
        filteredProd.sort((a, b) => a.levenDist - b.levenDist)
      );
    } else {
      setFilteredProducts(filteredProd);
    }
  };
  const sortByCategory = (e) => {
    console.log(e.target.name);
  };
  const showResults = (e) => {
    if (e.key === "Enter") {
      navigate("/produse");
    }
  };
  const addToList = (certainProduct, quantity) => {
    setSavedItems([
      ...savedItems,
      {
        product: certainProduct,
        quantity: quantity,
        totalPrice: (
          parseFloat(certainProduct.pret) * parseFloat(quantity)
        ).toFixed(2),
      },
    ]);
  };
  useEffect(() => {
    const initialValue = 0;
    const computedTotal = savedItems
      .reduce(
        (accumulator, currentValue) =>
          accumulator + parseFloat(currentValue.totalPrice),
        initialValue
      )
      .toFixed(2);
    setTotalPrice(computedTotal);
  }, [savedItems]);
  return (
    <div className="App">
      <Navigare />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              sortByCategory={sortByCategory}
              filterOptions={filterOptions}
              filteredProducts={filteredProducts}
              showResults={showResults}
            />
          }
        />
        <Route
          exact
          path="/produse"
          element={
            <Produse
              filterOptions={filterOptions}
              filteredProducts={filteredProducts}
              showResults={showResults}
            />
          }
        />
        <Route exact path="/contact" element={<Contact />} />
        <Route
          exact
          path="/produse/:denumire"
          element={
            <Produs
              allProducts={allProducts}
              fetchTheData={fetchTheData}
              addToList={addToList}
            />
          }
        />
        <Route
          exact
          path="/lista"
          element={<Lista totalPrice={totalPrice} savedItems={savedItems} />}
        />
      </Routes>
    </div>
  );
}

export default App;
