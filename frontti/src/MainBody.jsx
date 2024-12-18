import ListaaKurssit from "./Lista";
import { useState } from "react";

function MainBody() {
  const [avaa, asetaAuki] = useState(false);

  const dropDown = () => {
    asetaAuki(!avaa);
  };
    return (
      <div>
        <button onClick={dropDown}>valittavissa olevat kurssit
        {avaa && (
          <ListaaKurssit />
        )}
        </button>
        <p>Tähän tulee kohta missä voi laittaa kurssin</p>
        <p>Tähän tulee boxi ja tekstikenttä johon tulee muistiinpanot</p>
      </div>
    );
  }
  
  export default MainBody;