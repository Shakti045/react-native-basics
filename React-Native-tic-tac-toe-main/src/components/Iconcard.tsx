import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { PropsWithChildren } from 'react'
type iconprops=PropsWithChildren<{
    name:string
}>
const Iconcard = ({name} : iconprops) => {
  switch (name) {
    case 'circle':
        return <Icon name="circle-thin" size={38} color="#F7CD2E" />
    case 'cross':
        return <Icon name="times" size={38} color="#38CC77" />
    default:
      return <Icon name="pencil" size={38} color="gray" />
  }
}


export default Iconcard;

