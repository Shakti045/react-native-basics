import { View, Text, Image,Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { PropsWithChildren } from 'react'
type Infoprops=PropsWithChildren<{
  artwork:any,
  artist:any,
  album:any,
  title:any
}>
const MusicInfo = ({artwork,artist,album,title}:Infoprops):JSX.Element => {
  const {width,height}=Dimensions.get('window')
    return (
      <View>
       {
        artwork && (
         <>
       <Text>{artist}</Text>
       <Text>{album}</Text>
       <Text>{title}</Text>
        <Image source={{
        uri:artwork
       }} height={300} width={width-20}/>
       
          </>
        )
       }
      </View>
    )
}

export default MusicInfo