import { ImageSourcePropType } from "react-native";

export type EventSliderType = {
  id: number;
  title: string;
  image: ImageSourcePropType;
  date: string;
  shortDescription: string;
  description: string;
  price: number;
};

export const imageSlider: EventSliderType[] = [
  {
    id: 1,
    title: "Фестиваль уличной еды",
    image: require("@/assets/images/sliderImages/1.jpg"),
    date: "30 мая – 2 июня",
    shortDescription:
      "Попробуйте лучшие блюда от шеф-поваров на открытом воздухе.",
    description:
      "На фестивале уличной еды вас ждёт более 50 гастрономических точек, живые выступления музыкантов, кулинарные мастер-классы и зона с лаунж-отдыхом. Приходите всей семьёй!",
    price: 1000,
  },
  {
    id: 2,
    title: "Летний маркет «Хэндмейд & Винтаж»",
    image: require("@/assets/images/sliderImages/2.jpg"),
    date: "8–9 июня",
    shortDescription:
      "Ярмарка уникальных изделий ручной работы и винтажной одежды.",
    description:
      "На маркете вы найдёте украшения, керамику, постеры, винтажные вещи и необычные аксессуары от локальных мастеров. А также — кофейные точки, живая музыка и фотозоны.",
    price: 3000,
  },
  {
    id: 3,
    title: "Ночь в музее: спецпрограмма",
    image: require("@/assets/images/sliderImages/3.jpg"),
    date: "15 июня",
    shortDescription:
      "Музеи открыты ночью — с эксклюзивными выставками и перформансами.",
    description:
      "Один раз в год музеи города работают всю ночь! Программа включает световые шоу, тематические экскурсии, лекции и перформансы. Успейте забронировать вход!",
    price: 2000,
  },
  {
    id: 4,
    title: "Открытие летнего кинотеатра",
    image: require("@/assets/images/sliderImages/4.jpg"),
    date: "20 июня – 31 августа",
    shortDescription:
      "Кино под открытым небом в парке каждую пятницу и субботу.",
    description:
      "Современное и классическое кино, пледы, попкорн и уютная атмосфера — всё это в летнем кинотеатре. Вход свободный, количество мест ограничено.",
    price: 2000,
  },
];
