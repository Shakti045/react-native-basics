import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react'

type itemprops=PropsWithChildren<{
    flag:string,
    name:string
}>
export default function CurrencyButton({flag,name}:itemprops) {
  return (
    <View style={styles.buttoncontainer}>
      <Text>{flag}</Text>
      <Text style={{color:'black',marginTop:10}}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    buttoncontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})