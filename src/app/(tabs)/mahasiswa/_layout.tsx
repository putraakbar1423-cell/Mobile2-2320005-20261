import {TopTabs} from 'expo-router/js-top-tabs';
import { MahasiswaProvider } from '@/context/mahasiswacontext';

export default function mahasiswaTopTabsLayout() {
  return (
    <MahasiswaProvider>
      <TopTabs 
      screenOptions={{
        tabBarActiveTintColor: '#072deb',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarStyle: { backgroundColor: 'white' },
        tabBarIndicatorStyle: { backgroundColor: '#072deb' },
        headerShown: false,
        height: 3,

        tabBarLabelStyle: 
        { fontSize: 12, 
            fontWeight: 'bold',
            textTransform: 'none'
        },

      }}
      >
        <TopTabs.Screen name="Index" options={{ title: 'Data' }} />
        <TopTabs.Screen name="Input" options={{ title: 'Input' }} />
        <TopTabs.Screen name="Report" options={{ title: 'Report' }} />
      </TopTabs>
    </MahasiswaProvider>
  );
}