import { Stack } from 'expo-router';
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Bejelentkezés',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MainPage"
        options={{
          title: 'Főoldal',
          headerShown: false,
        }}
      />
    </Stack>
  );
}