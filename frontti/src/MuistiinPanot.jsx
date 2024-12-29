import { useState, useEffect } from "react";
import { APImuistiinpanot } from "./API";
import DropDown from "./DropDown";

function MuistiinPano() {
    const [muistiinpanot, asetaMuistiinpanot] = useState([]);
    const [valittuKurssi, asetaValittuKurssi] = useState(null);
    const [uusiMuistiinpano, asetaUusiMuistiinpano] = useState("");
  
    useEffect(() => {
      const haeMuistiinpanot = async () => {
        const muistiinpanotData = await APImuistiinpanot();
        asetaMuistiinpanot(muistiinpanotData);
      };
  
      haeMuistiinpanot();
    }, []);
  
    const tallennaMuistiinpano = async () => {
      if (!valittuKurssi) {
        alert("Valitse ensin kurssi!");
        return;
      }
  
      if (!uusiMuistiinpano) {
        alert("Muistiinpano ei voi olla tyhjä!");
        return;
      }
  
      const uusiMuistiinpanoObjekti = {
        id: new Date().getTime(),
        course: valittuKurssi,
        text: uusiMuistiinpano,
        timestamp: new Date().toISOString(),
      };
  
      asetaMuistiinpanot((edellisetMuistiinpanot) => [
        ...edellisetMuistiinpanot,
        uusiMuistiinpanoObjekti,
      ]);
  
      asetaUusiMuistiinpano("");
    };
  
    const suodataMuistiinpanot = () => {
      if (!valittuKurssi) {
        return muistiinpanot;
      }
  
      return muistiinpanot.filter(
        (muistiinpano) => muistiinpano.course.id === valittuKurssi.id
      );
    };
  
    return (
      <div>
        <h1>Muistiinpanot</h1>
  
        <DropDown
          valittuKurssi={valittuKurssi}
          asetaValittuKurssi={asetaValittuKurssi}
        />
  
        <div>
          <h2>Valittu kurssi: {valittuKurssi?.name || "Ei valittua kurssia"}</h2>
  
          <textarea
            placeholder="Kirjoita uusi muistiinpano"
            value={uusiMuistiinpano}
            onChange={(e) => asetaUusiMuistiinpano(e.target.value)}
            style={{ width: "50%", height: "100px" }}
          ></textarea>
          <p></p>
  
          <button onClick={tallennaMuistiinpano}>Tallenna muistiinpano</button>
        </div>
  
        <div>
          <h2>Kaikki muistiinpanot:</h2>
          {suodataMuistiinpanot().length > 0 ? (
            <ul>
              {suodataMuistiinpanot().map((muistiinpano) => (
                <li key={muistiinpano.id}>
                  <strong>{muistiinpano.course.name}</strong>: {muistiinpano.text} (
                  {new Date(muistiinpano.timestamp).toLocaleString()})
                </li>
              ))}
            </ul>
          ) : (
            <p>Ei muistiinpanoja!</p>
          )}
        </div>
      </div>
    );
  }
  
  export default MuistiinPano;
  
