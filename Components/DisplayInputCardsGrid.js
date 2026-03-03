import { useContext, useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import { useUpdateGameContext, useGameContext } from './GameContext.js'
import AnnotatedContext from './AnnotatedContext.js'

import CardButton from './CardButton.js'

const DisplayInputCardsGrid = ({
  reDeal,
  isAnimated,
  practiseDroneMode,
  optionalCardsArray,
}) => {
  const { displayInputCardArray: cardsArray, choosingKey } = useGameContext()

  const {
    userInputCardPress,
    getAudioSrcIdxFromCardReducer,
    getAndSetDroneAudioSource,
  } = useUpdateGameContext()

  const { annotated } = useContext(AnnotatedContext)

  const [inputCardsDisplay, setInputCardsDisplay] = useState(
    optionalCardsArray && practiseDroneMode ? optionalCardsArray : cardsArray,
  )

  const renderCount = useRef(0)
  renderCount.current += 1

  //////////////////////////////

  let alterationSizing = choosingKey ? 1 : annotated ? 0.3 : 1

  function setAnswer(inpt) {
    //Check is just for extra backup?
    if (annotated) {
      return
    }
    userInputCardPress(inpt)
    let audioSrc = getAudioSrcIdxFromCardReducer(inpt)
    return audioSrc
  }
  function setPractiseDrone(inpt) {
    console.log('set', inpt)
    getAndSetDroneAudioSource(inpt.value)
  }
  function handleClick(inpt) {
    practiseDroneMode ? setPractiseDrone(inpt) : setAnswer(inpt)
  }

  const dealAnimationDelay = 5
  const firstHalfArray = inputCardsDisplay?.slice(
    0,
    inputCardsDisplay.length / 2,
  )
  const secondHalfArray = inputCardsDisplay?.slice(
    inputCardsDisplay.length / 2,
    inputCardsDisplay.length,
  )

  return (
    <>
      <View style={styles.imgContTop}>
        {firstHalfArray?.map((x, index) => {
          return (
            <CardButton
              onPressPropFunction={handleClick}
              data={{ value: x }}
              imgSource={x.imgSrc}
              key={`input${x.name}`}
              animationDelay={index}
              reDeal={reDeal}
              animated={isAnimated}
              alterationSizing={alterationSizing}
            />
          )
        })}
      </View>
      <View style={styles.imgContBottom}>
        {secondHalfArray?.map((x, index) => {
          return (
            <CardButton
              onPressPropFunction={handleClick}
              data={{ value: x }}
              imgSource={x.imgSrc}
              key={`input${x.name}`}
              animationDelay={index + dealAnimationDelay}
              reDeal={reDeal}
              animated={isAnimated}
              alterationSizing={alterationSizing}
            />
          )
        })}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  imgContTop: {
    flexDirection: 'row',
    marginTop: 0,
    padding: 0,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  imgContBottom: {
    flexDirection: 'row',
    marginTop: 0,
    padding: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
})
export default DisplayInputCardsGrid
