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

export default function CustomHeader() {
  const { title, showBack } = useHeaderStore();
  const router = useRouter();
  const statusBarHeight =
    Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0;

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: statusBarHeight + 10,
        paddingBottom: 15,
        paddingHorizontal: 24,
        backgroundColor: "#fff",
      }}
    >
      {showBack ? (
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} /> // Пустой блок для выравнивания
      )}

      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>

      <TouchableOpacity onPress={() => router.push("/profile/3")}>
        <Ionicons name="person-circle" size={48} color="black" />
      </TouchableOpacity>
    </View>
  );
}
