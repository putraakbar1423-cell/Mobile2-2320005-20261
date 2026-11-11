import { Link } from "expo-router"
import {StyleSheet, View, Text, Image} from 'react-native'   

export default function profil() {
  return (
    <View style={[style.container, ]}>
      <Text style={style.title}>Halaman Profil mahasiswa</Text>
      <Image source={require('../../assets/images/4.jpeg')}
       style={style.boxImage}
       resizeMode="contain"
       />

      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Nama: Putra</Text>
      <Text style={{fontSize: 16, marginTop: 10}}>NIM: 123456789</Text>
      <Text style={{fontSize: 16, marginTop: 10}}>Jurusan: Teknik Informatika</Text>
      <Text style={{fontSize: 16, marginTop: 10}}>Fakultas: Ilmu Komputer</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
    borderRadius: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f172a"
  },
  boxImage: {
    width: 200,
    height: 200,
    borderRadius: 40,
    marginTop: 20,
  },
});