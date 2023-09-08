import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import { TouchableOpacity } from 'react-native';

const MusicControl=()=>{
    const playbackstate=usePlaybackState();

    const playnext=async()=>{
        await TrackPlayer.skipToNext();
    }
    const playprevious=async()=>{
        await TrackPlayer.skipToPrevious();
    }
    const handleplaypause=async(playbackstate:State)=>{
       const currentTrack=await TrackPlayer.getCurrentTrack();
       if(currentTrack!==null){
         if(playbackstate===State.Paused || playbackstate===State.Ready){
            await TrackPlayer.play()
         }else{
            await TrackPlayer.pause();
           }
       }
    }
    return (
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
         <TouchableOpacity onPress={playprevious}>
            <View><Icon name='skip-previous'  size={40}/></View>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>handleplaypause(playbackstate)}>
            <View><Icon size={80} name={playbackstate===State.Playing?'pause':'play-arrow'}/></View>
         </TouchableOpacity>
         <TouchableOpacity onPress={playnext}>
            <View><Icon name='skip-next'  size={40}/></View>
         </TouchableOpacity>
        </View>
    )
}

export default MusicControl;