import { Tabs } from "expo-router";

export default function ProfileTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: "none" },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Мои билеты" }} />
      <Tabs.Screen name="boards" options={{ title: "Доски" }} />
    </Tabs>
  );
}
