import { useState, useEffect } from "react";
import APIkurssit from "./API";
import PropTypes from "prop-types";

function ListaaKurssit({valittuKurssi}) {
    const [kurssit, asetaKurssit] = useState([]);

    useEffect(() => {
        const haeKurssit = async () => {
            const kurssitiedot = await APIkurssit(); //Odotetaan datan lataamista
            asetaKurssit(kurssitiedot);
        };

        haeKurssit();
    }, []);

    return(
        <div>
            <ul>
                {kurssit.map((kurssi) => (
                    <li key={kurssi.id}>
                    <button onClick={() => valittuKurssi(kurssi)}>
                        {kurssi.name}
                    </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

ListaaKurssit.propTypes = {
    valittuKurssi: PropTypes.func.isRequired,
  };

export default ListaaKurssit;