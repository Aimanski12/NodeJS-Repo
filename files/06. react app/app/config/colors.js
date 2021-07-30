// export default {
//   blue: "#0971D1",
//   green: "#00B707",
//   red: "#FB4D4D",
//   orange: "#D15109",
//   lightOrange: "#FFF3E8",
//   white: "#FFFFFF",

//   gray: "#BABABA",
//   lightgray: "#F2F2F2",
//   linegray: "#EAD5C3",
//   timegray: "#6d6d6d",
//   orangeTapBkg: "#FFC895",
// };

export const colors = {
  blue: "#0971D1",
  green: "#00B707",
  red: "#FB4D4D",
  orange: "#D15109",
  lightOrange: "#FFF3E8",
  white: "#FFFFFF",
  gray: "#BABABA",
  lightgray: "#F2F2F2",
  linegray: "#EAD5C3",
  timegray: "#6d6d6d",
  orangeTapBkg: "#FFC895",
};

export const levelColors = (level) => {
  if (level === "Very Important") return colors.red;
  if (level === "Important") return colors.green;
  if (level === "Less Important") return colors.blue;
};
