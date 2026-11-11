
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";

import { useMahasiswa } from "../../../context/mahasiswacontext";

export default function InputMahasiswaScreen() {
  const { tambahMahasiswa } = useMahasiswa();

  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [prodi, setProdi] = useState("");
  
  // State untuk pilihan status mahasiswa
  const [status, setStatus] = useState<"aktif" | "cuti">("aktif");

  const handleSimpan = () => {
    if (!nim.trim() || !nama.trim()) {
      Alert.alert(
        "Validasi Gagal",
        "NIM dan Nama Lengkap mahasiswa wajib diisi!"
      );
      return;
    }

    // Simpan data ke Context
    tambahMahasiswa({
      nim: nim.trim(),
      nama: nama.trim(),
      prodi: prodi.trim() || "Teknik Informatika",
      status: status,
    });

    Alert.alert(
      "Sukses Tersimpan!",
      `Mahasiswa ${nama} (${nim}) berhasil didaftarkan dengan status ${status.toUpperCase()}.`
    );

    // Reset formulir
    setNim("");
    setNama("");
    setProdi("");
    setStatus("aktif");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>
        Formulir Pendaftaran Mahasiswa
      </Text>

      <Text style={styles.subtitle}>
        Data yang diinputkan di sini akan langsung tampil otomatis
        di tab Data dan Report!
      </Text>

      {/* Input NIM */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>
          Nomor Induk Mahasiswa (NIM)
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Contoh: 230101006"
          placeholderTextColor="#94a3b8"
          value={nim}
          onChangeText={setNim}
          keyboardType="numeric"
        />
      </View>

      {/* Input Nama */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>
          Nama Lengkap Mahasiswa
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Contoh: Muhammad Rizki"
          placeholderTextColor="#94a3b8"
          value={nama}
          onChangeText={setNama}
        />
      </View>

      {/* Input Prodi */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>
          Program Studi
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Contoh: Teknik Informatika"
          placeholderTextColor="#94a3b8"
          value={prodi}
          onChangeText={setProdi}
        />
      </View>

      {/* Pilihan Status Mahasiswa */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>
          Status Mahasiswa
        </Text>

        <View style={styles.statusContainer}>
          {/* Status Aktif */}
          <TouchableOpacity
            style={[
              styles.statusOption,
              status === "aktif" && styles.statusSelected,
            ]}
            onPress={() => setStatus("aktif")}
            activeOpacity={0.8}
          >
            <View style={styles.radioOuter}>
              {status === "aktif" && (
                <View style={styles.radioInner} />
              )}
            </View>

            <Text
              style={[
                styles.statusText,
                status === "aktif" && styles.statusTextSelected,
              ]}
            >
              Aktif
            </Text>
          </TouchableOpacity>

          {/* Status Cuti */}
          <TouchableOpacity
            style={[
              styles.statusOption,
              status === "cuti" && styles.statusSelected,
            ]}
            onPress={() => setStatus("cuti")}
            activeOpacity={0.8}
          >
            <View style={styles.radioOuter}>
              {status === "cuti" && (
                <View style={styles.radioInner} />
              )}
            </View>

            <Text
              style={[
                styles.statusText,
                status === "cuti" && styles.statusTextSelected,
              ]}
            >
              Cuti
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tombol Simpan */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSimpan}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>
          Simpan Data Mahasiswa
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },

  content: {
    padding: 18,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
  },

  subtitle: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 4,
    marginBottom: 18,
  },

  formGroup: {
    marginBottom: 14,
  },

  label: {
    fontSize: 12.5,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 6,
  },

  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 13,
    color: "#0f172a",
  },

  statusContainer: {
    flexDirection: "row",
    gap: 12,
  },

  statusOption: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    padding: 12,
  },

  statusSelected: {
    borderColor: "#072deb",
    backgroundColor: "#eff6ff",
  },

  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#94a3b8",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  radioInner: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#072deb",
  },

  statusText: {
    fontSize: 13,
    color: "#64748b",
  },

  statusTextSelected: {
    color: "#072deb",
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#072deb",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 13.5,
    fontWeight: "bold",
  },
});
