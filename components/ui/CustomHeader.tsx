import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useHeaderStore } from "@/store/headerStore";
import { useUserStore } from "@/store/userInformationStore";

import ProfileBar from "./ProfileBar";

export default function CustomHeader() {
  const { showBack, showAvatar, showProfileBar, transparent, absolute } =
    useHeaderStore();
  const { id } = useUserStore();
  const router = useRouter();
  const statusBarHeight =
    Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0;

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
        paddingTop: statusBarHeight + 10,
        paddingBottom: 15,
        paddingHorizontal: 24,
        backgroundColor: transparent ? "transparent" : "#fff",
      }}
    >
      {showBack ? (
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} /> // Пустой блок для выравнивания
      )}

      {showProfileBar ? <ProfileBar /> : <View style={{ width: 24 }} />}

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
