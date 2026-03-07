import React, { useState } from 'react'
import MainGamePage from './MainGamePage'
import OptionsPage from './OptionsPage.js'
import AnnotatedCard from './AnnotatedCards.js'

import { GameContextProvider } from './GameContext.js'
import AnnotatedContext from './AnnotatedContext.js'
import { StyleSheet, View } from 'react-native'

const annotatedBackGroundColor = 'rgba(21, 14, 35, 0.99)'
const themeInit = {
  primaryColor: 'purple',
  secondaryColor: '#19af59',
  annotatedBackGroundColor: annotatedBackGroundColor,
}
const secondaryTheme = {
  primaryColor: '#13482aff',
  secondaryColor: 'purple',
  annotatedBackGroundColor: annotatedBackGroundColor,
}

let themeBool = true

export default function GameRoute(dimensions) {
  const [annotatedCard, setAnnotatedCard] = useState()
  const [showOptions, setShowOptions] = useState(false)
  const [annotatedCardDisplay, setAnnotatedCardDisplay] = useState(false)
  const [animationsOn, setAnimationsOn] = useState(true)
  const [isRandom, setIsRandom] = useState(false)

  function handleAnnotatedClick(inpt) {
    annotatedCard ? setAnnotatedCard(null) : setAnnotatedCard(inpt)
  }

  function setAnnotatedMode() {
    annotatedCard ? setAnnotatedCard(null) : ''
    setAnnotatedCardDisplay((x) => !x)
  }

  function setAnimations() {
    setAnimationsOn((x) => (x = !x))
  }
  function randomQuestionsSetter() {
    setIsRandom((x) => (x = !x))
  }

  function showOptionsSetter() {
    annotatedCardDisplay ? setAnnotatedCardDisplay(false) : ''
    setShowOptions((x) => (x = !x))
  }



  return (
    <AnnotatedContext.Provider
      value={{
        annotatedCard,
        annotated: annotatedCardDisplay,
        setAnnotatedCard: handleAnnotatedClick,
        setAnnotatedMode,
        annotatedBackGroundColor: annotatedBackGroundColor,
      }}
    >
      <GameContextProvider>
        {annotatedCard ? (
          <View style={styles.annotated}>
            <AnnotatedCard />
          </View>
        ) : (
          <>
            {/* <DronePlayerMode /> */}
            <MainGamePage
              isRandomAllQuestionTypes={isRandom}
              isAnimated={animationsOn}
              setShowOptions={showOptionsSetter}
              showOptions={showOptions}
     
            />

            {showOptions && (
              <View style={styles.options}>
                <OptionsPage
                  height={height}
                  changeTheme={changeTheme}
                  randomQuestionsSetter={randomQuestionsSetter}
                  setAnimations={setAnimations}
                  isAnimated={animationsOn}
                  setShowOptions={showOptionsSetter}
                  theme={theme}
                  buttonTheme={randomMagusModeButton}
                />
              </View>
            )}
          </>
        )}
      </GameContextProvider>
    </AnnotatedContext.Provider>
  )
}

const styles = StyleSheet.create({
  options: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',

    zIndex: 10,
  },
  optionText: {
    color: 'purple',
    margin: 5,
  },
  button: {
    //for icon cards
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19af59', //#003399

    // borderWidth: 1,
    // borderColor: 'white',
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    // borderBottomWidth: 0,
    //
    // shadowColor: 'black',
    // shadowOffset: { width: 2, height: 1.5 },
    // shadowOpacity: 1,
    // shadowRadius: 5,
    // Android Elevation
    elevation: 5,
  },
  annotated: {
    justifyContent: 'center',
    alignItems: 'center',

    height: '100%',
    width: '100%',
  },
})
