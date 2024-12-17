import APIkurssit from "./API";

function MainBody() {
    return (
      <div>
        <p>Tähän tulee kohta missä voi laittaa kurssin</p>
        <p>Tähän tulee boxi ja tekstikenttä johon tulee muistiinpanot</p>
        <button onClick={APIkurssit}>APIt</button>
      </div>
    );
  }
  
  export default MainBody;