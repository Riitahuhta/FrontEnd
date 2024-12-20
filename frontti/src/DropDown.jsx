import ListaaKurssit from "./Lista";
import { useState } from "react";

function DropDown() {
  const [avaa, asetaAuki] = useState(false);

  const dropDown = () => {
    asetaAuki(!avaa);
  };
    return (
      <div>
        <button onClick={dropDown}>valittavissa olevat kurssit</button>
        {avaa && (
          <ListaaKurssit />
        )}
        <p>Tähän tulee kohta missä voi laittaa kurssin</p>
        <p>Tähän tulee boxi ja tekstikenttä johon tulee muistiinpanot</p>
      </div>
    );
  }

  export default DropDown;
  