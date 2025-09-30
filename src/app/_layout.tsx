import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Stack } from 'expo-router';
import React from 'react';

import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';
import '../../global.css';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>[ 'name' ];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        // tabBarActiveTintColor: Colors[ colorScheme ?? 'light' ].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Tab One',
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="two"
        options={{
          title: 'Tab Two',
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Stack>
  );
}
