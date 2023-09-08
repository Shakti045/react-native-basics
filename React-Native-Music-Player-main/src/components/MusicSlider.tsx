import React from 'react'
import { View, Text } from 'react-native'
import  Slider from '@react-native-community/slider'
import { useProgress } from 'react-native-track-player'

const MusicSlider = () => {
    const {position,duration}=useProgress();
    // console.log(duration);
    // console.log(new Date(duration*1000).toISOString())
  return (
    <View>
       <View style={{marginTop:15}}>
         <Slider
         minimumValue={0}
         value={position}
         maximumValue={duration}
         minimumTrackTintColor="red"
         maximumTrackTintColor="white"
         thumbTintColor='blue'
         />
       </View>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <View>
            <Text>
            {new Date(position*1000).toISOString().substring(14, 19)}
            </Text>
         </View>
         <View>
            <Text>
            {new Date((duration-position)*1000).toISOString().substring(14, 19)}
            </Text>
         </View>
       </View>
    </View>
  )
}

export default MusicSlider;