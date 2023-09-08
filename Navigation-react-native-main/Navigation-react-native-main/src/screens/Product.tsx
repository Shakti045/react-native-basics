import { StyleSheet, Text, View ,Image  ,FlatList ,Button} from 'react-native'
import React from 'react'
import {NativeStackScreenProps,NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackPramList } from '../App'

import {useNavigation} from '@react-navigation/native'

type Productpageprops=NativeStackScreenProps<RootStackPramList,'Product'>
const Product = ({route}:Productpageprops) => {
    const {Product}=route.params

    // if you do not want to get navigation method in props use this usenavigation
    const navigation=useNavigation<NativeStackNavigationProp<RootStackPramList>>();

  return (
    <View>
      <Image source={{
        uri:Product.imageUrl
      }} height={200} width={200}/>
      <View style={{backgroundColor:'red'}}>
      <Text>{Product?.discountPrice}</Text>
      <FlatList
      data={Product?.tags}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={({item})=>(
        <View style={{padding:10,borderWidth:4}}>
            <Text>{item}</Text>
        </View>
      )}
      />
      </View>
      <View >
      <Button title='Go back to main page' onPress={()=>navigation.goBack()}/>
      </View>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})