import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Puma',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'dfljdsnsadkjf',
      category: 'Cup Corn',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Del Monte',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Corn Cob',
      category: 'Cobs',
      image: '/images/p2.jpg',
      price: 100,
      countInStock: 20,
      brand: 'Del Monte',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'PopCorn',
      category: 'PopCorn',
      image: '/images/p3.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Shine',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      name: 'Roasted Corn',
      category: 'Cobs',
      image: '/images/p4.jpg',
      price: 78,
      countInStock: 15,
      brand: 'Shine',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      name: 'Corn Flakes',
      category: 'Corn Flakes',
      image: '/images/p5.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Shine',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Flint Corn',
      category: 'Cobs',
      image: '/images/p6.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Del Monte',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};
export default data;
