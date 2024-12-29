async function APIkurssit() {
    const kurssihaku = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses");
    const kurssitiedot = await kurssihaku.json();
    return kurssitiedot; //Palautetaan API:n data
  }

async function APImuistiinpanot() {
  const noteshaku = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes");
  const notestiedot = await noteshaku.json();
  return notestiedot; //Palautetaan API:n data
}
  
export{APIkurssit, APImuistiinpanot};
export default APIkurssit;