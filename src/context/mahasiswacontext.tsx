
import React, { createContext, useContext, useState } from "react";
import { Alert } from "react-native";

export interface Mahasiswa {
  id: string;
  nama: string;
  nim: string;
  prodi: string;
  status: "aktif" | "cuti";
}

interface MahasiswaContextType {
  dataMahasiswa: Mahasiswa[];
  tambahMahasiswa: (mhsbaru: Omit<Mahasiswa, "id">) => void;
  hapusMahasiswa: (id: string) => void;
}

const MahasiswaContext = createContext<MahasiswaContextType | undefined>(
  undefined
);

const DATA_AWAL: Mahasiswa[] = [
  { id: "1", nama: "Putra", nim: "2320005", prodi: "Teknik Komputer", status: "aktif" },
  { id: "2", nama: "Ulaa", nim: "2320004", prodi: "Sistem Informasi", status: "aktif" },
  { id: "3", nama: "Cantika", nim: "2320003", prodi: "Teknik Informatika", status: "cuti" },
  { id: "4", nama: "Siti", nim: "2320002", prodi: "Teknik Elektro", status: "aktif" },
  { id: "5", nama: "Agil", nim: "2320001", prodi: "Teknik Mesin", status: "cuti" }
];

export const MahasiswaProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {

  const [dataMahasiswa, setDataMahasiswa] = useState<Mahasiswa[]>(DATA_AWAL);

  const tambahMahasiswa = (mhsbaru: Omit<Mahasiswa, "id">) => {
    const itembaru: Mahasiswa = {
      id: Date.now().toString(),
      ...mhsbaru
    };

    if (dataMahasiswa.some(mhs => mhs.nim === mhsbaru.nim)) {
      Alert.alert("Gagal", "nim sudah terdaftar.");
      return;
    }

    setDataMahasiswa(prevData => [itembaru, ...prevData]);
  };
 
  const hapusMahasiswa = (id: string) => {
    setDataMahasiswa(prevData =>
      prevData.filter(mhs => mhs.id !== id)
    );
  };

 
  return (
    <MahasiswaContext.Provider
      value={{
        dataMahasiswa,
        tambahMahasiswa,
        hapusMahasiswa
      }}
    >
      {children}
    </MahasiswaContext.Provider>
  );
};

export const useMahasiswa = () => {
  const context = useContext(MahasiswaContext);

  if (!context) {
    throw new Error(
      "useMahasiswa must be used within a MahasiswaProvider"
    );
  }

  return context;
};
