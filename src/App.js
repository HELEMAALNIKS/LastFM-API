import React, {useEffect, useState, Component} from 'react';
import List from "./components/List";
import './App.css';

const App = () => {

  const API_KEY = "d732731be2f5f0ec4b10e5a3607d7090";
  const ARTIST = "muse"


  const [music, setMusic] = useState([]);

  useEffect( () => {
    getMusic();
  }, []);

  const getMusic = async () => {
    const data = await (await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${ARTIST}&api_key=${API_KEY}&format=json`)).json()
    console.log(data);
    console.log(data.topalbums.album);
    
    
    let i = 0;
    let albumDetails = []
    for (i = 0; i < data.topalbums.album.length; i++) {
      let ALBUM = data.topalbums.album[i].name;
      const data2 = await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${API_KEY}&artist=${ARTIST}&album=${ALBUM}&format=json`)
      albumDetails.push(await data2.json())
      // console.log(albumdetails)
    }

    // Remove albums without wiki details
    albumDetails = albumDetails.filter(albumDetail => {
      if (albumDetail.album?.wiki) {
        return true
      } else {
        return false
      }
    })

    console.log(albumDetails)
    
    setMusic(albumDetails);

  };

  return(
    <div className="App">
      <List albumdetails={music}/>
    </div>
  );
};

// 

export default App;
