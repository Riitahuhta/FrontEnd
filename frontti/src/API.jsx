function APIkurssit(){
    fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses")
        .then((kurssihaku) => {
            return kurssihaku.json();
        })
        .then((kurssit) => {
            console.log(kurssit);
        });

}

export default APIkurssit;