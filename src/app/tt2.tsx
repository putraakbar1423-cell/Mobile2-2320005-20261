import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Kalkulator() {
  const [angkaPertama, setAngkaPertama] = useState('');
  const [angkaKedua, setAngkaKedua] = useState('');
  const [hasil, setHasil] = useState<string | number>('-');

  
  const hitung = (operator: string) => {
    const num1 = parseFloat(angkaPertama);
    const num2 = parseFloat(angkaKedua);

    if (isNaN(num1) || isNaN(num2)) {
      setHasil('Masukkan kedua angka terlebih dahulu!');
      return;
    }

    switch (operator) {
      case '+':
        setHasil(num1 + num2);
        break;
      case '-':
        setHasil(num1 - num2);
        break;
      case '×':
        setHasil(num1 * num2);
        break;
      case '÷':
        if (num2 === 0) {
          setHasil('Angka pembagi tidak boleh nol!');
        } else {
          setHasil(num1 / num2);
        }
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplikasi Mini Kalkulator</Text>

      <Text style={styles.label}>Angka Pertama</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Masukkan angka pertama"
        value={angkaPertama}
        onChangeText={setAngkaPertama}
      />

      <Text style={styles.label}>Angka Kedua</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Masukkan angka kedua"
        value={angkaKedua}
        onChangeText={setAngkaKedua}
      />

      <View style={styles.rowTombol}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => hitung('+')}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => hitung('-')}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => hitung('×')}
        >
          <Text style={styles.buttonText}>×</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => hitung('÷')}
        >
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardHasil}>
        <Text style={styles.labelHasil}>Hasil Perhitungan:</Text>
        <Text style={styles.textHasil}>{hasil}</Text>
      </View>
    </View>
  );
}

// Stiling Komponen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    color: '#444',
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  // Flexbox untuk menyusun 4 tombol secara mendatar
  rowTombol: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  button: {
    flex: 1,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  // Wadah / Kartu Hasil
  cardHasil: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    // Efek bayangan (shadow) untuk tampilan kartu
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  labelHasil: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  textHasil: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
  },
});