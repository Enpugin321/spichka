import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import {
  HomeSVG,
  MagnifierSVG,
  AddPersonSVG,
  CompassSVG,
} from "@/assets/images/icons";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#9E9E9E",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <HomeSVG color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color }) => <MagnifierSVG color={color} />,
        }}
      />
      <Tabs.Screen
        name="addPerson"
        options={{
          tabBarIcon: ({ color }) => <AddPersonSVG color={color} />,
        }}
      />
      <Tabs.Screen
        name="compass"
        options={{
          tabBarIcon: ({ color }) => <CompassSVG color={color} />,
        }}
      />
      <Tabs.Screen
        name="events/index"
        options={{
          href: null, // исключает из табов
        }}
      />
      <Tabs.Screen
        name="collections/index"
        options={{
          href: null, // исключает из табов
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    paddingTop: 16,
    borderTopWidth: 0,
    bottom: 18,
    width: "90%",
    marginHorizontal: "5%",
    borderRadius: 40,
    backgroundColor: "#000",
    height: 75,
    paddingHorizontal: 20,
    ...Platform.select({
      android: {
        elevation: 5,
      },
    }),
  },
});
