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
  style={[styles.input, { color: name === '' ? 'red' : 'black' }]}
  value={name}
  onChangeText={setName}
  placeholder="Peringatan: Seluruh data wajib diisi"
/>

<Text style={styles.label}>NIM</Text>
<TextInput
  style={styles.input}
  value={nim}
  onChangeText={setNim}
  placeholder="Masukkan NIM"
/>
 <Pressable style={[styles.buttonReset, styles.input]}
   onPress={() => {
    setName("");
    setNim("");
   }}
   >
    <Text style={styles.buttonText}>kosongkan formulir</Text>
 </Pressable>




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
    color:"black",
  },
  buttonReset:{
    backgroundColor: 'red', 
  },
  buttonText:{
 color:"#ffffff",
 fontWeight: "bold",
 fontSize: 14,
  },
  warningText: {
   color: "red",
  },
})