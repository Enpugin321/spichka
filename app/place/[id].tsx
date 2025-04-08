import {
  LikeSVG,
  SavedPNG,
  ShareSVG,
  CategorySVG,
  ArrowSVG,
} from "@/assets/images/icons";
import {
  ImageBackground,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import React, { useCallback } from "react";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useHeaderStore } from "@/store/headerStore";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ExpandableText from "@/components/ExpandableText";
import EventSlider from "@/components/EventSlider";
import { reviews } from "@/assets/data/reviewsData";
import { placeList } from "@/assets/data/placeData";
import { imageSlider } from "@/assets/data/eventData";

interface reviewProps {
  name: string;
  review: string;
}

interface placeProps {
  id: number;
  placeName: string;
}

const Review = ({ review, name }: reviewProps) => {
  const style = StyleSheet.create({
    container: {
      flexDirection: "column",
      width: 202,
      height: 123,
      padding: 16,
      borderRadius: 24,
      backgroundColor: "#EEEEEE",
    },
    userBox: {
      flexDirection: "row",
      alignItems: "center",
      gap: 13,
    },
    avatar: {
      width: 32,
      height: 32,
      borderRadius: 32,
    },
    name: {
      fontSize: 14,
      fontWeight: "700",
    },
    review_text: {
      fontSize: 12,
      fontWeight: "400",
    },
  });

  return (
    <View style={style.container}>
      <View style={style.userBox}>
        <Image
          source={require("@/assets/images/avatar.png")}
          style={style.avatar}
        />
        <Text style={style.name}>{name}</Text>
      </View>
      <View>
        <Text style={style.review_text} numberOfLines={4}>
          {review}
        </Text>
      </View>
    </View>
  );
};

const SimilarPlace = ({ placeName, id }: placeProps) => {
  const router = useRouter();

  const style = StyleSheet.create({
    container: {
      flexDirection: "column",
      width: 148,
      gap: 12,
    },
    image: {
      width: 148,
      height: 148,
      borderRadius: 24,
    },
    name: {
      fontSize: 14,
      fontWeight: "500",
    },
  });

  return (
    <TouchableOpacity style={style.container}>
      <Image
        source={{ uri: "https://placehold.in/148x148@2x.png/light" }}
        style={style.image}
      />
      <Text style={style.name} numberOfLines={2}>
        {placeName}
      </Text>
    </TouchableOpacity>
  );
};

const Place = () => {
  const { id, title, shortDescription, description } = useLocalSearchParams();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  const setHeader = useHeaderStore((state) => state.setHeader);

  useFocusEffect(
    useCallback(() => {
      setHeader({
        visible: false,
      });

      return () => {
        // Восстанавливаем видимость, когда уходим со страницы
        useHeaderStore.setState({ visible: true });
      };
    }, [])
  );

  const goBack = () => {
    router.back();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={style.container}>
        <View style={style.header}>
          <View style={style.overlay} />
          <ImageBackground
            source={require("@/assets/images/placeholder.png")}
            style={style.backgroundImage}
          >
            <View
              style={[
                style.topButtonsContainer,
                { paddingTop: statusBarHeight },
              ]}
            >
              <View>
                <TouchableOpacity
                  onPress={goBack}
                  style={{ ...style.circleButtons, backgroundColor: "#000" }}
                >
                  <ArrowSVG />
                </TouchableOpacity>
              </View>
              <View style={style.rightSide}>
                <TouchableOpacity style={style.circleButtons}>
                  <SavedPNG />
                </TouchableOpacity>
                <TouchableOpacity style={style.circleButtons}>
                  <LikeSVG />
                </TouchableOpacity>
                <TouchableOpacity style={style.circleButtons}>
                  <ShareSVG />
                </TouchableOpacity>
              </View>
            </View>
            <View style={style.header_textContainer}>
              <Text style={style.title}>{title}</Text>
              <Text style={style.describtion}>{shortDescription}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={style.main_container}>
          <View style={style.categories}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                ...style.category,
              }}
            >
              <CategorySVG />
              <Text style={style.categoryText} numberOfLines={2}>
                Из подборок редакции
              </Text>
            </View>
            <View style={{ flexDirection: "column", ...style.category }}>
              <Text style={style.categoryText}>Рейтинг</Text>
              <Text style={style.categorySubtext}>18+</Text>
            </View>
          </View>
          <ExpandableText>{String(description ?? "")}</ExpandableText>
        </View>
        <View style={style.shop}>
          <Text style={style.shop_text}>Магазин винтажной одежды “Гречка”</Text>
          <Image
            source={require("@/assets/images/sliderImages/4.jpg")}
            style={style.shop_image}
          ></Image>
        </View>
        <View style={style.reviews_container}>
          <View style={style.reviews_textBox}>
            <Text style={style.reviews_text}>1000 отзывов</Text>
            <Text style={style.reviews_subtext}>все</Text>
          </View>
          <FlatList
            data={reviews}
            renderItem={({ item }) => (
              <Review review={item.text} name={item.name} />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          />
        </View>
        <View>
          <View style={style.upcoming}>
            <Text style={style.upcoming_text}>
              Предстоящие события в этом месте
            </Text>
          </View>
          <View style={{ marginTop: 8 }}>
            <EventSlider
              itemList={imageSlider.filter((item) => item.id !== Number(id))}
            />
          </View>
        </View>

        <View style={style.similar}>
          <Text style={style.upcoming_text}>Похожие места</Text>
          <FlatList
            data={placeList.filter((item) => item.id !== Number(id))}
            renderItem={({ item }) => (
              <SimilarPlace id={item.id} placeName={item.title} />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#fff",
    marginBottom: 24,
  },
  header: {
    flexDirection: "row",
  },
  backgroundImage: {
    width: "100%",
    height: 812,
    backgroundColor: "#3d3d3d",
    justifyContent: "space-between",
    paddingBottom: 42,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // растянуть на весь родительский блок
    backgroundColor: "rgba(0, 0, 0, 0.6)", // полупрозрачный черный
    zIndex: 1,
  },
  circleButtons: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(0, 0, 0, .25)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  svg: {
    width: 24,
    height: 24,
  },
  topButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: 8,
  },
  rightSide: {
    flexDirection: "row",
    gap: 8,
  },
  header_textContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 8,
    paddingHorizontal: 23,
    zIndex: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 4,
  },
  describtion: {
    fontSize: 14,
    fontWeight: "400",
    color: "#DADADA",
    marginBottom: 16,
  },
  main_container: {
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingVertical: 16,
    boxSizing: "border-box",
    gap: 24,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
  },
  category: {
    height: 46,
    paddingHorizontal: 16,
    paddingVertical: 6,
    boxSizing: "border-box",
    backgroundColor: "#eee",
    borderRadius: 50,
    gap: 6,
    maxWidth: 140,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#000",
  },
  categorySubtext: {
    fontSize: 12,
    fontWeight: "500",
    color: "#989494",
  },
  shop: {
    width: "100%",
    flexDirection: "column",
    gap: 12,
    paddingHorizontal: 24,
  },
  shop_text: {
    width: "60%",
    fontSize: 16,
    fontWeight: "600",
  },
  shop_image: {
    width: "100%",
    minHeight: 176,
    maxHeight: 176,
    borderRadius: 24,
  },
  upcoming: {
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "column",
    gap: 12,
    marginTop: 24,
  },
  upcoming_text: {
    fontSize: 16,
    fontWeight: "600",
  },
  reviews_container: {
    width: "100%",
    flexDirection: "column",
    gap: 12,
    paddingHorizontal: 24,
    marginTop: 24,
  },
  reviews_textBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reviews_text: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  reviews_subtext: {
    fontSize: 12,
    fontWeight: "400",
    textDecorationLine: "underline",
    color: "#989494",
  },
  similar: {
    flexDirection: "column",
    gap: 12,
    marginVertical: 24,
    paddingHorizontal: 24,
    paddingBottom: 72,
  },
});

export default Place;
