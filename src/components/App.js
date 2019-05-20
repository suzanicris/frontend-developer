import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={() => <h1>Search</h1>} />
        <Route path="/product/:id" component={() => <h1>Produto</h1>} />
      </div>
    </BrowserRouter>
  );
};

export default App;
