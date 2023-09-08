import React,{useState,useEffect} from "react";
import { View ,SafeAreaView ,StatusBar, Text, ActivityIndicator } from "react-native";
import { setup ,addtracks } from "../musicservice";
import MusicSlider from "./components/MusicSlider";
import MusicControl from "./components/MusicControl";
import MusicInfo from "./components/MusicInfo";
import TrackPlayer, { Track, useTrackPlayerEvents,Event } from "react-native-track-player";
const App=():JSX.Element=>{
  const [isPlayearReady,setIsPlayerReady]=useState<boolean>(false);
  const [currentTrack,setcurrentTrack]=useState<Track | null>();
  const setupmusicplayer=async ()=>{
    const isSetup=await setup();
    if(isSetup){
      await addtracks();
    }
    setIsPlayerReady(isSetup);
  }
  
  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    switch (event.type) {
        case Event.PlaybackTrackChanged:
            const playingTrack = await TrackPlayer.getTrack(event.nextTrack)
            setcurrentTrack(playingTrack)
            break;
    }
})

  useEffect(()=>{
     setupmusicplayer();
  },[])

  if(!isPlayearReady){
    return (
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView>
      <StatusBar barStyle='light-content'/>
      <View style={{backgroundColor:'black', height:'100%',padding:10,flexDirection:'column',justifyContent:'center'}}>
        <MusicInfo artist={currentTrack?.artist} album={currentTrack?.album}
         title={currentTrack?.title} artwork={currentTrack?.artwork}
        />
         <MusicSlider/>
        <MusicControl/>
      </View>
    </SafeAreaView>
  )
}

export default App;