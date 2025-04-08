import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { Platform, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BlurTabBarBackground() {
  return (
    <BlurView
      tint="dark"
      intensity={50}
      style={[StyleSheet.absoluteFill, styles.wrapper]} // эффект размытия на всю область
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    borderTopWidth: 0,
    bottom: 20,
    width: "90%",
    marginHorizontal: "5%",
    borderRadius: 40,
    backgroundColor: "#000", // черный фон поверх blur
    height: 75,
    paddingTop: 10,
    paddingHorizontal: 20,
    overflow: "hidden", // чтобы blur не выходил за границы
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});

export function useBottomTabOverflow() {
  const tabHeight = useBottomTabBarHeight();
  const { bottom } = useSafeAreaInsets();
  return tabHeight - bottom;
}
