
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";

import { useMahasiswa } from "../../../context/mahasiswacontext";
import { Ionicons } from "@expo/vector-icons";

export default function DataMahasiswaScreen() {

  const { dataMahasiswa, hapusMahasiswa } = useMahasiswa();

  // State untuk pencarian
  const [search, setSearch] = useState("");

  // Filter data berdasarkan nama mahasiswa
  const filteredMahasiswa = dataMahasiswa.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  // Konfirmasi hapus mahasiswa
  const konfirmasiHapus = (id: string, nama: string) => {
    Alert.alert(
      "Konfirmasi Hapus",
      `Apakah Anda yakin ingin menghapus data ${nama}?`,
      [
        { text: "Batal", style: "cancel" },
        {
          text: "Hapus",
          style: "destructive",
          onPress: () => hapusMahasiswa(id),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>

      {/* Kolom Pencarian dengan Icon */}
      <View style={styles.searchContainer}>

        <Ionicons
          name="search-outline"
          size={22}
          color="#94a3b8"
        />

        <TextInput
          style={styles.searchInput}
          placeholder="Cari nama mahasiswa..."
          placeholderTextColor="#94a3b8"
          value={search}
          onChangeText={setSearch}
        />

        {/* Tombol Hapus Pencarian */}
        {search.length > 0 && (
          <TouchableOpacity onPress={() => setSearch("")}>
            <Ionicons
              name="close-circle"
              size={20}
              color="#94a3b8"
            />
          </TouchableOpacity>
        )}

      </View>

      {/* Daftar Mahasiswa */}
      <FlatList
        data={filteredMahasiswa}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listArea}

        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyText}>
              {search
                ? "Mahasiswa tidak ditemukan."
                : "Belum ada data mahasiswa."}
            </Text>

            <Text style={styles.emptySubText}>
              {search
                ? "Coba periksa kembali nama yang dicari."
                : "Silakan tambahkan data baru melalui tab Input."}
            </Text>
          </View>
        }

        renderItem={({ item }) => (
          <View style={styles.card}>

            {/* Avatar Inisial */}
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {item.nama.charAt(0)}
              </Text>
            </View>

            {/* Informasi Identitas */}
            <View style={styles.infoArea}>
              <Text style={styles.nama}>
                {item.nama}
              </Text>

              <Text style={styles.subText}>
                NIM: {item.nim}
              </Text>

              <Text style={styles.prodiText}>
                {item.prodi}
              </Text>
            </View>

            {/* Badge Status dan Tombol Hapus */}
            <View style={{ alignItems: "flex-end", gap: 6 }}>

              <View
                style={[
                  styles.badge,
                  item.status === "aktif"
                    ? styles.badgeActive
                    : styles.badgeInactive,
                ]}
              >
                <Text
                  style={[
                    styles.badgeText,
                    item.status === "aktif"
                      ? styles.badgeTextActive
                      : styles.badgeTextInactive,
                  ]}
                >
                  {item.status}
                </Text>
              </View>

              <TouchableOpacity
                onPress={() =>
                  konfirmasiHapus(item.id, item.nama)
                }
              >
                <Text style={styles.hapusText}>
                  Hapus
                </Text>
              </TouchableOpacity>

            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },

  // Container pencarian
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 4,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    height: 50,
  },

  // Input pencarian
  searchInput: {
    flex: 1,
    height: "100%",
    fontSize: 14,
    color: "#1e293b",
    marginLeft: 10,
    paddingVertical: 0,
  },

  listArea: {
    padding: 16,
    gap: 12,
    flexGrow: 1,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#eff6ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  avatarText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#072deb",
  },

  infoArea: {
    flex: 1,
  },

  nama: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0f172a",
  },

  subText: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 2,
  },

  prodiText: {
    fontSize: 12,
    color: "#072deb",
    marginTop: 2,
  },

  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },

  badgeActive: {
    backgroundColor: "#dcfce7",
  },

  badgeInactive: {
    backgroundColor: "#fee2e2",
  },

  badgeText: {
    fontSize: 11,
    fontWeight: "bold",
  },

  badgeTextActive: {
    color: "#ffffffff",
  },

  badgeTextInactive: {
    color: "#f1e9e9ff",
  },

  hapusText: {
    fontSize: 11,
    color: "#f2eeeeff",
    fontWeight: "600",
  },

  emptyBox: {
    alignItems: "center",
    marginTop: 40,
  },

  emptyText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#64748b",
  },

  emptySubText: {
    fontSize: 12,
    color: "#94a3b8",
    marginTop: 4,
  },

});
