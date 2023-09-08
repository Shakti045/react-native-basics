import { StyleSheet, Text, View ,SafeAreaView,ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { MainContent } from './components/MainContent'

export default function App() {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <StatusBar backgroundColor={"red"}/>
        <Text style={styles.appname}>PASSWORD GENERATOR</Text>
        <MainContent/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body:{
    height:'100%',
    width:'100%',
    backgroundColor:'black',
    padding:10
  },
  appname:{
    color:'white',
    fontSize:25,
    fontWeight:'900'
  }
})