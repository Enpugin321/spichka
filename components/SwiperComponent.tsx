import React from "react";
import Swiper from "react-native-swiper";
import { StyleSheet, Image, View } from "react-native";

const images = [
  {
    id: 1,
    uri: "https://images.unsplash.com/photo-1682707072922-b7753db5d06b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 2,
    uri: "https://images.unsplash.com/photo-1682536460259-b40cef108baa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
  {
    id: 3,
    uri: "https://images.unsplash.com/photo-1682595167681-888983414521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

const SwiperComponent = () => {
  return (
    <View style={styles.container}>
      <Swiper
        dotColor="#ffffff"
        activeDotColor="#7c7c7c"
        showsPagination={true}
      >
        {images?.map((image) => (
          <View key={image?.id} style={styles.slide}>
            <Image
              source={{ uri: image?.uri }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default SwiperComponent;

const styles = StyleSheet.create({
  container: {
    height: 227,
    borderRadius: 24,
    overflow: "hidden",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
