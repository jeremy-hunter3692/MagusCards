import React, { useState } from 'react'

import { Pressable, Image, View, Text } from 'react-native'

const imgSource = require('../assets/blankcard.png')

const SplashMockUp = ({
  cardSize,
  width,
  height,
  animationTime,
  splashAnimationOff,
}) => {
  let w = width / 4
  let h = height / 4

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent: 'space-evenly',
      }}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',

          height: w,
          width: h,
        }}
      >
        <Image
          source={imgSource}
          testID={`image`}
          style={{
            height: h * 1.4,
            width: w * 1.4,
            resizeMode: 'contain',
          }}
        />
      </View>
      <View
        style={{
          height: 100,
          width: 100,
          borderRadius: 50,
          backgroundColor: 'lightgray',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          borderWidth: 3,
          borderColor: 'white',
        }}
      >
        <Text style={{ color: 'purple', fontSize: 28 }}>?</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: 'white',
          height: w / 1.5,
          width: h * 0.9,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: 'purple', fontSize: 10 }}>Credits</Text>
      </View>
      <View
        style={{
          height: 100,
          width: 100,
          borderRadius: 50,
          backgroundColor: 'purple',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          borderWidth: 3,
          borderColor: 'green',
        }}
      >
        <Text style={{ color: 'purple', fontSize: 10 }}>Explore</Text>
      </View>
    </View>
  )
}

export default SplashMockUp
