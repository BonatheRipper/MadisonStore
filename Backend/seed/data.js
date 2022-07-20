import bcrypt from "bcryptjs";

const Data = {
  users: [
    {
      name: "Bona Andrews",
      email: "Bona9ja@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Joel Ani",
      email: "joel@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Nivaraga Earring",
      slug: "Nivaraga-Earring",
      category: "Earrings",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969479856andrew-hutchings-Asngw4A5_tM-unsplash-removebg-preview.png?alt=media&token=cc88b966-286e-49d6-bd1c-264ec815ec39",
      price: 120,
      countInStock: 10,
      material: "Leather",
      rating: 4.5,
      numReviews: 10,
      gallery: [],
      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
    },
    {
      name: "Neveta Bag",
      slug: "Neveta Bag",
      category: "Bags",
      gallery: [],
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969025672arno-senoner-oCXVxwTFwqE-unsplash-removebg-preview.png?alt=media&token=d2782f30-6239-4d63-ae9a-ce2587217547",
      price: 20,
      countInStock: 10,
      material: "Leather",
      rating: 4.5,
      numReviews: 10,
      description:
        "This portable bag is crafted from tender calf leather and is refreshed with a radiant red colorway.",
    },
    {
      name: "Nivaraga Earring",
      slug: "Nivaraga-Earring",
      category: "Earrings",
      gallery: [],
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969479856andrew-hutchings-Asngw4A5_tM-unsplash-removebg-preview.png?alt=media&token=cc88b966-286e-49d6-bd1c-264ec815ec39",
      countInStock: 101,
      material: "Gold",
      rating: 4.5,
      numReviews: 4,
      description:
        "Radiant is simply the caption that best describes this item and will definitely complete any of your looks.",
    },
    {
      name: "Garava necklace",
      slug: "Garava necklace",
      category: "NECKLACES",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969596389sabrianna-u1Hv_erOQH0-unsplash.png?alt=media&token=b1de1a27-068d-4cd7-a24d-b549f514d972",
      price: 50,
      countInStock: 5,
      material: "silver",
      gallery: [],
      rating: 3.0,
      numReviews: 9,
      description:
        "Radiant is simply the caption that best describes this item and will definitely complete any of your looks.",
    },
    {
      name: "Tag watch",
      slug: "tag-watch",
      category: "WATCHES",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654968503622pexels-pixabay-364822.png?alt=media&token=73ebc4d3-ff43-484e-b9cd-14f18710fab5",
      price: 120,
      countInStock: 10,
      material: "Silver",
      gallery: [],
      rating: 2.5,
      numReviews: 6,
      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
    },
    {
      name: "Cianaga Shoes",
      slug: "Cianaga Shoes",
      category: "Shoes",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969785257gavin-allanwood-ndpX28miBtE-unsplash.png?alt=media&token=a2226fcf-4564-4a14-868b-19b1fda97f95",
      price: 120,
      countInStock: 10,
      material: "Sweat",
      numReviews: 5,
      gallery: [],
      rating: 4.5,

      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
    },
    {
      name: "Burchory ring",
      slug: "Burchory ring",
      category: "Rings",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969943903sabrianna-NhrcL_C0sFA-unsplash.png?alt=media&token=e55cc7d6-717a-4f27-b9ca-1b0fd6503797",
      price: 120,
      countInStock: 10,
      numReviews: 5,
      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
      gallery: [],
      material: "Gold",
      rating: 4.5,
    },
    {
      name: "Alvaro Serrano Bag",
      slug: "Alvaro Serrano Bag",
      category: "Bags",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654970141986alvaro-serrano-pFLNV4gkXsc-unsplash-removebg-preview.png?alt=media&token=f7d3c9cd-2b36-4b7a-91ca-5cfe7e4fb0c5",
      price: 120,
      countInStock: 10,
      numReviews: 5,
      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
      gallery: [],
      material: "Leather",
      rating: 4.5,
    },
    {
      name: "Uquiche Ring",
      slug: "Uquiche Ring",
      category: "Rings",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654970740605antonio-uquiche-xD_XnntwCw0-unsplash-removebg-preview.png?alt=media&token=7e78a011-0b1d-4553-a026-5195f6ea74e0",
      price: 120,
      countInStock: 10,
      numReviews: 5,
      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
      gallery: [],
      material: "Silver",
      rating: 4.5,
    },
    {
      name: "Bulbul Necklace",
      slug: "Bulbul Necklace",
      category: "Necklaces",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654970455690bulbul-ahmed-QFWGnLHnBNQ-unsplash__1_-removebg-preview.png?alt=media&token=9feb1ecc-65da-4bf5-9391-979083f15f88",
      price: 120,
      countInStock: 10,
      material: "Gold",
      rating: 3.5,
      numReviews: 1,
      gallery: [],
      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
    },
    {
      name: "Miao Xiang Earring",
      slug: "Miao Xiang Earring",
      category: "shirts",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654970297950miao-xiang-leFR7Fj3J6I-unsplash.png?alt=media&token=edd455fa-b80e-4453-a3b1-dfec4032b760",
      price: 120,
      countInStock: 10,
      gallery: [],
      material: "Gold",
      rating: 4.0,
      numReviews: 20,
      description:
        "This is is currently the best in the market, get peace with this quality piece",
    },

    {
      name: "Nivaraga Earring",
      slug: "Nivaraga-Earring",
      category: "Earrings",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969479856andrew-hutchings-Asngw4A5_tM-unsplash-removebg-preview.png?alt=media&token=cc88b966-286e-49d6-bd1c-264ec815ec39",
      price: 120,
      countInStock: 10,
      material: "Leather",
      rating: 4.5,
      numReviews: 10,
      gallery: [],
      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
    },
    {
      name: "Neveta Bag",
      slug: "Neveta Bag",
      category: "Bags",
      gallery: [],
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969025672arno-senoner-oCXVxwTFwqE-unsplash-removebg-preview.png?alt=media&token=d2782f30-6239-4d63-ae9a-ce2587217547",
      price: 20,
      countInStock: 10,
      material: "Leather",
      rating: 4.5,
      numReviews: 10,
      description:
        "This portable bag is crafted from tender calf leather and is refreshed with a radiant red colorway.",
    },
    {
      name: "Nivaraga Earring",
      slug: "Nivaraga-Earring",
      category: "Earrings",
      gallery: [],
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969479856andrew-hutchings-Asngw4A5_tM-unsplash-removebg-preview.png?alt=media&token=cc88b966-286e-49d6-bd1c-264ec815ec39",
      countInStock: 101,
      material: "Gold",
      rating: 4.5,
      numReviews: 4,
      description:
        "Radiant is simply the caption that best describes this item and will definitely complete any of your looks.",
    },
    {
      name: "Garava necklace",
      slug: "Garava necklace",
      category: "NECKLACES",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969596389sabrianna-u1Hv_erOQH0-unsplash.png?alt=media&token=b1de1a27-068d-4cd7-a24d-b549f514d972",
      price: 50,
      countInStock: 5,
      material: "silver",
      gallery: [],
      rating: 3.0,
      numReviews: 9,
      description:
        "Radiant is simply the caption that best describes this item and will definitely complete any of your looks.",
    },
    {
      name: "Tag watch",
      slug: "tag-watch",
      category: "WATCHES",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654968503622pexels-pixabay-364822.png?alt=media&token=73ebc4d3-ff43-484e-b9cd-14f18710fab5",
      price: 120,
      countInStock: 10,
      material: "Silver",
      gallery: [],
      rating: 2.5,
      numReviews: 6,
      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
    },
    {
      name: "Cianaga Shoes",
      slug: "Cianaga Shoes",
      category: "Shoes",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969785257gavin-allanwood-ndpX28miBtE-unsplash.png?alt=media&token=a2226fcf-4564-4a14-868b-19b1fda97f95",
      price: 120,
      countInStock: 10,
      material: "Sweat",
      numReviews: 5,
      gallery: [],
      rating: 4.5,

      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
    },
    {
      name: "Burchory ring",
      slug: "Burchory ring",
      category: "Rings",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969943903sabrianna-NhrcL_C0sFA-unsplash.png?alt=media&token=e55cc7d6-717a-4f27-b9ca-1b0fd6503797",
      price: 120,
      countInStock: 10,
      numReviews: 5,
      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
      gallery: [],
      material: "Gold",
      rating: 4.5,
    },
    {
      name: "Alvaro Serrano Bag",
      slug: "Alvaro Serrano Bag",
      category: "Bags",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654970141986alvaro-serrano-pFLNV4gkXsc-unsplash-removebg-preview.png?alt=media&token=f7d3c9cd-2b36-4b7a-91ca-5cfe7e4fb0c5",
      price: 120,
      countInStock: 10,
      numReviews: 5,
      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
      gallery: [],
      material: "Leather",
      rating: 4.5,
    },
    {
      name: "Uquiche Ring",
      slug: "Uquiche Ring",
      category: "Rings",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654970740605antonio-uquiche-xD_XnntwCw0-unsplash-removebg-preview.png?alt=media&token=7e78a011-0b1d-4553-a026-5195f6ea74e0",
      price: 120,
      countInStock: 10,
      numReviews: 5,
      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
      gallery: [],
      material: "Silver",
      rating: 4.5,
    },
    {
      name: "Bulbul Necklace",
      slug: "Bulbul Necklace",
      category: "Necklaces",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654970455690bulbul-ahmed-QFWGnLHnBNQ-unsplash__1_-removebg-preview.png?alt=media&token=9feb1ecc-65da-4bf5-9391-979083f15f88",
      price: 120,
      countInStock: 10,
      material: "Gold",
      rating: 3.5,
      numReviews: 1,
      gallery: [],
      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
    },
    {
      name: "Miao Xiang Earring",
      slug: "Miao Xiang Earring",
      category: "shirts",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654970297950miao-xiang-leFR7Fj3J6I-unsplash.png?alt=media&token=edd455fa-b80e-4453-a3b1-dfec4032b760",
      price: 120,
      countInStock: 10,
      gallery: [],
      material: "Gold",
      rating: 4.0,
      numReviews: 20,
      description:
        "This is is currently the best in the market, get peace with this quality piece",
    },

    {
      name: "Nivaraga Earring",
      slug: "Nivaraga-Earring",
      category: "Earrings",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969479856andrew-hutchings-Asngw4A5_tM-unsplash-removebg-preview.png?alt=media&token=cc88b966-286e-49d6-bd1c-264ec815ec39",
      price: 120,
      countInStock: 10,
      material: "Leather",
      rating: 4.5,
      numReviews: 10,
      gallery: [],
      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
    },
    {
      name: "Neveta Bag",
      slug: "Neveta Bag",
      category: "Bags",
      gallery: [],
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969025672arno-senoner-oCXVxwTFwqE-unsplash-removebg-preview.png?alt=media&token=d2782f30-6239-4d63-ae9a-ce2587217547",
      price: 20,
      countInStock: 10,
      material: "Leather",
      rating: 4.5,
      numReviews: 10,
      description:
        "This portable bag is crafted from tender calf leather and is refreshed with a radiant red colorway.",
    },
    {
      name: "Nivaraga Earring",
      slug: "Nivaraga-Earring",
      category: "Earrings",
      gallery: [],
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969479856andrew-hutchings-Asngw4A5_tM-unsplash-removebg-preview.png?alt=media&token=cc88b966-286e-49d6-bd1c-264ec815ec39",
      countInStock: 101,
      material: "Gold",
      rating: 4.5,
      numReviews: 4,
      description:
        "Radiant is simply the caption that best describes this item and will definitely complete any of your looks.",
    },
    {
      name: "Garava necklace",
      slug: "Garava necklace",
      category: "NECKLACES",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969596389sabrianna-u1Hv_erOQH0-unsplash.png?alt=media&token=b1de1a27-068d-4cd7-a24d-b549f514d972",
      price: 50,
      countInStock: 5,
      material: "silver",
      gallery: [],
      rating: 3.0,
      numReviews: 9,
      description:
        "Radiant is simply the caption that best describes this item and will definitely complete any of your looks.",
    },
    {
      name: "Tag watch",
      slug: "tag-watch",
      category: "WATCHES",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654968503622pexels-pixabay-364822.png?alt=media&token=73ebc4d3-ff43-484e-b9cd-14f18710fab5",
      price: 120,
      countInStock: 10,
      material: "Silver",
      gallery: [],
      rating: 2.5,
      numReviews: 6,
      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
    },
    {
      name: "Cianaga Shoes",
      slug: "Cianaga Shoes",
      category: "Shoes",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969785257gavin-allanwood-ndpX28miBtE-unsplash.png?alt=media&token=a2226fcf-4564-4a14-868b-19b1fda97f95",
      price: 120,
      countInStock: 10,
      material: "Sweat",
      numReviews: 5,
      gallery: [],
      rating: 4.5,

      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
    },
    {
      name: "Burchory ring",
      slug: "Burchory ring",
      category: "Rings",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969943903sabrianna-NhrcL_C0sFA-unsplash.png?alt=media&token=e55cc7d6-717a-4f27-b9ca-1b0fd6503797",
      price: 120,
      countInStock: 10,
      numReviews: 5,
      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
      gallery: [],
      material: "Gold",
      rating: 4.5,
    },
    {
      name: "Alvaro Serrano Bag",
      slug: "Alvaro Serrano Bag",
      category: "Bags",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654970141986alvaro-serrano-pFLNV4gkXsc-unsplash-removebg-preview.png?alt=media&token=f7d3c9cd-2b36-4b7a-91ca-5cfe7e4fb0c5",
      price: 120,
      countInStock: 10,
      numReviews: 5,
      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
      gallery: [],
      material: "Leather",
      rating: 4.5,
    },
    {
      name: "Uquiche Ring",
      slug: "Uquiche Ring",
      category: "Rings",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654970740605antonio-uquiche-xD_XnntwCw0-unsplash-removebg-preview.png?alt=media&token=7e78a011-0b1d-4553-a026-5195f6ea74e0",
      price: 120,
      countInStock: 10,
      numReviews: 5,
      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
      gallery: [],
      material: "Silver",
      rating: 4.5,
    },
    {
      name: "Bulbul Necklace",
      slug: "Bulbul Necklace",
      category: "Necklaces",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654970455690bulbul-ahmed-QFWGnLHnBNQ-unsplash__1_-removebg-preview.png?alt=media&token=9feb1ecc-65da-4bf5-9391-979083f15f88",
      price: 120,
      countInStock: 10,
      material: "Gold",
      rating: 3.5,
      numReviews: 1,
      gallery: [],
      description:
        "Too good to be ignored is simply the caption that best describes this item and will definitely complete any of your looks.",
    },
    {
      name: "Miao Xiang Earring",
      slug: "Miao Xiang Earring",
      category: "shirts",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654970297950miao-xiang-leFR7Fj3J6I-unsplash.png?alt=media&token=edd455fa-b80e-4453-a3b1-dfec4032b760",
      price: 120,
      countInStock: 10,
      gallery: [],
      material: "Gold",
      rating: 4.0,
      numReviews: 20,
      description:
        "This is is currently the best in the market, get peace with this quality piece",
    },
  ],
};

export default Data;
