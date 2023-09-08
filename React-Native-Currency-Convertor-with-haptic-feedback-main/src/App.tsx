import { View, Text, SafeAreaView, StyleSheet, FlatList, Pressable, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { currencyByRupee } from './constants'
import CurrencyButton from './components/CurrencyButtons'
import Snackbar from 'react-native-snackbar'
import  ReactNativeHapticFeedback from 'react-native-haptic-feedback'

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const App = () => {
  const [activebutton,setactivebutton]=useState<Currency | null>();
  const [inputvalue,setinputvalue]=useState<number | null>();
  return (
     <SafeAreaView style={styles.body}>
        
        <Text style={{color:'white',fontSize:25,fontWeight:'900'}}>Currency Converter</Text>
     
        <View style={styles.maincontainer}>
          <View>
             <Text style={{color:'white'}}>Enter Indian Currency</Text>
             <TextInput onChangeText={(text)=>{
              ReactNativeHapticFeedback.trigger("impactHeavy", options);
               if(!text){
                setactivebutton(null)
                setinputvalue(null);
               }else{
                setinputvalue(+text);
               }
          
             }} keyboardType='numeric' style={styles.input}></TextInput>
          </View>
          <View>
            {
              activebutton && inputvalue && (
                <Text style={{color:'white',fontSize:23,fontWeight:'900',marginTop:15}}>
                   Currency in {activebutton?.name} is {activebutton?.symbol}{activebutton?.value*inputvalue}
                </Text>
              )
            }
          </View>
          <View style={styles.buttoncontainer}>
           <FlatList
          numColumns={3}
          data={currencyByRupee}
          keyExtractor={(item)=>item.name}
          renderItem={({item})=>(
          <Pressable onPress={()=>{
            ReactNativeHapticFeedback.trigger("impactHeavy", options);
            if(inputvalue){
              setactivebutton(item)
            }else{
             Snackbar.show({
              text:"Please enter indian currency",
              textColor:'green',
              duration:Snackbar.LENGTH_SHORT
            })
            }
          }} style={[styles.touchbutton,
            activebutton?.name===item?.name && {backgroundColor:'gray'}
          ]}>
            <CurrencyButton {...item}/>
          </Pressable >
        )}/>
        </View>
        </View>

     </SafeAreaView>
  )
}


export default App;

const styles=StyleSheet.create({
  body:{
    height:'100%',
    width:'100%',
    backgroundColor:'black',
    padding:10,
  },
  maincontainer:{
    width:'100%',
    flex:1,
    justifyContent:'center',
  },

  buttoncontainer:{
      marginHorizontal:10,
      marginTop:15
  },

  touchbutton:{
        width:110,
        backgroundColor:'white',
        margin:3,
        padding:7,
        borderRadius:7
  },

  input:{
    borderBottomColor:'blue',
    borderBottomWidth:2,
    color:'white',
    fontSize:25
  }

})