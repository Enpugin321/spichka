import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

// Define your slide width - this is what enables the peek effect
const slideWidth = width * 0.75; // 75% of screen width
const swiperWidth = width; // Full screen width, ignoring parent padding

export const EventSlider = () => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsPagination={false}
        loop={false}
        showsButtons={false}
        width={swiperWidth} // This is important - sets the swiper width
        horizontal
        containerStyle={styles.swiperContainer}
      >
        {[...Array(3)].map((_, index) => (
          <View key={index} style={styles.slide}>
            <View style={styles.eventCard} />
            <Text style={styles.eventName}>Event name</Text>
            <Text style={styles.eventDate}>30 января - 30 июня</Text>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative", // This helps break out of parent constraints
    marginTop: 20,
    marginLeft: -20, // Negative margin that matches parent padding
    marginRight: -20, // Negative margin that matches parent padding
    width: width, // Full screen width
  },
  wrapper: {
    height: 200,
    overflow: "visible",
  },
  swiperContainer: {
    overflow: "visible",
  },
  slide: {
    width: slideWidth,
    alignItems: "center",
    paddingHorizontal: 10, // Space between slides
  },
  eventCard: {
    width: "100%",
    height: 120,
    backgroundColor: "#ddd",
    borderRadius: 12,
  },
  eventName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  eventDate: {
    fontSize: 14,
    color: "#666",
  },
});

export default EventSlider;
