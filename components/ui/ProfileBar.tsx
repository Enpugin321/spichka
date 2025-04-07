import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/userInformationStore";

const BUTTON_WIDTH = 120;
const BUTTON_HEIGHT = 32;

export default function ProfileBar() {
  const { id } = useUserStore();
  const pathname = usePathname();
  const router = useRouter();
  const [activePage, setActivePage] = useState<0 | 1>(0);

  const translateX = useSharedValue(0);

  useEffect(() => {
    console.log("ProfileBar mounted with id:", id);
    console.log("Current pathname:", pathname);
  }, []);

  useEffect(() => {
    if (pathname.endsWith("/boards")) {
      setActivePage(1);
    } else {
      setActivePage(0);
    }
  }, [pathname]);

  useEffect(() => {
    translateX.value = withTiming(activePage * BUTTON_WIDTH, { duration: 200 });
  }, [activePage]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const navigateToPage = (page: 0 | 1) => {
    if (page === activePage) return;

    const path = page === 0 ? "" : "boards";
    setActivePage(page);
    router.replace(`/profile/${id}/${path}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Animated.View style={[styles.slider, animatedStyle]} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToPage(0)}
        >
          <Text
            style={activePage === 0 ? styles.activeText : styles.inactiveText}
          >
            Мои билеты
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToPage(1)}
        >
          <Text
            style={activePage === 1 ? styles.activeText : styles.inactiveText}
          >
            Доски
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  inner: {
    flexDirection: "row",
    position: "relative",
    borderRadius: 20,
    overflow: "hidden",
  },
  button: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  slider: {
    position: "absolute",
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    backgroundColor: "black",
    borderRadius: 20,
    zIndex: 0,
  },
  activeText: {
    color: "white",
    fontWeight: "600",
  },
  inactiveText: {
    color: "black",
    fontWeight: "600",
  },
});
