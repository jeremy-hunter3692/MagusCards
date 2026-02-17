import React, { useState } from 'react'

import { Pressable, Image, View, Text, StyleSheet } from 'react-native'

const imgSource = require('../assets/blankcard.png')

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // borderColor: 'white',
    // borderWidth: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  text: { color: 'white', fontSize: 15 },
  textcont: { alignItems: 'center' },

  bigtextcont: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50,
    paddingTop: 5,
  },
})

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
        justifyContent: 'space-around',

        padding: 50,
        paddingTop: 85,
        paddingBottom: 4,
        backgroundColor: 'black',
      }}
    >
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          backgroundColor: 'black',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <View style={styles.container}>
          <Image
            source={imgSource}
            testID={`image`}
            style={{
              height: w,
              width: h,
              resizeMode: 'contain',
              margin: 0,
              padding: 0,
            }}
          />
        </View>
        <View style={styles.container}>
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
          ></View>
        </View>

        <View style={styles.container}>
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
            <Text style={{ color: 'purple', fontSize: 10 }}></Text>
          </View>
        </View>
        <View style={styles.container}>
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
        </View>
      </View>
      <View style={styles.bigtextcont}>
        <View style={styles.textcont}>
          <Text style={styles.text}>Practice</Text>
        </View>
        <View style={styles.textcont}>
          <Text style={styles.text}>Game</Text>
        </View>
        <View style={styles.textcont}>
          <Text style={styles.text}>Explore</Text>
        </View>
        <View style={styles.textcont}>
          <Text style={styles.text}>Tutorial</Text>
        </View>
      </View>
    </View>
  )
}

export default SplashMockUp
