import React from 'react'
import { View, Text } from 'react-native'
import DisplayInputCardsGrid from './DisplayInputCardsGrid'
import { keys } from '../data/KeyCards'

const DronePlayerMode = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, color: 'white' }}>Drone Player Mode</Text>
      <DisplayInputCardsGrid optionalCardsArray={keys} />
    </View>
  )
}

export default DronePlayerMode
