import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, statusBarStyle: 'dark' }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default Layout;
