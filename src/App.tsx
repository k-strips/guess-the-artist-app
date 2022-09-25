import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { appleMusic } from "./utils";

function App() {
  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = async () => {
    try {
      const response = await appleMusic("/lookup?id=183313439&entity=album");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return <div className="App"></div>;
}

export default App;
