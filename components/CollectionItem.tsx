import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import { CollectionOrEventType } from "@/constants/types";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  item: CollectionOrEventType;
  index: number;
};

const CollectionItem = ({ item, index }: Props) => {
  const router = useRouter();

  const handlePress = () => {
    if ("date" in item) {
      router.push({
        pathname: "/event/[id]",
        params: {
          id: item.id ? String(item.id) : "",
          title: item.title,
          description: item.date, // или можно убрать
        },
      });
    } else {
      // Можно открыть другую страницу, если захочешь
      console.log("Коллекция нажата:", item.title);
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
      <View style={styles.itemContainer}>
        <View style={styles.imageWrapper}>
          <Image source={item.image} style={styles.image} />
          <LinearGradient
            colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
            style={styles.gradient}
          />
          <Text style={styles.title}>{item.title}</Text>
          {item.date && <Text style={styles.subtitle}>{item.date}</Text>}
          {!item.date && item.description && (
            <Text style={styles.subtitle}>{item.description}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CollectionItem;

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  imageWrapper: {
    width: "100%",
    height: 148,
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "60%",
  },
  title: {
    position: "absolute",
    bottom: 36,
    left: 16,
    right: 16,
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    position: "absolute",
    bottom: 12,
    left: 16,
    color: "white",
    fontSize: 14,
    fontWeight: "400",
  },
});
