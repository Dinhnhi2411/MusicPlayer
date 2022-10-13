
import React, { useState } from "react";
import Track1 from "../mp3/track_1.mp3";
import Track2 from "../mp3/track_2.mp3";
import Track4 from "../mp3/track_4.mp3";
import Track5 from "../mp3/track_5.mp3";
import Track6 from "../mp3/track_6.mp3";
import Track7 from "../mp3/track_7.mp3"


const MusicPlayerContext = React.createContext();


const defaultValues = {
    audioPlayer: new Audio(),
    tracks: [
      {
        name:"If You - BigBang",
        file:Track1,
      },
      {
        name:"Haru Haru - BigBang",
        file:Track2,
      },
      {
        name:"Phản Bội Chính Mình - Anh Quân AP",
        file:Track4,
      },
      {
        name: "Waiting For You - Mono",
        file: Track5,
      },
      {
        name: "Em Là - Mono",
        file: Track6,
      },
      {
        name: "Sober - BigBang",
        file: Track7,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  }


const MusicPlayerProvider = ({children}) =>{
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{state, setState}}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };