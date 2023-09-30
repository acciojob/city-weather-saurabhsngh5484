import React from "react";
import axios from "axios";
import './../styles/App.css';

const App = () => {
  const [search, setSearch] = React.useState("");
  const [location, setLocation] = React.useState(null);


  function userSearch(e){
     setSearch(e.target.value);
  }

  React.useEffect(() => {

    // setTimeout(() => {
      const fetchLocation = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c5dba0fc1db11ac897ab58bfcad62702`;
      axios.get(fetchLocation)
      .then((data) => {
        console.log(data.data["weather"][0].main);
        setLocation(data.data);
        setSearch("");
      })
      .catch ((error)=> {
        console.log(error);
      })
    // }, 2000)
  }, [search]);


  React.useEffect(() => {
    setSearch("");
  }, [location]);


  return (
    <div>
        {/* Do not remove the main div */}
        <input type="text" className="search" onChange={userSearch} value={search}/>
        {location!=null ? 
        <div className="weather">
          {/* <p>{location.weather.main}</p> */}
          <p>{location.name}</p>
          <p>{location.weather[0].main}</p>
          <p>{location.main.temp}</p>
          <p>{location.weather[0].icon}</p>
        </div>
        : ""
        } 
    </div>
  )
}

export default App