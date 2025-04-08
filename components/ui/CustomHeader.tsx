import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
  StyleSheet,
} from "react-native";
import { ArrowSVG } from "@/assets/images/icons";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useHeaderStore } from "@/store/headerStore";
import { useUserStore } from "@/store/userInformationStore";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ProfileBar from "./ProfileBar";

export default function CustomHeader() {
  const { title, showBack, showAvatar, showProfileBar, transparent, absolute } =
    useHeaderStore();
  const { id } = useUserStore();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  return (
    <View
      style={{
        position: absolute ? "absolute" : "relative",
        top: absolute ? 0 : undefined,
        left: absolute ? 0 : undefined,
        right: absolute ? 0 : undefined,
        zIndex: absolute ? 1000 : undefined,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: statusBarHeight + 10,
        paddingBottom: 15,
        paddingHorizontal: 24,
        backgroundColor: transparent ? "transparent" : "#fff",
      }}
    >
      {showBack ? (
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: "rgba(0, 0, 0, 1)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowSVG />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} /> // Пустой блок для выравнивания
      )}

      {title.length > 0 ? (
        <Text style={styles.title}>{title}</Text>
      ) : showProfileBar ? (
        <ProfileBar />
      ) : (
        <View style={{ width: 24 }} />
      )}

      {showAvatar ? (
        <TouchableOpacity onPress={() => router.push(`/profile/${id}`)}>
          <Ionicons name="person-circle" size={48} color="black" />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 20,
    color: "#000",
  },
});
