import { IMAGE_ASSETS } from "./imageAssets";

export type ProductType = {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  id: string;
  name: string;
  category: string;
  price: number;
};

export const PRODUCTS: ProductType[] = [
  {
    image: {
      thumbnail: IMAGE_ASSETS.WAFFLE_THUMBNAIL_IMAGE,
      mobile: IMAGE_ASSETS.WAFFLE_MOBILE_IMAGE,
      tablet: IMAGE_ASSETS.WAFFLE_TABLET_IMAGE,
      desktop: IMAGE_ASSETS.WAFFLE_DESKTOP_IMAGE,
    },
    id: "waffle",
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: IMAGE_ASSETS.CREME_BRULEE_THUMBNAIL_IMAGE,
      mobile: IMAGE_ASSETS.CREME_BRULEE_MOBILE_IMAGE,
      tablet: IMAGE_ASSETS.CREME_BRULEE_TABLET_IMAGE,
      desktop: IMAGE_ASSETS.CREME_BRULEE_DESKTOP_IMAGE,
    },
    id: "vanilla-bean-creme-brulee",
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: IMAGE_ASSETS.MACARON_THUMBNAIL_IMAGE,
      mobile: IMAGE_ASSETS.MACARON_MOBILE_IMAGE,
      tablet: IMAGE_ASSETS.MACARON_TABLET_IMAGE,
      desktop: IMAGE_ASSETS.MACARON_DESKTOP_IMAGE,
    },
    id: "macaron",
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: IMAGE_ASSETS.TIRAMISU_THUMBNAIL_IMAGE,
      mobile: IMAGE_ASSETS.TIRAMISU_MOBILE_IMAGE,
      tablet: IMAGE_ASSETS.TIRAMISU_TABLET_IMAGE,
      desktop: IMAGE_ASSETS.TIRAMISU_DESKTOP_IMAGE,
    },
    id: "tiramisu",
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: IMAGE_ASSETS.BAKLAVA_THUMBNAIL_IMAGE,
      mobile: IMAGE_ASSETS.BAKLAVA_MOBILE_IMAGE,
      tablet: IMAGE_ASSETS.BAKLAVA_TABLET_IMAGE,
      desktop: IMAGE_ASSETS.BAKLAVA_DESKTOP_IMAGE,
    },
    id: "baklava",
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: IMAGE_ASSETS.MERINGUE_THUMBNAIL_IMAGE,
      mobile: IMAGE_ASSETS.MERINGUE_MOBILE_IMAGE,
      tablet: IMAGE_ASSETS.MERINGUE_TABLET_IMAGE,
      desktop: IMAGE_ASSETS.MERINGUE_DESKTOP_IMAGE,
    },
    id: "lemon-pie",
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: IMAGE_ASSETS.CAKE_THUMBNAIL_IMAGE,
      mobile: IMAGE_ASSETS.CAKE_MOBILE_IMAGE,
      tablet: IMAGE_ASSETS.CAKE_TABLET_IMAGE,
      desktop: IMAGE_ASSETS.CAKE_DESKTOP_IMAGE,
    },
    id: "red-velvet-cake",
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: IMAGE_ASSETS.BROWNIE_THUMBNAIL_IMAGE,
      mobile: IMAGE_ASSETS.BROWNIE_MOBILE_IMAGE,
      tablet: IMAGE_ASSETS.BROWNIE_TABLET_IMAGE,
      desktop: IMAGE_ASSETS.BROWNIE_DESKTOP_IMAGE,
    },
    id: "brownie",
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: IMAGE_ASSETS.PANNA_COTTA_THUMBNAIL_IMAGE,
      mobile: IMAGE_ASSETS.PANNA_COTTA_MOBILE_IMAGE,
      tablet: IMAGE_ASSETS.PANNA_COTTA_TABLET_IMAGE,
      desktop: IMAGE_ASSETS.PANNA_COTTA_DESKTOP_IMAGE,
    },
    id: "panna-cotta",
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];
