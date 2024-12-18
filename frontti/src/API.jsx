function APIkurssit(){
    return fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses")
        .then((kurssihaku) => {
            return kurssihaku.json();
        })
        .then((kurssitiedot) => {
            return kurssitiedot;
        });

}

export default APIkurssit;