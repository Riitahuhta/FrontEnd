import { useState, useEffect } from "react";
import APIkurssit from "./API";

function ListaaKurssit() {
    const [kurssit, asetaKurssit] = useState([]);

    useEffect(() => {
        APIkurssit().then((kurssitiedot) => {
            asetaKurssit(kurssitiedot)
        });
    });

    return(
        <div>
            <ul>
                {kurssit.map((kurssi) => (
                    <li key={kurssi.id}>{kurssi.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListaaKurssit;