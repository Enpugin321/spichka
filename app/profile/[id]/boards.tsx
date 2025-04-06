// app/profile/[id]/boards.tsx

import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function BoardsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Доски пользователя {id}</Text>
      {/* тут доски */}
    </View>
  );
}
