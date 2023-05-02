import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h1>SOLO echipamente sudură Onești</h1>
      <h2>Administrator</h2>
      <p>
        Pentru informații suplimentare despre produse și servicii, nu ezitați să
        ne contactați telefonic la:
        <br />
        <span className="span1"> Tel:</span>{" "}
        <a className="span2 clickHov" href="tel:+40752166979">
          0752 166 979
        </a>{" "}
        Șolomonea Constantin (<span className="span1">Solo</span>)
      </p>
      <h2>Mail</h2>
      <p>
        Pentru informații suplimentare despre produse și servicii, nu ezitați să
        ne contactați prin email la adresa:
        <br />
        <span className="span1"> Email:</span>{" "}
        <a
          className="span2 clickHov"
          href="mailto:constantin.sololomonea74@gmail.com"
        >
          constantin.sololomonea74@gmail.com
        </a>
      </p>
      <h2>Facebook</h2>
      <p>
        Abonați-vă la pagina noastră de facebook pentru a afla primii noile
        informații cu privire la produsele și serviciile noastre.
        <br />
        <span className="span1"> Website: </span>
        <a
          className="span2 clickHov"
          href="https://www.facebook.com/profile.php?id=100091849817660"
        >
          Solo echipamente
        </a>
      </p>
      <h2>Locație</h2>
      <p>
        Vă așteptam în magazinul nostru la colțul dintre strada Mărășești nr. 4
        si strada Daciei.
        <br />
      </p>
      <iframe
        className="iframeLocation"
        width="100%"
        height="100%"
        id="gmap_canvas"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d572.41134322361452!2d36.77020328027813!3d56.25854707862359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b507f3bc0c597b%3A0x43c7ab2f04e52709!2sSOLO%20Echipamente%20Sudura!5e0!3m2!1sro!2sro!4v1682614166329!5m2!1sro!2sro"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <h2>Program</h2>
      <p>
        Vă așteptam in magazinul nostru pentru cumparaturi!
        <br />
        <span className="span1"> Luni - Vineri: </span> 08:00 - 16:00
        <span className="span2"> Deschis</span>
        <br />
        <span className="span1"> Weekend: </span>
        <span className="span2"> Inchis</span>
      </p>
    </div>
  );
};

export default Contact;
