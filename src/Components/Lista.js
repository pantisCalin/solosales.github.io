import { useEffect, useState } from "react";
import logo from "../logo.jpeg";
const Lista = ({ savedItems, totalPrice }) => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const separator = "%0a";
    let txt = `Buna ziua! As dori sa verific disponibilitatea urmatoarelor produse:${separator}${separator}`;
    savedItems.forEach((item) => {
      txt += `${item.quantity}x${item.product.unitate} ${item.product.denumire} Pret: ${item.totalPrice} RON,${separator}`;
    });
    txt += `${separator}Pret total: ${totalPrice} RON${separator}${separator}`;
    txt += `Astept raspunsul dumneavoastra ${separator} Va multumesc!`;
    setMessage(txt);
  }, [totalPrice]);
  console.log(message);
  return (
    <div className="listaCarucior">
      <h1>Listă produse</h1>
      <table>
        {savedItems.length > 0 && (
          <thead>
            <tr>
              <th>Denumire </th>
              <th>{window.screen.width > 550 ? "Imagine" : "Img."}</th>
              <th>Cantitate</th>
              <th>Pret</th>
              <th>Subtotal</th>
            </tr>
          </thead>
        )}

        <tbody>
          {savedItems.length < 1 && (
            <tr>
              <td></td>
              <td></td>
              <td className="noProducts">
                Niciun produs nu a fost adăugat pe listă până acum
              </td>
            </tr>
          )}
          {savedItems.map((savedItem) => (
            <tr key={savedItem.product.cod}>
              <td>{savedItem.product.denumire}</td>
              <td>
                {" "}
                <img
                  className="imagineCarucior"
                  src={`${process.env.PUBLIC_URL}/${savedItem.product.imagine}`}
                />
              </td>
              <td>
                {savedItem.quantity} {savedItem.product.unitate}
              </td>
              <td>
                {savedItem.product.pret} RON/{savedItem.product.unitate}
              </td>
              <td>
                <span className="span1">{savedItem.totalPrice}</span> RON
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="totalTD">Total:</td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <span className="span2">{totalPrice}</span> RON
            </td>
          </tr>
        </tfoot>
      </table>
      <h1>Cum comand?</h1>
      <p>
        {" "}
        Alege dintre optiunile de mai jos făcând click una din ele pentru a face
        o comanda sau pentru a verifica disponibilitatea produselor noastre in
        magazin. Un mesaj cu comenzile de mai sus va fi generat in functie de
        optiunea pe care o alegeti.
      </p>
      <div className="commandOptions">
        <a href={`https://wa.me/+40752166979?text=${message}`}>
          <img
            className="listIcon"
            src={`${process.env.PUBLIC_URL}/wapp.png`}
          />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100091849817660"
        >
          <img className="listIcon" src={`${process.env.PUBLIC_URL}/fb.png`} />
        </a>
        <a
          className="span2 clickHov"
          href={`mailto:constantin.sololomonea74@gmail.com?body=${message}`}
        >
          <img
            className="listIcon"
            src={`${process.env.PUBLIC_URL}/mail.png`}
          />
        </a>
        <a href={`sms:40752166979;?&body=${message}`}>
          <img className="listIcon" src={`${process.env.PUBLIC_URL}/sms.png`} />
        </a>
        <a href="tel:+40752166979">
          <img
            className="listIcon"
            src={`${process.env.PUBLIC_URL}/phone.svg`}
          />
        </a>
      </div>
    </div>
  );
};

export default Lista;
