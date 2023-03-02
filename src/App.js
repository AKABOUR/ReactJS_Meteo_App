import "./App.css";
import { useState } from "react";

const api = {
  key: "9a4ac348b9430409fedcb326703cb01f",
  base: "http://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
  Le bouton de recherche est enfoncé. Effectuez un appel de récupération à l'API Open Weather Map.
  */
  const searchPressed = () => {
    // `http://api.openweathermap.org/data/2.5/weather?q=${locations}&APPID={APP_ID}&units=metric`
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER  */}
        <h1>Météo App</h1>

        {/* Zone de recherche - Entrée + bouton  */}
        <div>
          <input
            type="text"
            placeholder="Enter le nom du Pays/Ville..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Rechercher</button>
        </div>

        {/* Si la météo n'est pas définie, afficher les résultats de l'API */}
        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Emplacement  */}
            <p>{weather.name}</p>

            {/* Temperature Celsius  */}
            <p>{weather.main.temp}°C</p>

            {/* État (Ensoleillé) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;
