
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Text,
} from 'react-native';

type Mahasiswa = {
  id: string;
  nama: string;
  nim: string;
  prodi: string;
};

const dataMahasiswa: Mahasiswa[] = [
  { id: '1', nama: 'Putra', nim: '2320005', prodi: 'Teknik Komputer' },
  { id: '2', nama: 'Ulaa', nim: '2320004', prodi: 'Sistem Informasi' },
];

export default function BelajarFlatlist() {
  const [nim, setNim] = useState('');
  const [nama, setNama] = useState('');
  const [prodi, setProdi] = useState('');
  const [daftarmahasiswa, setDaftarMahasiswa] =
    useState<Mahasiswa[]>(dataMahasiswa);

  const simpanData = () => {
    if (nim.trim() && nama.trim() && prodi.trim()) {
      const newMahasiswa: Mahasiswa = {
        id: Date.now().toString(),
        nim: nim.trim(),
        nama: nama.trim(),
        prodi: prodi.trim(),
      };

      setDaftarMahasiswa([...daftarmahasiswa, newMahasiswa]);

      setNim('');
      setNama('');
      setProdi('');
    }
  };

  const renderCardMahasiswa = ({
    item,
  }: {
    item: Mahasiswa;
  }) => (
    <View style={styles.cardItem}>
      <Text style={styles.cardBadgeText}>{item.nim}</Text>

      <View style={styles.cardBody}>
        <Text style={styles.cardNama}>Nama: {item.nama}</Text>
        <Text style={styles.cardProdi}>
          Program studi: {item.prodi}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="NIM"
          value={nim}
          onChangeText={setNim}
        />

        <TextInput
          style={styles.input}
          placeholder="Nama"
          value={nama}
          onChangeText={setNama}
        />

        <TextInput
          style={styles.input}
          placeholder="Program Studi"
          value={prodi}
          onChangeText={setProdi}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={simpanData}
        >
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={daftarmahasiswa}
        renderItem={renderCardMahasiswa}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 16,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  cardItem: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    elevation: 2,
  },
  cardBadgeText: {
    backgroundColor: '#DBEAFE',
    color: '#1D4ED8',
    padding: 10,
    borderRadius: 8,
    fontWeight: 'bold',
  },
  cardBody: {
    flex: 1,
  },
  cardNama: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  cardProdi: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
});
