/* subhead must be unique because of uniqueCategoryArr in GalleryContent.tsx */

const allCakesData: {
  id: number;
  subhead: string;
  heading: string;
  p: string;
  category: string;
  thumbnailTitle: string;
  imgTitle: string;
  lazyImgTitle: string;
  mobileImgTitle?: string;
  thumbnail?: string;
  img?: string;
  lazyImg?: string;
  mobileImg?: string;
}[] = [
  {
    id: 0,
    subhead: "roller",
    heading: "girl",
    p: "A fun roller skate-shaped birthday cake, bursting with retro charm and vibrant colors. The cake features fondant lettering, wheels, a rainbow, and cheerful pastel-colored stars.",
    category: "birthday",
    thumbnailTitle: "birthdaycake-5.jpg",
    imgTitle: "birthdaycake-5-Large.jpg",
    lazyImgTitle: "birthdaycake-5-small.jpg",
    mobileImgTitle: "birthdaycake-5-Mobile.jpg"
  },
  {
    id: 1,
    subhead: "tea",
    heading: "party",
    p: "This birthday cake is bursting with playful charm, featuring stacked pastel pink teacups and whimsical decorations like sugar roses, gold keys, tiny mushrooms, and hearts.",
    category: "birthday",
    thumbnailTitle: "birthdaycake-15.jpg",
    imgTitle: "birthdaycake-15-Large.jpg",
    lazyImgTitle: "birthdaycake-15-small.jpg",
    mobileImgTitle: "birthdaycake-15-Mobile.jpg"
  },
  {
    id: 2,
    subhead: "high",
    heading: "roller",
    p: `A vibrant Las Vegas themed birthday cake featuring edible playing cards, poker chips, and tiny red and black suits. Topped with the iconic "Welcome to Fabulous Las Vegas" sign, this cake is perfect for a Vegas themed celebration.`,
    category: "birthday",
    thumbnailTitle: "birthdaycake-18.jpg",
    imgTitle: "birthdaycake-18-Large.jpg",
    lazyImgTitle: "birthdaycake-18-small.jpg",
    mobileImgTitle: "birthdaycake-18-Mobile.jpg"
  },
  {
    id: 3,
    subhead: "Bunnies",
    heading: "& balloons",
    p: "An adorable two-tiered cake featuring a dreamy sky theme with soft beige tones. Fondant clouds, stars, and hot air balloons in metallic rose gold and blush shades give it a whimsical, storybook feel.",
    category: "birthday",
    thumbnailTitle: "birthdaycake-4.jpg",
    imgTitle: "birthdaycake-4-Large.jpg",
    lazyImgTitle: "birthdaycake-4-small.jpg",
    mobileImgTitle: "birthdaycake-4-Mobile.jpg"
  },
  {
    id: 4,
    subhead: "pirate",
    heading: "ship",
    p: "A sculpted pirate ship birthday cake sailing through buttercream waves. The cake features fondant wood panels, a weathered deck, cannons, and edible tattered sails",
    category: "birthday",
    thumbnailTitle: "birthdaycake-12.jpg",
    imgTitle: "birthdaycake-12-Large.jpg",
    lazyImgTitle: "birthdaycake-12-small.jpg",
    mobileImgTitle: "birthdaycake-12-Mobile.jpg"
  },
  {
    id: 5,
    subhead: "the",
    heading: "adventurer",
    p: "An elegant travel-themed cake adorned with edible sugar roses. The bottom tier resembles a suitcase with intricate white stenciling and gold accents, while the top tier features a mauve globe embellished with edible gold continents.",
    category: "birthday",
    thumbnailTitle: "birthdaycake-11.jpg",
    imgTitle: "birthdaycake-11-Large.jpg",
    lazyImgTitle: "birthdaycake-11-small.jpg",
    mobileImgTitle: "birthdaycake-11-Mobile.jpg"
  },
  {
    id: 6,
    subhead: "the ",
    heading: "Gramophone",
    p: "A stunning replica of a vintage gramophone, this birthday cake features a turntable, hand crank, and a golden fondant horn that captures the charm of a bygone musical era.",
    category: "birthday",
    thumbnailTitle: "birthdaycake-21.jpg",
    imgTitle: "birthdaycake-21-Large.jpg",
    lazyImgTitle: "birthdaycake-21-small.jpg",
    mobileImgTitle: "birthdaycake-21-Mobile.jpg"
  },
  {
    id: 7,
    subhead: "under",
    heading: "the sea",
    p: "A beautiful two-tiered birthday cake with a charming sea theme. It is decorated with pastel-colored fondant sea creatures, coral, seashells, and edible pearl bubbles.",
    category: "birthday",
    thumbnailTitle: "birthdaycake-17.jpg",
    imgTitle: "birthdaycake-17-Large.jpg",
    lazyImgTitle: "birthdaycake-17-small.jpg",
    mobileImgTitle: "birthdaycake-17-Mobile.jpg"
  },
  {
    id: 8,
    subhead: "the",
    heading: "cube",
    p: "A vibrant and playful birthday cake. Covered in brightly colored fondant squares, it captures the iconic puzzle's scrambled look.",
    category: "birthday",
    thumbnailTitle: "birthdaycake-9.jpg",
    imgTitle: "birthdaycake-9-Large.jpg",
    lazyImgTitle: "birthdaycake-9-small.jpg",
    mobileImgTitle: "birthdaycake-9-Mobile.jpg"
  },
  {
    id: 9,
    subhead: "beach",
    heading: "vibes",
    p: "A playful two-tiered, beach-themed birthday cake. It’s topped with a fondant surf van, surfboard, and palm tree, capturing a fun, tropical vibe.",
    category: "birthday",
    thumbnailTitle: "birthdaycake-24.jpg",
    imgTitle: "birthdaycake-24-Large.jpg",
    lazyImgTitle: "birthdaycake-24-small.jpg",
    mobileImgTitle: "birthdaycake-24-Mobile.jpg"
  },
  {
    id: 10,
    subhead: "magic",
    heading: "garden",
    p: "A whimsical, fairy-tale-inspired birthday cake shaped like a pink mushroom house, with fondant details that create a magical garden scene.",
    category: "birthday",
    thumbnailTitle: "birthdaycake-22.jpg",
    imgTitle: "birthdaycake-22-Large.jpg",
    lazyImgTitle: "birthdaycake-22-small.jpg",
    mobileImgTitle: "birthdaycake-22-Mobile.jpg"
  },
  {
    id: 11,
    subhead: "safari",
    heading: "cake",
    p: "A vibrant three-tiered safari-themed birthday cake, with each tier featuring a unique fondant animal print. Welcome to the jungle!",
    category: "birthday",
    thumbnailTitle: "birthdaycake-20.jpg",
    imgTitle: "birthdaycake-20-Large.jpg",
    lazyImgTitle: "birthdaycake-20-small.jpg",
    mobileImgTitle: "birthdaycake-20-Mobile.jpg"
  },
  {
    id: 12,
    subhead: "lipstick",
    heading: "cake",
    p: "A bold and stylish lipstick-themed birthday cake, designed with striking red, gold, and black fondant to perfectly mimic the iconic makeup tube.",
    category: "birthday",
    thumbnailTitle: "birthdaycake-23.jpg",
    imgTitle: "birthdaycake-23-Large.jpg",
    lazyImgTitle: "birthdaycake-23-small.jpg",
    mobileImgTitle: "birthdaycake-23-Mobile.jpg"
  },
  {
    id: 13,
    subhead: "go",
    heading: "wild",
    p: "A striking two-tiered birthday cake straight out of a storybook. It features stunning fondant details, including a tree trunk, scales, and a gold crown.",
    category: "birthday",
    thumbnailTitle: "birthdaycake-14.jpg",
    imgTitle: "birthdaycake-14-Large.jpg",
    lazyImgTitle: "birthdaycake-14-small.jpg",
    mobileImgTitle: "birthdaycake-14-Mobile.jpg"
  },
  {
    id: 14,
    subhead: "Sweet",
    heading: "stack",
    p: `A beautiful graduation cake featuring classic hardcover encyclopedias made of fondant. Each “book” is meticulously embellished with edible gold paint lettering and designs. Topped with a fondant graduation cap and diploma, it’s a perfect tribute to academic achievement.`,
    category: "birthday",
    thumbnailTitle: "birthdaycake-26.jpg",
    imgTitle: "birthdaycake-26-Large.jpg",
    lazyImgTitle: "birthdaycake-26-small.jpg",
    mobileImgTitle: "birthdaycake-26-Mobile.jpg"
  },
  {
    id: 15,
    subhead: "tropical",
    heading: "escape",
    p: "Vanilla sponge cake is light and airy, making it a versatile base for many cake creations. With its simple, yet rich vanilla flavor, it pairs well with a variety of frostings and fillings. Its delicate texture makes it a popular choice for both everyday treats and special occasions.",
    category: "birthday",
    thumbnailTitle: "birthdaycake-16.jpg",
    imgTitle: "birthdaycake-16-Large.jpg",
    lazyImgTitle: "birthdaycake-16-small.jpg",
    mobileImgTitle: "birthdaycake-16-Mobile.jpg"
  },
  {
    id: 16,
    subhead: "jack-o'-",
    heading: "lantern",
    p: `A festive Halloween-themed birthday cake shaped like a jack-o'-lantern bucket with a cheerful 'carved' fondant face. Overflowing with real candy, it's the perfect centerpiece for a spooky celebration.`,
    category: "birthday",
    thumbnailTitle: "birthdaycake-10.jpg",
    imgTitle: "birthdaycake-10-Large.jpg",
    lazyImgTitle: "birthdaycake-10-small.jpg",
    mobileImgTitle: "birthdaycake-10-Mobile.jpg"
  },
  {
    id: 17,
    subhead: "amusement",
    heading: "park",
    p: "A vibrant three-tiered amusement park birthday cake, bursting with bold colors, polka dots, and fondant gumballs. This playful creation is topped with a handmade fondant roller coaster, complete with a tiny rider.",
    category: "birthday",
    thumbnailTitle: "birthdaycake-25.jpg",
    imgTitle: "birthdaycake-25-Large.jpg",
    lazyImgTitle: "birthdaycake-25-small.jpg",
    mobileImgTitle: "birthdaycake-25-Mobile.jpg"
  },
  {
    id: 18,
    subhead: "dapper",
    heading: "one",
    p: "Charming two-tiered birthday cake featuring dapper fondant details such as a bow tie, suspenders, and buttons. It's perfectly completed with a top hat and a polka-dotted number one.",
    category: "birthday",
    thumbnailTitle: "birthdaycake-27.jpg",
    imgTitle: "birthdaycake-27-Large.jpg",
    lazyImgTitle: "birthdaycake-27-small.jpg",
    mobileImgTitle: "birthdaycake-27-Mobile.jpg"
  },
  {
    id: 19,
    subhead: "in a galaxy",
    heading: "far, far away",
    p: "This show-stopping, spherical, and iconic birthday cake is covered in metallic gray fondant and detailed with panels, lights, and textures—perfect for any sci-fi buff.",
    category: "birthday",
    thumbnailTitle: "birthdaycake-28.jpg",
    imgTitle: "birthdaycake-28-Large.jpg",
    lazyImgTitle: "birthdaycake-28-small.jpg",
    mobileImgTitle: "birthdaycake-28-Mobile.jpg"
  },
  {
    id: 20,
    subhead: "just ",
    heading: "chocolate cake",
    p: "A delightful 3D sculpted birthday cake designed to resemble a crowd favorite doll. It features big, expressive eyes and a fashionable outfit, all made of fondant.",
    category: "characters",
    thumbnailTitle: "charactercake-1.jpg",
    imgTitle: "charactercake-1-Large.jpg",
    lazyImgTitle: "charactercake-1-small.jpg",
    mobileImgTitle: "charactercake-1-Mobile.jpg"
  },
  {
    id: 21,
    subhead: "just",
    heading: "peachy",
    p: "An enchanting 3D sculpted birthday cake inspired by a princess, complete with signature blonde hair, bright blue earrings, and a jeweled crown—all made with fondant.",
    category: "characters",
    thumbnailTitle: "charactercake-2.jpg",
    imgTitle: "charactercake-2-Large.jpg",
    lazyImgTitle: "charactercake-2-small.jpg",
    mobileImgTitle: "charactercake-2-Mobile.jpg"
  },
  {
    id: 22,
    subhead: "hello",
    heading: "Elle",
    p: "A charming two-tiered birthday cake with a whimsical tea party theme, covered in realistic edible fondant roses, a dainty pink bow, and draped with fondant pearls that add a touch of sophistication.",
    category: "characters",
    thumbnailTitle: "charactercake-7.jpg",
    imgTitle: "charactercake-7-Large.jpg",
    lazyImgTitle: "charactercake-7-small.jpg",
    mobileImgTitle: "charactercake-7-Mobile.jpg"
  },
  {
    id: 23,
    subhead: "ka-",
    heading: "chow!",
    p: "This dynamic birthday cake is a 3D sculpted replica of the famous race car. It is covered in sleek red fondant and features immaculate detailing throughout, from expressive blue eyes to a friendly smile on the front bumper.",
    category: "characters",
    thumbnailTitle: "charactercake-3.jpg",
    imgTitle: "charactercake-3-Large.jpg",
    lazyImgTitle: "charactercake-3-small.jpg",
    mobileImgTitle: "charactercake-3-Mobile.jpg"
  },
  {
    id: 24,
    subhead: "gotta",
    heading: "go fast",
    p: "This vibrant birthday cake is a show-stopping tribute to the iconic video game character. The design features a 3D sculpted fondant figure emerging from the top, complete with signature spiky blue hair. Energetic, fun, and full of character, this cake is the perfect centerpiece for a high-speed celebration.",
    category: "characters",
    thumbnailTitle: "charactercake-9.jpg",
    imgTitle: "charactercake-9-Large.jpg",
    lazyImgTitle: "charactercake-9-small.jpg",
    mobileImgTitle: "charactercake-9-Mobile.jpg"
  },
  {
    id: 25,
    subhead: "circus",
    heading: "elephant",
    p: "Fun, colorful, and full of charm, this two-tiered birthday cake pays tribute to the classic fantasy film. Each fondant decoration is meticulously handcrafted—from the adorable elephant topper to the flags and balloons.",
    category: "characters",
    thumbnailTitle: "charactercake-8.jpg",
    imgTitle: "charactercake-8-Large.jpg",
    lazyImgTitle: "charactercake-8-small.jpg",
    mobileImgTitle: "charactercake-8-Mobile.jpg"
  },
  {
    id: 26,
    subhead: "rock",
    heading: "star",
    p: "A bold and creative birthday cake designed to resemble a snare drum, featuring realistic fondant drum hardware. Scattered around the cake are edible drumsticks, a microphone, and a red electric guitar. The cake is topped with a 3D fondant figure, complete with her signature red mohawk.",
    category: "characters",
    thumbnailTitle: "charactercake-10.jpg",
    imgTitle: "charactercake-10-Large.jpg",
    lazyImgTitle: "charactercake-10-small.jpg",
    mobileImgTitle: "charactercake-10-Mobile.jpg"
  },
  {
    id: 27,
    subhead: "golden",
    heading: "giraffe",
    p: "This adorable two-tiered jungle-themed birthday cake is both elegant and playful. It is frosted in smooth white buttercream and decorated with abstract buttercream brushstrokes. Large edible tropical leaves create a lush, safari vibe.",
    category: "characters",
    thumbnailTitle: "charactercake-12.jpg",
    imgTitle: "charactercake-12-Large.jpg",
    lazyImgTitle: "charactercake-12-small.jpg",
    mobileImgTitle: "charactercake-12-Mobile.jpg"
  },
  {
    id: 28,
    subhead: "shark",
    heading: "family",
    p: "A bright, colorful two-tiered birthday cake, covered in wavy fondant stripes in shades of blue. Each tier features handmade fondant sea creatures in vibrant colors.",
    category: "characters",
    thumbnailTitle: "charactercake-11.jpg",
    imgTitle: "charactercake-11-Large.jpg",
    lazyImgTitle: "charactercake-11-small.jpg",
    mobileImgTitle: "charactercake-11-Mobile.jpg"
  },
  {
    id: 29,
    subhead: "oink",
    heading: "oink",
    p: "A cheerful two-tiered birthday cake, decorated with a fondant landscape scene. All embellishments and 3D figurines are handmade and entirely edible.",
    category: "characters",
    thumbnailTitle: "birthdaycake-19.jpg",
    imgTitle: "birthdaycake-19-Large.jpg",
    lazyImgTitle: "birthdaycake-19-small.jpg",
    mobileImgTitle: "birthdaycake-19-Mobile.jpg"
  },
  {
    id: 30,
    subhead: "unicorn",
    heading: "& rainbow",
    p: "A two-tiered unicorn-themed birthday cake, full of color and whimsy. The pastel ombré buttercream, decorated with a vibrant fondant rainbow and shimmering gold stars, adds to the magic and wonder this cake brings.",
    category: "characters",
    thumbnailTitle: "charactercake-4.jpg",
    imgTitle: "charactercake-4-Large.jpg",
    lazyImgTitle: "charactercake-4-small.jpg",
    mobileImgTitle: "charactercake-4-Mobile.jpg"
  },
  {
    id: 31,
    subhead: "woodland",
    heading: "friends",
    p: "An adorable two-tiered cake adorned with the cutest handmade 3D forest creatures, each with its own personality. Frosted in smooth ivory buttercream, it also features edible fondant trees, toadstools, and tufts of green grass that bring the forest scene to life.",
    category: "characters",
    thumbnailTitle: "charactercake-5.jpg",
    imgTitle: "charactercake-5-Large.jpg",
    lazyImgTitle: "charactercake-5-small.jpg",
    mobileImgTitle: "charactercake-5-Mobile.jpg"
  },
  {
    id: 32,
    subhead: "jungle",
    heading: "friends",
    p: "A charming two-tiered safari-themed birthday cake, frosted in soft sky-blue buttercream and decorated with bright green fondant leaves and handmade 3D fondant jungle friends.",
    category: "characters",
    thumbnailTitle: "charactercake-6.jpg",
    imgTitle: "charactercake-6-Large.jpg",
    lazyImgTitle: "charactercake-6-small.jpg",
    mobileImgTitle: "charactercake-6-Mobile.jpg"
  },
  {
    id: 33,
    subhead: "alphabet",
    heading: "blocks",
    p: "A playful two-tiered birthday cake, decorated with textured white clouds and topped with a handcrafted 3D fondant figure cheerfully leaning against a fondant tree. Fondant accents like sunflowers and a wooden fence lend to the cake's charming countryside feel.",
    category: "characters",
    thumbnailTitle: "birthdaycake-7.jpg",
    imgTitle: "birthdaycake-7-Large.jpg",
    lazyImgTitle: "birthdaycake-7-small.jpg",
    mobileImgTitle: "birthdaycake-7-Mobile.jpg"
  },
  {
    id: 34,
    subhead: "designer",
    heading: "handbag",
    p: "This stunning birthday cake is a high-fashion illusion, masterfully crafted to resemble a luxury handbag. It features incredible handcrafted, edible details and is adorned with the iconic monogram pattern.",
    category: "fashion",
    thumbnailTitle: "fashion-3.jpg",
    imgTitle: "fashion-3-Large.jpg",
    lazyImgTitle: "fashion-3-small.jpg",
    mobileImgTitle: "fashion-3-Mobile.jpg"
  },
  {
    id: 35,
    subhead: "retro",
    heading: "flu game",
    p: "An ultra-realistic birthday cake replica of a classic sneaker. Expertly sculpted and detailed, it has the texture, stitching, and shape of a real high-top sneaker, down to the laces and tread patterns. This cake is a slam dunk for any sneakerhead or basketball fan.",
    category: "fashion",
    thumbnailTitle: "fashion-6.jpg",
    imgTitle: "fashion-6-Large.jpg",
    lazyImgTitle: "fashion-6-small.jpg",
    mobileImgTitle: "fashion-6-Mobile.jpg"
  },
  {
    id: 36,
    subhead: "chic",
    heading: "delight",
    p: "An elegant, fashion-forward 3D birthday cake, expertly crafted to resemble a black quilted handbag with a glossy finish. The stylish theme continues with fondant accessories, including a perfume bottle, bold red lipstick, and small black makeup box.",
    category: "fashion",
    thumbnailTitle: "fashion-1.jpg",
    imgTitle: "fashion-1-Large.jpg",
    lazyImgTitle: "fashion-1-small.jpg",
    mobileImgTitle: "fashion-1-Mobile.jpg"
  },
  {
    id: 37,
    subhead: "retro",
    heading: "concord",
    p: "A hyper-realistic birthday cake designed to replicate an iconic sneaker. Sculpted with meticulous attention to detail, the shoe’s shape, texture, and even the tongue label are recreated with stunning accuracy, making this cake almost indistinguishable from the real thing.",
    category: "fashion",
    thumbnailTitle: "fashion-7.jpg",
    imgTitle: "fashion-7-Large.jpg",
    lazyImgTitle: "fashion-7-small.jpg",
    mobileImgTitle: "fashion-7-Mobile.jpg"
  },
  {
    id: 38,
    subhead: "makeup",
    heading: "artist",
    p: "This fabulous birthday cake is a flawless replica of a pink polka-dotted makeup case, complete with edible beauty essentials. Surrounding the base are hyper-realistic fondant makeup items, all meticulously handcrafted.",
    category: "fashion",
    thumbnailTitle: "fashion-2.jpg",
    imgTitle: "fashion-2-Large.jpg",
    lazyImgTitle: "fashion-2-small.jpg",
    mobileImgTitle: "fashion-2-Mobile.jpg"
  },
  {
    id: 39,
    subhead: "playoffs",
    heading: "bred",
    p: "This incredibly lifelike birthday cake is a jaw-dropping tribute to the iconic sneaker. Sculpted with precision, the fondant laces, stitching, and even the shape of the midsole are meticulously crafted to replicate the real thing.",
    category: "fashion",
    thumbnailTitle: "fashion-8.jpg",
    imgTitle: "fashion-8-Large.jpg",
    lazyImgTitle: "fashion-8-small.jpg",
    mobileImgTitle: "fashion-8-Mobile.jpg"
  },
  {
    id: 40,
    subhead: "handbag",
    heading: "& flowers",
    p: "This elegant birthday cake is a flawless imitation of a luxury designer handbag, complete with the iconic green and gold monogram pattern. The realistic details, along with a deep red sugar flower, add a touch of sophistication and glamour.",
    category: "fashion",
    thumbnailTitle: "fashion-4.jpg",
    imgTitle: "fashion-4-Large.jpg",
    lazyImgTitle: "fashion-4-small.jpg",
    mobileImgTitle: "fashion-4-Mobile.jpg"
  },
  {
    id: 41,
    subhead: "Jordan 1",
    heading: "Low Blue",
    p: "This ultra-realistic birthday cake is expertly sculpted to resemble a classic low-top sneaker. It captures every detail—from the perforated toe box and textured laces to the iconic logo.",
    category: "fashion",
    thumbnailTitle: "fashion-9.jpg",
    imgTitle: "fashion-9-Large.jpg",
    lazyImgTitle: "fashion-9-small.jpg",
    mobileImgTitle: "fashion-9-Mobile.jpg"
  },
  {
    id: 42,
    subhead: "Designer",
    heading: "Dessert",
    p: "This remarkable birthday cake is a hyper-realistic replica of a luxury designer handbag. Covered in the iconic brown and tan monogram pattern and complete with edible handles, zippers, and stitching, it captures every detail of a classic fashion accessory.",
    category: "fashion",
    thumbnailTitle: "fashion-10.jpg",
    imgTitle: "fashion-10-Large.jpg",
    lazyImgTitle: "fashion-10-small.jpg",
    mobileImgTitle: "fashion-10-Mobile.jpg"
  },
  {
    id: 43,
    subhead: "chicken",
    heading: "celebration",
    p: "A playful two-tiered birthday cake featuring the signature cow print and bright red accents. Adorned with realistic, edible replicas of waffle fries, chicken nuggets, and a chicken sandwich topper, the cake captures the fun and flavor of the beloved fast-food chain.",
    category: "food",
    thumbnailTitle: "foodcake-1.jpg",
    imgTitle: "foodcake-1-Large.jpg",
    lazyImgTitle: "foodcake-1-small.jpg",
    mobileImgTitle: "foodcake-1-Mobile.jpg"
  },
  {
    id: 44,
    subhead: "this cake",
    heading: "is bananas",
    p: "A jaw-dropping, hyper-realistic 3D birthday cake. The incredible level of detail sells the illusion of two slightly bruised and peeled bananas—making it the perfect blend of fun and artistry.",
    category: "food",
    thumbnailTitle: "foodcake-5.jpg",
    imgTitle: "foodcake-5-Large.jpg",
    lazyImgTitle: "foodcake-5-small.jpg",
    mobileImgTitle: "foodcake-5-Mobile.jpg"
  },
  {
    id: 45,
    subhead: "savory",
    heading: "sweetness",
    p: "This astonishingly realistic birthday cake is designed to look like a takeout box overflowing with golden, crispy fried chicken, it even includes two lifelike biscuits made entirely of fondant.",
    category: "food",
    thumbnailTitle: "foodcake-4.jpg",
    imgTitle: "foodcake-4-Large.jpg",
    lazyImgTitle: "foodcake-4-small.jpg",
    mobileImgTitle: "foodcake-4-Mobile.jpg"
  },
  {
    id: 46,
    subhead: "drink",
    heading: "cheerwine",
    p: "This 3D birthday cake is expertly designed to look like a can of soda. From the bright red color to the metallic-looking top and signature logo, every detail is skillfully crafted.",
    category: "food",
    thumbnailTitle: "foodcake-8.jpg",
    imgTitle: "foodcake-8-Large.jpg",
    lazyImgTitle: "foodcake-8-small.jpg",
    mobileImgTitle: "foodcake-8-Mobile.jpg"
  },
  {
    id: 47,
    subhead: "grill",
    heading: "master",
    p: "This clever and realistic 3D birthday cake is shaped like a classic grill, complete with a fondant grate, and features fondant hot dogs and a juicy steak.",
    category: "food",
    thumbnailTitle: "foodcake-6.jpg",
    imgTitle: "foodcake-6-Large.jpg",
    lazyImgTitle: "foodcake-6-small.jpg",
    mobileImgTitle: "foodcake-6-Mobile.jpg"
  },
  {
    id: 48,
    subhead: "Berry",
    heading: "sweet",
    p: "This delightful 3D birthday cake is a hyper-realistic replica of a ripe strawberry. Its vibrant red surface is dotted with tiny yellow seeds and topped with a cluster of green fondant leaves.",
    category: "food",
    thumbnailTitle: "foodcake-2.jpg",
    imgTitle: "foodcake-2-Large.jpg",
    lazyImgTitle: "foodcake-2-small.jpg",
    mobileImgTitle: "foodcake-2-Mobile.jpg"
  },
  {
    id: 49,
    subhead: "pepper",
    heading: "perfection",
    p: "This eye-catching birthday cake is a hyper-realistic replica of a green jalapeño pepper. Sculpted with a glossy finish and rich green hues, it captures the bold shape and shine of a fresh chili.",
    category: "food",
    thumbnailTitle: "foodcake-3.jpg",
    imgTitle: "foodcake-3-Large.jpg",
    lazyImgTitle: "foodcake-3-small.jpg",
    mobileImgTitle: "foodcake-3-Mobile.jpg"
  },
  {
    id: 50,
    subhead: "snack",
    heading: "attack",
    p: "This playful and eye-catching birthday cake is designed to look exactly like a box of Cheez-Its. The bright red “box” is perfectly sculpted and labeled, with scattered fondant crackers spilling out for a fun and realistic touch.",
    category: "food",
    thumbnailTitle: "foodcake-7.jpg",
    imgTitle: "foodcake-7-Large.jpg",
    lazyImgTitle: "foodcake-7-small.jpg",
    mobileImgTitle: "foodcake-7-Mobile.jpg"
  },
  {
    id: 51,
    subhead: "botanical",
    heading: "beauty",
    p: "Tall, elegant, four-tier wedding cake in shades of pink, peach, and ivory. Each tier is artfully adorned with arrangements of peonies, roses, berries, and baby's breath. Subtle floral embossing adds a romantic and luxurious touch.",
    category: "wedding",
    thumbnailTitle: "weddingcake-5.jpg",
    imgTitle: "weddingcake-5-Large.jpg",
    lazyImgTitle: "weddingcake-5-small.jpg",
    mobileImgTitle: "weddingcake-5-Mobile.jpg"
  },
  {
    id: 52,
    subhead: "buttercream",
    heading: "& blooms",
    p: "Sophisticated, four-tier wedding cake with a clean, modern aesthetic. Each tier is coated in smooth white buttercream embossed with a delicate, feathered leafy texture which creates a soft cascading effect.",
    category: "wedding",
    thumbnailTitle: "weddingcake-19.jpg",
    imgTitle: "weddingcake-19-Large.jpg",
    lazyImgTitle: "weddingcake-19-small.jpg",
    mobileImgTitle: "weddingcake-19-Mobile.jpg"
  },
  {
    id: 53,
    subhead: "Gold",
    heading: "& teal",
    p: "Tall, two-tiered wedding cake with a minimalist design. Each tier is covered in smooth white and teal buttercream, accented with delicate gold leaf trim. It’s beautifully decorated with an arrangement of fresh roses and greenery.",
    category: "wedding",
    thumbnailTitle: "weddingcake-23.jpg",
    imgTitle: "weddingcake-23-Large.jpg",
    lazyImgTitle: "weddingcake-23-small.jpg",
    mobileImgTitle: "weddingcake-23-Mobile.jpg"
  },

  {
    id: 54,
    subhead: "zesty",
    heading: "fresh",
    p: "Two-tiered wedding cake with a fresh, zesty lemon theme. It features a beautiful, vibrant lemon and leaf pattern and is decorated with white roses and lemon slices.",
    category: "wedding",
    thumbnailTitle: "weddingcake-4.jpg",
    imgTitle: "weddingcake-4-Large.jpg",
    lazyImgTitle: "weddingcake-4-small.jpg",
    mobileImgTitle: "weddingcake-4-Mobile.jpg"
  },
  {
    id: 55,
    subhead: "mountains",
    heading: "& skies",
    p: "Three-tiered rustic wedding cake with a serene, nature theme. It features hand-painted mountain landscapes with snow-capped peaks and pine trees against a light blue sky. The middle tier has a beautiful birch tree bark texture.",
    category: "wedding",
    thumbnailTitle: "weddingcake-7.jpg",
    imgTitle: "weddingcake-7-Large.jpg",
    lazyImgTitle: "weddingcake-7-small.jpg",
    mobileImgTitle: "weddingcake-7-Mobile.jpg"
  },

  {
    id: 56,
    subhead: "Flowers",
    heading: "& Pearls",
    p: "An elegant three-tiered wedding cake, adorned with intricate floral lace patterns in buttercream and delicate, edible pearls, beautifully decorated with peach, mauve, and pink flowers.",
    category: "wedding",
    thumbnailTitle: "weddingcake-2.jpg",
    imgTitle: "weddingcake-2-Large.jpg",
    lazyImgTitle: "weddingcake-2-small.jpg",
    mobileImgTitle: "weddingcake-2-Mobile.jpg"
  },
  {
    id: 57,
    subhead: "ruffles",
    heading: "& petals",
    p: "A beautiful, tall, three-tiered wedding cake covered with striking ruffled flower petals. Each petal is meticulously handmade with thin fondant, giving the cake the appearance of a blooming flower.",
    category: "wedding",
    thumbnailTitle: "weddingcake-16.jpg",
    imgTitle: "weddingcake-16-Large.jpg",
    lazyImgTitle: "weddingcake-16-small.jpg",
    mobileImgTitle: "weddingcake-16-Mobile.jpg"
  },
  {
    id: 58,
    subhead: "fondant",
    heading: "peonies",
    p: "A luxurious three-tiered wedding cake coated in a flawless white buttercream finish. Clusters of handmade fondant peonies and green leaves adorn each tier, complemented by a light scattering of edible gold leaf.",
    category: "wedding",
    thumbnailTitle: "weddingcake-3.jpg",
    imgTitle: "weddingcake-3-Large.jpg",
    lazyImgTitle: "weddingcake-3-small.jpg",
    mobileImgTitle: "weddingcake-3-Mobile.jpg"
  },
  {
    id: 59,
    subhead: "lavender",
    heading: "roses",
    p: "A three-tiered naked wedding cake with soft, rustic elegance. Artfully placed lavender and blush roses and sprigs of greenery bring both simplicity and sophistication.",
    category: "wedding",
    thumbnailTitle: "weddingcake-8.jpg",
    imgTitle: "weddingcake-8-Large.jpg",
    lazyImgTitle: "weddingcake-8-small.jpg",
    mobileImgTitle: "weddingcake-8-Mobile.jpg"
  },
  {
    id: 60,
    subhead: "Ocean",
    heading: "blues",
    p: "A striking three-tiered wedding cake featuring an elegant ombré design that transitions smoothly from deep ocean blue to soft sky blue. The buttercream frosting adds texture and movement. Delicate clusters of white florals create a beautiful contrast against the cool-toned background.",
    category: "wedding",
    thumbnailTitle: "weddingcake-11.jpg",
    imgTitle: "weddingcake-11-Large.jpg",
    lazyImgTitle: "weddingcake-11-small.jpg",
    mobileImgTitle: "weddingcake-11-Mobile.jpg"
  },
  {
    id: 61,
    subhead: "handmade",
    heading: "flowers",
    p: "A tall, refined three-tiered wedding cake that radiates classic elegance. A vibrant handmade floral arrangement, crafted entirely from fondant, showcases peach-colored roses, turquoise and baby blue blooms, white berries, and bright green leaves.",
    category: "wedding",
    thumbnailTitle: "weddingcake-12.jpg",
    imgTitle: "weddingcake-12-Large.jpg",
    lazyImgTitle: "weddingcake-12-small.jpg",
    mobileImgTitle: "weddingcake-12-Mobile.jpg"
  },
  {
    id: 62,
    subhead: `"painted"`,
    heading: "flowers",
    p: "A whimsical two-tiered wedding cake bursting with color and personality. The cake is frosted with a smooth white base and fully adorned with hand-piped buttercream flowers in vibrant shades of pink, purple, yellow, and blue.",
    category: "wedding",
    thumbnailTitle: "weddingcake-13.jpg",
    imgTitle: "weddingcake-13-Large.jpg",
    lazyImgTitle: "weddingcake-13-small.jpg",
    mobileImgTitle: "weddingcake-13-Mobile.jpg"
  },
  {
    id: 63,
    subhead: `blue`,
    heading: "gold",
    p: "An artistic two-tiered wedding cake that beautifully blends hand-painted details with a dreamy watercolor marbled design, accented by elegant streaks and flecks of edible gold leaf. It also features delicate hand-painted botanical branches adding a whimsical, romantic flair.",
    category: "wedding",
    thumbnailTitle: "weddingcake-14.jpg",
    imgTitle: "weddingcake-14-Large.jpg",
    lazyImgTitle: "weddingcake-14-small.jpg",
    mobileImgTitle: "weddingcake-14-Mobile.jpg"
  },
  {
    id: 64,
    subhead: "flower",
    heading: "collage",
    p: "A charming, nature-inspired two-tiered wedding cake with a delicate, earthy aesthetic. The cake is coated in smooth, ivory-toned buttercream and adorned with a variety of pressed edible flowers.",
    category: "wedding",
    thumbnailTitle: "weddingcake-15.jpg",
    imgTitle: "weddingcake-15-Large.jpg",
    lazyImgTitle: "weddingcake-15-small.jpg",
    mobileImgTitle: "weddingcake-15-Mobile.jpg"
  },
  {
    id: 65,
    subhead: "silver leaf",
    heading: "& flowers",
    p: "A luxurious and romantic three-tiered wedding cake featuring elegant horizontal ridges, subtle floral embossing, and a striking band of silver leaf. Clusters of fresh roses and eucalyptus leaves are artfully arranged around the tiers, adding richness and softness.",
    category: "wedding",
    thumbnailTitle: "weddingcake-17.jpg",
    imgTitle: "weddingcake-17-Large.jpg",
    lazyImgTitle: "weddingcake-17-small.jpg",
    mobileImgTitle: "weddingcake-17-Mobile.jpg"
  },
  {
    id: 66,
    subhead: "gold",
    heading: "& marble",
    p: "A contemporary three-tiered wedding cake featuring marbled gray tiers and a glossy burgundy tier with gold geometric accents. Handmade white sugar flowers and green leaves add a soft, elegant touch.",
    category: "wedding",
    thumbnailTitle: "weddingcake-18.jpg",
    imgTitle: "weddingcake-18-Large.jpg",
    lazyImgTitle: "weddingcake-18-small.jpg",
    mobileImgTitle: "weddingcake-18-Mobile.jpg"
  },
  {
    id: 67,
    subhead: "floral",
    heading: "monogram",
    p: "An elegant and vibrant three-tiered wedding cake that feature a striking blue floral pattern.  Bright, fresh floral clusters cascade down the sides.",
    category: "wedding",
    thumbnailTitle: "weddingcake-9.jpg",
    imgTitle: "weddingcake-9-Large.jpg",
    lazyImgTitle: "weddingcake-9-small.jpg",
    mobileImgTitle: "weddingcake-9-Mobile.jpg"
  },

  {
    id: 68,
    subhead: "emerald",
    heading: "bloom",
    p: "A modern three-tiered wedding cake with a green ombré base, textured middle tier, and smooth top tier accented with gold leaf. Peach roses, greenery, and pink berries add a soft, romantic touch.",
    category: "wedding",
    thumbnailTitle: "weddingcake-20.jpg",
    imgTitle: "weddingcake-20-Large.jpg",
    lazyImgTitle: "weddingcake-20-small.jpg",
    mobileImgTitle: "weddingcake-20-Mobile.jpg"
  },
  {
    id: 69,
    subhead: "handmade",
    heading: "sugar roses",
    p: "A three-tiered wedding cake with delicate handmade sugar roses, small blossoms, and green leaves. The smooth buttercream is decorated with tiny sugar pearls and sprinkle",
    category: "wedding",
    thumbnailTitle: "weddingcake-21.jpg",
    imgTitle: "weddingcake-21-Large.jpg",
    lazyImgTitle: "weddingcake-21-small.jpg",
    mobileImgTitle: "weddingcake-21-Mobile.jpg"
  },
  {
    id: 70,
    subhead: "blush",
    heading: "beauty",
    p: "An elegant, tall three-tiered wedding cake with a refined color palette and intricate embossed patterns accented with pearls. Ivory sugar flowers and sprigs of dried wheat add a soft, rustic touch.",
    category: "wedding",
    thumbnailTitle: "weddingcake-22.jpg",
    imgTitle: "weddingcake-22-Large.jpg",
    lazyImgTitle: "weddingcake-22-small.jpg",
    mobileImgTitle: "weddingcake-22-Mobile.jpg"
  },
  {
    id: 71,
    subhead: "pretty",
    heading: "petals",
    p: "An elegant, minimal two-tiered cake, frosted in smooth white buttercream with raw edges and piped with delicate blue floral vines.",
    category: "wedding",
    thumbnailTitle: "birthdaycake-2.jpg",
    imgTitle: "birthdaycake-2-Large.jpg",
    lazyImgTitle: "birthdaycake-2-small.jpg",
    mobileImgTitle: "birthdaycake-2-Mobile.jpg"
  },
  {
    id: 72,
    subhead: "stained",
    heading: "glass",
    p: "A bold, artistic, and modern three-tiered cake featuring hand-drawn floral illustrations, a deep green middle tier with a painted medallion, and a stained-glass-inspired base in pink and gold tones.",
    category: "wedding",
    thumbnailTitle: "birthdaycake-13.jpg",
    imgTitle: "birthdaycake-13-Large.jpg",
    lazyImgTitle: "birthdaycake-13-small.jpg",
    mobileImgTitle: "birthdaycake-13-Mobile.jpg"
  }
];

export default allCakesData;
