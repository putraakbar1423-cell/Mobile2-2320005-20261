import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#072deb",
          tabBarInactiveTintColor: "#94a3b8",
          tabBarStyle: {
            backgroundColor: "#f8fafc",
            borderTopWidth: 0,
            borderTopColor: "transparent",
            elevation: 0,
            shadowOpacity: 0,
            height: 60,
            paddingBottom: 5,
            paddingTop: 5,
            },

            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#f8fafc",
              borderBottomWidth: 0,
            },
            headerTintColor: "#ffffff",
            headerTitleAlign: "center",
          }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Beranda",
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "home" : "home-outline"} color={color} size={22} />,
        }}
      />
      <Tabs.Screen
        name="mahasiswa"
        options={{
          title: "Mahasiswa",
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "people" : "people-outline"} color={color} size={22} />,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "Profil",
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "person" : "person-outline"} color={color} size={22} />,
        }}
      />

      <Tabs.Screen
        name="pengaturan"
        options={{
          title: "Pengaturan",
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "settings" : "settings-outline"} color={color} size={22} />,
        }}
      />
    </Tabs>
  );
}