import React from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { StartPage } from "./StartPage"
import { InputClient } from "./InputClient.jsx"
import { ClientList } from "./ClientList.jsx"


function App() {
  return (
    <Router>
      <Route path="/" exact component={StartPage}></Route>
      <Route path="/inputclient" exact component={InputClient}></Route>
      <Route path="/clientslist" exact component={ClientList}></Route>
    </Router>
  );
}

export default App;
