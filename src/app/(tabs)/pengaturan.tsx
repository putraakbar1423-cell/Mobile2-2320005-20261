import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function pengaturan() {
  return (
    <View>
      <Text style={styles.title}>pengaturan</Text>
      <Text style={styles.subtitle}>Ini adalah halaman pengaturan</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 16, 
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    margin: 8,
  },
})


