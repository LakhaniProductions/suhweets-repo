export const PHONE_NUMBER = "(703) 334-6259";
export const RUSH_CUTOFF = 14;
const designImages = Object.values(
  import.meta.glob("../../img/signaturecakes/design/*.{png,jpg,jpeg}", {
    eager: true,
    as: "url"
  })
);
const desc = designImages.map((item) => {
  const imgTitle = item.split("/").pop();
  const designTitle = imgTitle!
    .replace(/_[^_]*$/, "") // Removes the last "_" and everything after it
    .replace(/_/g, " "); // Replaces all remaining "_" with a space
  return { flav: designTitle, lsImg: item };
});

// export const DESIGN_CONT = [
//   {
//     flav: "Heart",
//     p: "Moist vanilla cake paired with smooth vanilla buttercream.",
//     img: designImages.find((img) => img.includes("chocolate-big")),
//     lsImg: designImages.find((img) => img.includes("option1")),
//     bgimg: designImages.find((img) => img.includes("chocolate-small"))
//   },
//   {
//     flav: "Sprinkles",
//     p: "Rich red velvet cake with a creamy vanilla cream cheese frosting.",
//     img: designImages.find((img) => img.includes("chocolate-big")),
//     lsImg: designImages.find((img) => img.includes("option2")),
//     bgimg: designImages.find((img) => img.includes("chocolate-small"))
//   },
//   {
//     flav: "Roses",
//     p: "Choice of chocolate or vanilla cake with cookies & cream buttercream.",
//     img: designImages.find((img) => img.includes("chocolate-big")),
//     lsImg: designImages.find((img) => img.includes("option3")),
//     bgimg: designImages.find((img) => img.includes("chocolate-small"))
//   },
//   {
//     flav: "Drippy",
//     p: "Funfetti cake with your choice of vanilla or strawberry buttercream.",
//     img: designImages.find((img) => img.includes("chocolate-big")),
//     lsImg: designImages.find((img) => img.includes("option4")),
//     bgimg: designImages.find((img) => img.includes("chocolate-small"))
//   },
//   {
//     flav: "Monica",
//     p: "Strawberry cake layered with strawberry cream cheese frosting.",
//     img: designImages.find((img) => img.includes("chocolate-big")),
//     lsImg: designImages.find((img) => img.includes("option5")),
//     bgimg: designImages.find((img) => img.includes("chocolate-small"))
//   },
//   {
//     flav: "Chandler",
//     p: "Chocolate cake filled with rich chocolate buttercream.",
//     img: designImages.find((img) => img.includes("chocolate-big")),
//     lsImg: designImages.find((img) => img.includes("option6")),
//     bgimg: designImages.find((img) => img.includes("chocolate-small"))
//   }
// ];
export const DESIGN_CONT = desc;
