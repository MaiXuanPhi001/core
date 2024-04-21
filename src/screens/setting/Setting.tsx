import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Setting = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Setting</Text>
      <Button
        title='Detail'
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  )
}

export default Setting