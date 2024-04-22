import { View, Text } from 'react-native'
import React from 'react'
import Img from '~/atoms/Img'

const Hello = () => {
  return (
    <View>
      <Img 
        source={require('~/assets/images/agribank.png')}
        resizeMode='cover'
        bg='red' mt={20} ml={20}
        w={300} h={50} 
        borderTopLeftRadius={20}
      />
    </View>
  )
}

export default Hello