
import React from 'react';
import { View, Text } from 'react-native';
import { TopTabs } from 'expo-router/js-top-tabs';
import { MahasiswaProvider } from '../../../context/mahasiswacontext';
import { Ionicons } from '@expo/vector-icons';

export default function MahasiswaTopTabsLayout() {
  return (
    <MahasiswaProvider>
      <TopTabs
        screenOptions={{
          tabBarActiveTintColor: '#003aad',
          tabBarInactiveTintColor: '#94a3b8',

          tabBarStyle: {
            backgroundColor: 'white',
            elevation: 2,
          },

          tabBarIndicatorStyle: {
            backgroundColor: '#000d65',
            height: 3,
          },

          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            textTransform: 'none',
          },

          // Icon dibuat menyatu dengan label
          tabBarShowIcon: false,
          tabBarShowLabel: true,

          tabBarItemStyle: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >

        {/* TAB DATA */}
        <TopTabs.Screen
          name="index"
          options={{
           tabBarLabel: ({ color }: { color: string }) => (
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
              }}>
                <Ionicons
                  name="list"
                  size={20}
                  color={color}
                />
                <Text style={{
                  color: color,
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                  Data
                </Text>
              </View>
            ),
          }}
        />

        {/* TAB INPUT */}
        <TopTabs.Screen
          name="input"
          options={{
            tabBarLabel: ({ color }: { color: string }) => (
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
              }}>
                <Ionicons
                  name="add-circle-outline"
                  size={20}
                  color={color}
                />
                <Text style={{
                  color: color,
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                  Input
                </Text>
              </View>
            ),
          }}
        />

        {/* TAB REPORT */}
        <TopTabs.Screen
          name="report"
          options={{
            tabBarLabel: ({ color }: { color: string }) => (
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
              }}>
                <Ionicons
                  name="document-text-outline"
                  size={20}
                  color={color}
                />
                <Text style={{
                  color: color,
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                  Report
                </Text>
              </View>
            ),
          }}
        />

      </TopTabs>
    </MahasiswaProvider>
  );
}
