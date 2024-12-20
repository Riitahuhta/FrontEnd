async function APIkurssit() {
    const kurssihaku = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses");
    const kurssitiedot = await kurssihaku.json();
    return kurssitiedot; // Palautetaan API:n data
  }
  

export default APIkurssit;