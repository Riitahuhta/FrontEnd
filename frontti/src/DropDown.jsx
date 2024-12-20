import ListaaKurssit from "./Lista";
import { useState } from "react";

function DropDown() {
  const [avaa, asetaAuki] = useState(false);
  const [valittuArvo, asetaValittuArvo] = useState("");

  const dropDown = () => {
    asetaAuki(!avaa);
  };

  const valittu = (kurssi) => {
    asetaValittuArvo(kurssi.name);
    asetaAuki(false);
  };


    return (
      <div>
        <button onClick={dropDown}
        //Tähän pitää keksiä joku style
        >valittavissa olevat kurssit</button>
        {avaa && (
          <ListaaKurssit valittuKurssi={valittu}/>
        )}

        <div>
          <p></p>
        <input
          type="text"
          value={valittuArvo}
          readOnly
        />
        </div>
        <p>Tähän tulee boxi ja tekstikenttä johon tulee muistiinpanot</p>
      </div>
    );
  }

  export default DropDown;
  