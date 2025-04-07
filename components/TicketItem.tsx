import { StyleSheet, Text, View, Image } from "react-native";
import TicketImage from "@/assets/images/form.svg";
import QR from "@/assets/images/Frame.svg";
import Location from "@/assets/images/Location.svg";
import React from "react";

const TicketItem = ({ title, date }: { title: string; date: string }) => {
  return (
    <View style={styles.svgWrapper}>
      <TicketImage width="100%" height="100%" />
      <View style={styles.overlay}>
        {/* Верхняя часть */}
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
              marginRight: 20,
            }}
          >
            <Image
              source={require("@/assets/images/logo.png")}
              style={styles.logo}
            />
            <View style={styles.textContainer}>
              <Text style={styles.description}>{date}</Text>
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
                {title}
              </Text>
            </View>
          </View>
          <QR />
        </View>

        {/* Нижняя часть */}
        <View style={styles.bottomSection}>
          <Location width={24} height={24} />
          <Text style={styles.qrText}>Адрес</Text>
        </View>
      </View>
    </View>
  );
};

export default TicketItem;

const styles = StyleSheet.create({
  svgWrapper: {
    width: 327,
    height: 148,
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 327,
    height: 148,
    padding: 8,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: { width: 64, height: 64 },
  textContainer: {
    marginLeft: 10,
    marginTop: 9,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    marginTop: 4,
    fontSize: 12,
    color: "#444",
  },
  bottomSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },

  qrText: {
    fontSize: 16,
    color: "#000000",
  },
});
