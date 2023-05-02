import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
const Produs = ({ allProducts, fetchTheData, addToList }) => {
  const linkName = useParams().denumire.replace("theSlash", "/");
  const [certainProduct, setCertainProduct] = useState({
    denumire: "",
    unitate: "",
    pret: "",
    cod: "",
    imagine: "",
  });
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    fetchTheData();
  }, []);
  useEffect(() => {
    const object = allProducts.filter(
      (product) => product.denumire == linkName
    )[0];
    if (object) {
      setCertainProduct(object);
      object.unitate === "BUC" ? setQuantity(1) : setQuantity(0.5);
    }
  }, [allProducts]);

  return (
    <div className="paginaProdus">
      <img
        className="produsImagine"
        src={`${process.env.PUBLIC_URL}/${certainProduct.imagine}`}
      />
      <div className="detaliiProdus">
        <h2 className="productTitle">{certainProduct.denumire}</h2>
        <span className="span1">Cod Produs: </span> {certainProduct.cod}
        <div className="produsPret">
          {" "}
          <span className="span1">Pret: </span>{" "}
          {`${certainProduct.pret} RON/${certainProduct.unitate}`}
        </div>
        <div className="butPlusQuantity">
          <div className="quantity">
            <span className="span1">
              Cantitate (<span className="span2">{certainProduct.unitate}</span>
              ):
            </span>

            <input
              type="number"
              value={quantity}
              // onFocus={() => window.scrollTo(10, document.body.scrollHeight)} come back to this
              onChange={(e) => {
                setQuantity(
                  certainProduct.unitate === "BUC"
                    ? parseInt(e.target.value)
                    : parseFloat(e.target.value) || e.target.value.toString()
                );
              }}
            />
            {certainProduct.unitate === "BUC" ? (
              <div className="intregFractional">(Număr întreg)</div>
            ) : (
              <div className="intregFractional">(Număr Fractional)</div>
            )}
          </div>
          <NavLink
            to="/lista"
            className="addBut"
            onClick={() => addToList(certainProduct, quantity)}
          >
            Adaugă în listă <span className="span1"> {quantity} </span>
            {certainProduct.unitate}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Produs;
