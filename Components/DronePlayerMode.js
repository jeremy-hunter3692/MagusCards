import React, { useState, useMemo } from 'react'
import { View, Text, Image } from 'react-native'
import DisplayInputCardsGrid from './DisplayInputCardsGrid'
import { keys } from '../data/KeyCards'
import DronePlayer from './DronePlayer'
import { useGameContext, useUpdateGameContext } from './GameContext.js'
import CardButton from './CardButton.js'

const DronePlayerMode = () => {
  const [dronePlaying, setDronePlaying] = useState(false)
  const [currentKey, setCurrentKey] = useState(keys[0])
  const currentKeySize = 1
  const { droneAudioSrc } = useGameContext()
  // setCurrentKey(
  const getImageFromAudio = (audioSrc) => {
    return keys.find((key) => key.audioSrc === audioSrc) || keys[0]
  }
  const image = useMemo(() => getImageFromAudio(droneAudioSrc), [droneAudioSrc])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Image source={image} /> */}
      <CardButton
        imgSource={image.imgSrc}
        autoPlay={false}
        onPressPropFunction={() => console.log('click DronePlayerMode KeyCArd')}
        data={{ value: image }}
        key={`droneKey${image.name}`}
        animationDelay={0}
        reDeal={false}
        animated={false}
        alterationSizing={currentKeySize}
      />
      <Text style={{ fontSize: 24, color: 'white' }}>Practise Mode: Drone</Text>
      <DronePlayer
        style={{ flex: 0, height: 0, width: 0, margin: 0, padding: 0 }}
      />
      <DisplayInputCardsGrid
        optionalCardsArray={keys}
        practiseDroneMode={true}
      />
    </View>
  )
}

export default DronePlayerMode
