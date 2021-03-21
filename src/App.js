import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Content from "./components/Content";
import Breed from "./components/Breed";
import Header from "./components/Header";
import { ColorContext } from "./contexts/context";
import { db } from ".";

const App = () => {
  const [color, setColor] = useState("green");
  const [perfumes, setPerfumes] = useState([]);
  console.log(perfumes);
  const onContextToggle = () => {
    if (color === "green") {
      setColor("red");
    } else {
      setColor("green");
    }
  };
  const addPerfumes = () => {
    db.collection("perfume")
      .add({
        asd: "asd",
        dsa: "dsa",
      })
      .then((querySnapshot) => {
        // setPerfumes(querySnapshot.map(s => s.data()))
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  const getPerfumes = () => {
    db.collection("perfume")
      .get()
      .then((querySnapshot) => {
        const newArr = [];
        querySnapshot.forEach((doc) => {
          newArr.push(doc.data());
          console.log(`${doc.id} => ${doc.data()}`);
        });
        setPerfumes(newArr)
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  return (
    <ColorContext.Provider value={color}>
      <div>
        <button onClick={onContextToggle}>{color}</button>
        <button onClick={addPerfumes}>add</button>
        <button onClick={getPerfumes}>get</button>
        <Switch>
          <Route path="/selected-breed" component={Breed} />
          <Route
            path="/"
            render={() => (
              <>
                <Header />
                <Content />
              </>
            )}
          />
        </Switch>
      </div>
    </ColorContext.Provider>
  );
};

export default App;
