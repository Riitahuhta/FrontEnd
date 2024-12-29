import ListaaKurssit from "./Lista";
import { useState } from "react";
import PropTypes from "prop-types";

function DropDown({ valittuKurssi, asetaValittuKurssi }) {
  const [avaa, asetaAuki] = useState(false);

  const dropDown = () => {
    asetaAuki(!avaa);
  };

  const valittuKurssiHandler = (kurssitiedot) => {
    asetaValittuKurssi(kurssitiedot); // Päivitä valittu kurssi kokonaisena objektina
    asetaAuki(false);
  };

  return (
    <div>
      <button onClick={dropDown}>Valittavissa olevat kurssit</button>
      {avaa && 
      <ListaaKurssit valittuKurssi={valittuKurssiHandler} />}
      <div>
        <input
          type="text"
          value={valittuKurssi?.name || ""}
          readOnly
          placeholder="Valitse kurssi"
        />
      </div>
    </div>
  );
}

DropDown.propTypes = {
  valittuKurssi: PropTypes.object, // Kurssiobjekti
  asetaValittuKurssi: PropTypes.func.isRequired, // Funktio kurssin asettamiseen
};

export default DropDown;
