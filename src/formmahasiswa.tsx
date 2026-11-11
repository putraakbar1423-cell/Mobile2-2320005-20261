import  React, {useState} from 'react';
import {StyleSheet, TextInput, Pressable, View, Text} from 'react-native';

export default function formmahasiswa() {
  const [name, setName] = useState('');
  const [nim, setNim] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Mahasiswa</Text>
      
      <Text style={styles.label}>nama lengkap</Text>
<TextInput
  style={styles.input}
  value={name}
  onChangeText={setName}
  placeholder="Masukkan nama lengkap"
/>

<Text style={styles.label}>NIM</Text>
<TextInput
  style={styles.input}
  value={nim}
  onChangeText={setNim}
  placeholder="Masukkan NIM"
/>
    </View>
    
  )
}



const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
})