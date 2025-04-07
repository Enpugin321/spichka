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
          title: "Home",
          tabBarIcon: ({ color }) => <HomeSVG color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => <MagnifierSVG color={color} />,
        }}
      />
      <Tabs.Screen
        name="addPerson"
        options={{
          title: "AddPerson",
          tabBarIcon: ({ color }) => <AddPersonSVG color={color} />,
        }}
      />
      <Tabs.Screen
        name="compass"
        options={{
          title: "Compass",
          tabBarIcon: ({ color }) => <CompassSVG color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    borderTopWidth: 0,
    bottom: 20,
    width: "90%",
    marginHorizontal: "5%",
    borderRadius: 40,
    backgroundColor: "#000",
    height: 75,
    paddingTop: 10,
    paddingHorizontal: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
