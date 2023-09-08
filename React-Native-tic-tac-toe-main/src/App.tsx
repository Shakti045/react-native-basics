import { FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Iconcard from './components/Iconcard'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
export default function App() {
  const [gamestate,setgamestate]=useState(new Array(9).fill('empty'))
  const [turn,setTurn]=useState('cross');
  const [winstate,setwinstate]=useState<string | null>();
   const winningpositions:Array<Array<number>>=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
   ]
   function checkgameover(gamestate:string[]){
      for(let i=0;i<winningpositions.length;i++){
        if(gamestate[winningpositions[i][0]]==='empty' || gamestate[winningpositions[i][1]]==='empty' || gamestate[winningpositions[i][2]]==='empty' ){
          return;
        }
      }
      Toast.show({
        type:'success',
        text1:'Game is over'
      })
      return setwinstate('Game is over')
   }

  function checkwinner(gamestate:string[]){
      for(let i=0;i<winningpositions.length;i++){
          if(gamestate[winningpositions[i][0]]!=='empty' && (gamestate[winningpositions[i][0]]===gamestate[winningpositions[i][1]] && gamestate[winningpositions[i][2]]===gamestate[winningpositions[i][0]])){
          setwinstate(`${gamestate[winningpositions[i][0]]} won the game`)
           return  Toast.show({
            type:'success',
            text1:`${gamestate[winningpositions[i][0]]} won the game`
          })
          }
         }
      checkgameover(gamestate);
  }

  function changestate(index:number){
    if(winstate){
      return Toast.show({
        type:'success',
        text1:`${winstate} 👋`,
        text2:'Reset game To play again'
      })
    }
   if(gamestate[index]!=='empty'){
    return Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'It is already marked 👋'
    });
   }
   const newgamestate=[...gamestate];
   newgamestate[index]=turn;
   setgamestate(newgamestate);
   checkwinner(newgamestate);

   setTurn((prev)=>{
     switch(prev){
       case 'cross':
         return 'circle'
       case 'circle':
         return 'cross'
       default :
         return ""    
     }
   })

  }


  return (

     <SafeAreaView style={styles.body} >
     
      <Text style={{fontSize:25,fontWeight:'bold',color:'white'}}>
      TIC TACK TOE GAME
      </Text>
      <View style={{marginTop:10}}>
       {
        winstate?(<Text>{winstate}</Text>):(<Text style={{color:'green',backgroundColor:'white',padding:10,borderRadius:12,fontWeight:'bold'}}>Now turn for {turn}</Text>)
       }
      </View>
      
     
      <View style={{height:300,marginTop:45}}  >
      <FlatList  numColumns={3} keyExtractor={(item,index)=>index.toString()} data={gamestate} renderItem={({item,index})=>(
        <Pressable onPress={()=>changestate(index)}>
          <View style={[{height:100,width:100, borderWidth:1,borderColor:'red',flexDirection:'row',justifyContent:'center',alignItems:'center',
        },[0,1,2].includes(index)&&{borderTopWidth:0},[0,3,6].includes(index)&&{borderLeftWidth:0},[6,7,8].includes(index)&&{borderBottomWidth:0},[2,5,8].includes(index)&&{borderRightWidth:0}]} >
         <Iconcard name={item}/>
         </View>
        </Pressable>
        )}/>
      </View>
      <View>
        {
          winstate && (
            <TouchableOpacity onPress={()=>{
              setgamestate(new Array(9).fill('empty'))
              setwinstate(null);
              setTurn('cross')
            }}>
              <Text style={{color:'white',padding:10,borderRadius:10,backgroundColor:'blue',marginTop:15}}>RESET GAME</Text>
            </TouchableOpacity>
          )
        }
      </View>

        <Toast/>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body:{
    width:'100%',
    backgroundColor:'black',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
})