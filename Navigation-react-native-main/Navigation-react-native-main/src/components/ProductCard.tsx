import { StyleSheet, Text, View , Image } from 'react-native'
import React , {PropsWithChildren} from 'react'

type ProductProps=PropsWithChildren<{
    product:Product
}>
const ProductCard = ({product}:ProductProps):JSX.Element => {
  return (
      <View>
       <View>
        <Image source={{
         uri:product?.imageUrl
        }} height={200} width={200}/>
        </View>
        <View style={{backgroundColor:'blue'}}>
            <Text>{product?.name}</Text>
            <Text>{product?.discountPrice}</Text>
            <Text>{product?.rating}</Text>
        </View>
      </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({})