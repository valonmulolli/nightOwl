import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

type Props = {}

const BackDrop = (props: Props) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}/>
    </TouchableWithoutFeedback>
  )
}

export default BackDrop

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    opacity: 0.5,
  }
})