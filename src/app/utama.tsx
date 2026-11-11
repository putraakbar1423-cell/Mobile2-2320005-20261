import { Link } from "expo-router"
import { StyleSheet, View, Text } from "react-native";
export default function Index() {
  return (
    <View style={style.container}>
      {/*<Text style={{ color: "blue", fontSize: 20 }}>Hello, World!</Text> */}
      <View style={[style.kotak, style.boxRed]}>
        <Link href="/tt1" style={style.navButton}>tantangan 1</Link>
      </View>
      <View style={[style.kotak, style.boxGreen]}>
        <Link href="/tt2" style={style.navButton}>tantangan 2</Link>
      </View>
      <View style={[style.kotak, style.boxBlue]}>
         <Link href="/profil" style={style.navButton}>tantangan 3</Link>
      </View>
        <View style={[style.kotak, style.boxwhite]}>
         <Link href="/belajarflatlist" style={style.navButton}>tantangan 4</Link>
      </View>

    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignContent: "space-between",
    marginHorizontal: 1,
  },
  kotak: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 8,
    fontWeight: "bold",
    overflow: "hidden"
  },
  boxRed: {backgroundColor: "red"},
  boxGreen: {backgroundColor: "green"},
  boxBlue: {backgroundColor: "blue"},
  boxwhite: {backgroundColor: "yellow"},
  text: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  navButton:{

    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 8,
    fontWeight: "bold",
    overflow: "hidden"
  }
});