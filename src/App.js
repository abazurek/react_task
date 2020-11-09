import React,{useState, useEffect} from 'react';
import Unsplash, { toJson } from 'unsplash-js';

import Main from "./components/Main";

// const apiAddress='https://api.unsplash.com/search/photos?query=po&client_id=VTAtBpf3Xq0cyenmI0hSh_r872QKMf6TsOpOFpN_lhk'
// const apiAddress='https://api.unsplash.com/photos?page=1&client_id=VTAtBpf3Xq0cyenmI0hSh_r872QKMf6TsOpOFpN_lhk'
// const apiAddress='https://api.unsplash.com/search/photos?page=1&per_page=30&query=poland&client_id=VTAtBpf3Xq0cyenmI0hSh_r872QKMf6TsOpOFpN_lhk'
// const apiAddress='https://api.unsplash.com/search/photos?page=3&per_page=30&&query=lan&client_id=VTAtBpf3Xq0cyenmI0hSh_r872QKMf6TsOpOFpN_lhk'
function App() {

  // const [data,setData]=useState('');

  const unsplash = new Unsplash({
    accessKey: "VTAtBpf3Xq0cyenmI0hSh_r872QKMf6TsOpOFpN_lhk",
  });

  useEffect(()=>{

  },[]);

  function searchPhotos(text, setData){
      unsplash.search.photos(text, 1,30)
          .then(toJson)
          .then(json => {
              setData(json)
          });
  }


  // if(data){
  //   data.results.forEach(item=>item.tags.forEach(tag=>{
  //     if( tag.title.includes('lan') || tag.type.includes('lan')){
  //       console.log(` title: ${tag.title}`)
  //       console.log(` type: ${tag.type}`)
  //     }
  //
  //   }))
  // }
  // console.log(data.results)

  // fetch(apiAddress)
  //       .then(resp => resp.json())
  //       .then(data => console.log(data))
  //       .catch(err => {
  //           console.log(err)
  //       });


  return (
    <div className="App">
      <Main searchPhotos={searchPhotos}/>
    </div>
  );
}

export default App;
