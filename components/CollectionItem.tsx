import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { CollectionType } from "@/assets/data/collectionData";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  item: CollectionType;
  index: number;
};

const { width } = Dimensions.get("screen");

const CollectionItem = ({ item, index }: Props) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageWrapper}>
        <Image source={item.image} style={styles.image} />
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
          style={styles.gradient}
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
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
    bottom: 12,
    left: 16,
    right: 16,
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
