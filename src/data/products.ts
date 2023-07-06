import { getCurrentDate, getPastDate } from "../helpers/getDates";
import { Product } from "../models/products.models";

export const products: Product[] = [
  {
    id: 0,
    name: "Laptop Acer",
    description:
      "Laptop con procesador Intel Core i5, 8GB de RAM y disco duro de 1TB.",
    validityDate: getCurrentDate(),
    price: 750.15,
    image: "/assets/laptop-acer.webp",
  },
  {
    id: 1,
    name: "Smartphone Samsung",
    description:
      "Teléfono inteligente con cámara de alta resolución y 128GB de almacenamiento.",
    validityDate: getCurrentDate(),
    price: 579.99,
    image: "assets/smart-samsung.webp",
  },
  {
    id: 2,
    name: "Auriculares Sony",
    description:
      "Auriculares inalámbricos con cancelación de ruido y una duración de batería de 20 horas.",
    validityDate: getCurrentDate(),
    price: 180.09,
    image: "assets/auriculares-sony.webp",
  },
  {
    id: 3,
    name: "Impresora HP",
    description:
      "Impresora multifunción con capacidad de impresión a color y conexión Wi-Fi.",
    validityDate: getCurrentDate(),
    price: 150.34,
    image: "assets/impresora-hp.webp",
  },
  {
    id: 4,
    name: "Cámara Canon EOS",
    description:
      "Cámara réflex digital con sensor de 24.2 megapíxeles y grabación de video Full HD.",
    validityDate: getPastDate(5),
    price: 800.59,
    image: "assets/camara-canon.webp",
  },
  {
    id: 5,
    name: "Altavoz Bluetooth JBL",
    description:
      "Altavoz portátil con sonido estéreo de alta calidad y resistencia al agua.",
    validityDate: getPastDate(7),
    price: 100.19,
    image: "assets/altavoz.webp",
  },
];
