import React from 'react'
import { View, Text } from 'react-native'
import DisplayInputCardsGrid from './DisplayInputCardsGrid'
import KeyCards from './KeyCards'

const DronePlayerMode = () => {
  return <DisplayInputCardsGrid optionalCardsArray={KeyCards} />
}

export default DronePlayerMode
