import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomSheet from '../components/BottomSheet';

type Props = {}

const Setting = (props: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {
      paddingTop: insets.top
    },]}>
      <Button />
      <BottomSheet/>
    </View >
  )
}

export default Setting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
