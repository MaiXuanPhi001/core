import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Hello = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Hello</Text>
      <Button 
        title='AuthNavigator'
        onPress={() => {
         navigation.navigate('AuthNavigator') 
        }}
      />
    </View>
  )
}

export default Hello