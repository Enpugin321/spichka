import LikeSVG from "@/assets/images/likeSVG";
import SavedPNG from "@/assets/images/savedSVG";
import ShareSVG from "@/assets/images/shareSVG";
// @ts-ignore
import headerBackground from "@/assets/images/placeholder.png";
// @ts-ignore
import Shop from "@/assets/images/sliderImages/4.jpg";
// @ts-ignore
import Avatar from "@/assets/images/avatar.png";
import React, { useCallback, useEffect, useRef } from "react";
import {
  ImageBackground,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageProps,
  StatusBar,
  Platform,
} from "react-native";
import CategorySVG from "@/assets/images/categorySVG";
import ExpandableText from "@/components/ExpandableText";
import EventSlider from "@/components/EventSlider";
import { imageSlider } from "@/assets/data/eventData";
import { useSearchParams } from "expo-router/build/hooks";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import ArrowSVG from "@/assets/images/arrowSVG";
import { useHeaderStore } from "@/store/headerStore";

interface Props {
  image: ImageProps;
  name: string;
  type: string;
  isSubscribed?: boolean;
}

const Author = ({ name, isSubscribed = false, image, type }: Props) => {
  const authorsStyle = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    leftSide: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 8,
    },
    textContainer: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: 8,
    },
    name: {
      fontSize: 12,
      fontWeight: "500",
      color: "#000",
    },
    type: {
      fontSize: 12,
      fontWeight: "500",
      color: "#989494",
    },
    button: {
      width: 108,
      height: 32,
      borderRadius: 50,
      paddingHorizontal: 15,
      paddingVertical: 8,
      backgroundColor: "#000",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      fontSize: 12,
      fontWeight: "500",
      color: "#fff",
    },
    image: {
      width: 48,
      height: 48,
      borderRadius: 50,
    },
  });

  return (
    <View style={authorsStyle.container}>
      <View style={authorsStyle.leftSide}>
        <Image source={image} style={authorsStyle.image}></Image>
        <View style={authorsStyle.textContainer}>
          <Text style={authorsStyle.name}>{name}</Text>
          <Text style={authorsStyle.type}>{type}</Text>
        </View>
      </View>
      <TouchableOpacity style={authorsStyle.button}>
        <Text style={authorsStyle.buttonText}>Подписаться</Text>
      </TouchableOpacity>
    </View>
  );
};

const Event = () => {
  const { id } = useLocalSearchParams();
  const previous = useSearchParams().get("previous");
  const router = useRouter();
  const pageStack = useRef<number[]>([]);
  const previousPage = useRef<number>(-1);

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

  const event = imageSlider.find((item) => item.id === Number(id));

  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToTop = () => {
    // Прокручиваем ScrollView до верхней части
    scrollViewRef.current?.scrollTo({ y: 0, animated: false });
  };

  useEffect(() => {
    scrollToTop();
    if (previous !== "true") pageStack.current.push(previousPage.current);
    previousPage.current = Number(id);
  }, [id]);

  const goBack = () => {
    router.back();
  };

  return (
    <ScrollView style={style.container} ref={scrollViewRef}>
      <View style={style.header}>
        <ImageBackground
          source={headerBackground}
          style={style.backgroundImage}
        >
          <View style={style.topButtonsContainer}>
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
            <Text style={style.title}>{event?.title}</Text>
            <Text style={style.describtion}>{event?.shortDescription}</Text>
            <Text style={style.date}>{event?.date}</Text>
            <TouchableOpacity
              style={style.buyButton}
              onPress={() => alert("Button pressed")}
            >
              <Text style={{ color: "#fff" }}>{`от ${event?.price} ₸`}</Text>
            </TouchableOpacity>
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
        <ExpandableText>{event?.description ?? ""}</ExpandableText>
      </View>
      <View style={style.shop}>
        <Text style={style.shop_text}>Магазин винтажной одежды “Гречка”</Text>
        <Image source={Shop} style={style.shop_image}></Image>
      </View>
      <View style={style.authors}>
        <Text style={style.authors_text}>Авторы мероприятия</Text>
        <Author image={Avatar} name={"Имя автора"} type={"Исполнитель"} />
        <Author image={Avatar} name={"Имя автора"} type={"Исполнитель"} />
      </View>
      <View style={style.similar}>
        <Text style={style.similar_text}>Похоже на это</Text>
        <View style={{ flex: 1, paddingBottom: 72, paddingHorizontal: 18 }}>
          <EventSlider
            itemList={imageSlider.filter((item) => item.id !== Number(id))}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: "row",
  },
  backgroundImage: {
    width: "100%",
    height: 812,
    backgroundColor: "#3d3d3d",
    justifyContent: "space-between",
    paddingBottom: 32,
  },
  circleButtons: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(0, 0, 0, .25)",
    justifyContent: "center",
    alignItems: "center",
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
  date: {
    fontSize: 14,
    fontWeight: "400",
    color: "#fff",
    marginBottom: 24,
  },
  buyButton: {
    width: "100%",
    height: 48,
    borderRadius: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
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
  authors: {
    width: "100%",
    flexDirection: "column",
    gap: 12,
    marginTop: 16,
    paddingHorizontal: 24,
  },
  authors_text: {
    fontSize: 16,
    fontWeight: "600",
  },
  similar: {
    gap: 12,
    marginTop: 24,
  },
  similar_text: {
    paddingLeft: 24,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Event;
