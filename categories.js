

import { v4 as uuid } from "uuid";

/**
 * Category Database for Artisans E-commerce.
 * Contains various artisan product categories with details.
 */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Handcrafted Home Decor",
    description: "Unique, handmade items to beautify your living space",
    categoryImage:
      "https://images.unsplash.com/photo-1660796334938-cf0b03be7e6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0aXNhbnMlMjBjcmFmdHxlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    _id: uuid(),
    categoryName: "Jewelry",
    description: "Handcrafted earrings, necklaces, and more",
    categoryImage:
      "https://images.unsplash.com/photo-1571908599538-7e1e6e92b064?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: uuid(),
    categoryName: "Pottery & Ceramics",
    description: "Artisanal pots, vases, and ceramic items",
    categoryImage:
      "https://media.istockphoto.com/id/639487044/photo/hands-of-a-potter-creating-an-earthen-jar.webp?a=1&b=1&s=612x612&w=0&k=20&c=QnEwIt2GyTFvMlG5TFt7KSyMcHBqNhjcf4Lcsn7juEg=",
  }
];
