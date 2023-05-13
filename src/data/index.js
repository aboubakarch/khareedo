export const category = [
  {
    id: 1,
    name: 'T-Shirts',
  },
  {
    id: 2,
    name: 'Hoodies',
  },
  {
    id: 3,
    name: 'Jacket',
  },
  {
    id: 4,
    name: 'Shoes',
  },
];

export const products = [
  {
    id: 1,
    title: 'Polo Shirt',
    img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    price: '$150',
    category: 1,
    rating: 5,
  },
  {
    id: 2,
    title: '705 Black',
    img: 'https://images.unsplash.com/photo-1618354691551-44de113f0164?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHQlMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    price: '$80',
    category: 1,
    rating: 2,
  },
  {
    id: 3,
    title: 'Black Hoodie',
    img: 'https://media.istockphoto.com/id/1142211733/photo/front-of-sweatshirt-with-hood-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=inMPwtP-ebqhXD9_A3bHETPkyC37x0rFNSLYgf6rLMM=',
    price: '$290',
    category: 2,
    rating: 3,
  },
  {
    id: 4,
    title: 'Nike Green',
    img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    price: '$320',
    category: 4,
    rating: 7,
  },
  {
    id: 5,
    title: 'Pack of Six',
    img: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    price: '$170',
    category: 1,
    rating: 5,
  },
  {
    id: 6,
    title: 'Solid Blue',
    img: 'https://media.istockphoto.com/id/1319572197/photo/mens-hooded-jacket-for-your-design-mockup-for-print.jpg?s=612x612&w=0&k=20&c=c3n5O6D_gKpiX7zrN-K2wvDBYNuf9VMwUUysBg3TjkU=',
    price: '$210',
    category: 2,
    rating: 4,
  },
  {
    id: 7,
    title: 'Dark Green',
    img: 'https://media.istockphoto.com/id/1142211901/photo/front-of-sweatshirt-with-hood-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=-MrAs2qu2QXsZyHR5loq7ZzX_pl-uy7JfK6KKqWEs6o=',
    price: '$240',
    category: 2,
    rating: 8,
  },
  {
    id: 8,
    title: 'Solid White',
    img: 'https://images.unsplash.com/photo-1593526424177-9c9c7f68d4f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHQlMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    price: '$210',
    category: 1,
    rating: 6,
  },
  {
    id: 9,
    title: 'Maroon Wedges',
    img: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    price: '$410',
    category: 4,
    rating: 10,
  },
  {
    id: 10,
    title: 'White Jogers',
    img: 'https://media.istockphoto.com/id/695474472/photo/overhead-shot-of-white-sneakers-on-pink-background.jpg?s=612x612&w=0&k=20&c=GzsXYIfYMrZ2ZHXvM_rImCnBJkjZhgTJOxdMPLOJ22s=',
    price: '$190',
    category: 4,
    rating: 7,
  },
  {
    id: 11,
    title: 'High Heels',
    img: 'https://media.istockphoto.com/id/627372978/photo/high-heels-view-from-above.jpg?s=612x612&w=0&k=20&c=2bgND2FvVyHmpdnocK97vN52P7uwT14F6-WNRV1WKKc=',
    price: '$480',
    category: 4,
    rating: 8,
  },
  {
    id: 12,
    title: 'Gray Style',
    img: 'https://media.istockphoto.com/id/514571758/photo/photo-of-gray-hoody-holding-on-wood-background-vertical-blank.jpg?s=612x612&w=0&k=20&c=eglfsRaTE1qdNrdoqtS_r2Hq-htL5ZqcUCGfsNc8NhU=',
    price: '$230',
    category: 2,
    rating: 7,
  },
];

export const sortProductDescByRating = (numberOfProducts = 8) => {
  const prods = products.sort((a, b) => b.rating - a.rating);
  return prods.slice(0, numberOfProducts);
};

const appendCategoryNames = (bestSeller) => {
  return bestSeller.map((item) => {
    const cat = category.find((cat) => cat.id === item.category);
    return { ...item, category: cat.name };
  });
};

export const getBestSeller = () => {
  const bestSeller = sortProductDescByRating();
  return appendCategoryNames(bestSeller);
};

export const getBestSellerByCategoryId = (id) => {
  const bestSeller = sortProductDescByRating();
  const prods = bestSeller.filter((item) => item.category === id);
  return appendCategoryNames(prods);
};
