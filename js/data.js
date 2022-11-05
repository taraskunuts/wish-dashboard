const user = {
  name: "Тарас",
  surname: "Куницький",
  userPhoto: "моє фото.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "car.jpg", alt: "Авто моєї мрії" },
    { src: "летіти літаком.jpg", alt: "летіти літаком" },
    { src: "bali.jpg", alt: "Поїздка на балі" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  400,
  800,
  1000,
  1200,
  1400,
  1600,
  1800,
  2000,
  2400,
  2800,
  3000,
  3200,
];

const necessaryExpenses = 300;

const todo = [
  { month: "Червень", skill: "спорт" },
  { month: "Липень", skill: "поїздка в гори" },
  { month: "Серпень", skill: "програмування" },
  { month: "Вересень", skill: "основи" },
  { month: "Жовтень", skill: "перші кроки" },
  { month: "Листопад", skill: "Емоційний інтелект" },
  { month: "Грудень", skill: "Креативність" },
  { month: "Січень", skill: "Лідерство" },
  { month: "Лютий", skill: "Нетворкінг" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Публічні виступи" },
];

export { user, arr, necessaryExpenses, todo };
