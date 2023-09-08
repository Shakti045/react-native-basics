import { StyleSheet, Text, View , FlatList, Pressable } from 'react-native'
import React from 'react'
import { PRODUCTS_LIST } from '../data/products'
import ProductCard from '../components/ProductCard'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackPramList } from '../App'
import Separator from '../components/Separator'
type Productprops=NativeStackScreenProps<RootStackPramList,'Home'>
const Home = ({navigation}:Productprops) => {
  return (
    <View style={{marginTop:15}}>
      <FlatList 
      data={PRODUCTS_LIST}
      keyExtractor={(item)=>item.id.toString()}
      renderItem={({item})=>(
        <Pressable onPress={()=>navigation.navigate('Product',{Product:item})}>
            <ProductCard product={item}/>
        </Pressable>
      )}
      ItemSeparatorComponent={Separator}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})