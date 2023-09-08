import TrackPlayer , {Event, RepeatMode} from 'react-native-track-player';
import { tracks } from './src/constant';

export async function playbackservice(){
    TrackPlayer.addEventListener(Event.RemotePause,()=>{
        TrackPlayer.pause();
    })

    TrackPlayer.addEventListener(Event.RemotePlay,()=>{
        TrackPlayer.play();
    })

    TrackPlayer.addEventListener(Event.RemoteNext,()=>{
        TrackPlayer.skipToNext();
    })

    TrackPlayer.addEventListener(Event.RemotePrevious,()=>{
        TrackPlayer.skipToPrevious()
    })
}

export async function setup(){
    let isSetup=false;
    try {
        await TrackPlayer.getCurrentTrack();
        isSetup=true;
    } catch (err) {
      await TrackPlayer.setupPlayer();
      isSetup=true;  
    }finally{
        return isSetup;
    }
}

export async function addtracks(){
    await TrackPlayer.add(tracks);
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}