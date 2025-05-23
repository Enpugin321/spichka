import { ImageSourcePropType } from "react-native";

export type CollectionType = {
  title: string;
  image: ImageSourcePropType;
  description: string;
};

export const collectionData: CollectionType[] = [
  {
    title: "Событие одно",
    image: require("@/assets/images/sliderImages/1.jpg"),
    description: "30 января - 30 июня",
  },
  {
    title: "Событие два",
    image: require("@/assets/images/sliderImages/2.jpg"),
    description: "30 января - 30 июня",
  },
  {
    title: "Событие три",
    image: require("@/assets/images/sliderImages/3.jpg"),
    description: "30 января - 30 июня",
  },
  {
    title: "Событие четыре",
    image: require("@/assets/images/sliderImages/4.jpg"),
    description: "30 января - 30 июня",
  },
  {
    title: "Событие одно",
    image: require("@/assets/images/sliderImages/1.jpg"),
    description: "30 января - 30 июня",
  },
  {
    title: "Событие два",
    image: require("@/assets/images/sliderImages/2.jpg"),
    description: "30 января - 30 июня",
  },
  {
    title: "Событие три",
    image: require("@/assets/images/sliderImages/3.jpg"),
    description: "30 января - 30 июня",
  },
  {
    title: "Событие четыре",
    image: require("@/assets/images/sliderImages/4.jpg"),
    description: "30 января - 30 июня",
  },
];
