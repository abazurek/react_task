import React,{useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from 'react-router'
import Unsplash, { toJson } from 'unsplash-js';

import Main from "./components/Main";
import Results from "./components/Results";

function App() {

    const [photos, setPhotos]=useState('');
    const [name, setName]=useState('');

  const unsplash = new Unsplash({
    accessKey: "VTAtBpf3Xq0cyenmI0hSh_r872QKMf6TsOpOFpN_lhk",
  });


  function searchPhotos(text, setData){
      unsplash.search.photos(text, 1,30)
          .then(toJson)
          .then(json => {
              setData(json)
          });
  }



  return (
      <Router>
          <Switch>
              <Route exact path='/'>
                  <Main searchPhotos={searchPhotos} setPhotos={setPhotos} setName={setName}/>
              </Route>
              <Route path='/results'>
                  <Results searchPhotos={searchPhotos} setPhotos={setPhotos} photos={photos} name={name} setName={setName}/>
              </Route>
          </Switch>
      </Router>

  );
}

export default App;
