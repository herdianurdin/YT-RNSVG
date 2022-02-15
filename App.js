import React from 'react'
import { StyleSheet, View } from 'react-native'
import Idea from './idea.svg'

const App = () => {
  return (
    <View style={styles.container}>
      <Idea width={300} height={200} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
