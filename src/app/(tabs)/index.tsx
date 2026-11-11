import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman beranda</Text>
      <Text style={styles.subtitle}>Selamat datang di aplikasi portal Mahasiswa</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
})