import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Clock, Star } from 'lucide-react';
import toast from 'react-hot-toast';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  preparationTime: string;
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    category: 'Breakfast',
    name: 'Dosa',
    description: 'Crispy rice crepe filled with spiced potatoes',
    price: 45,
    image: 'https://images.pexels.com/photos/20422129/pexels-photo-20422129/free-photo-of-food-on-plate-with-bowls-of-sauces.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    preparationTime: '10-15 mins'
  },
  {
    id: '2',
    category: 'Breakfast',
    name: 'Idli Sambar',
    description: 'Steamed rice cakes with lentil soup',
    price: 35,
    image: 'https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_1280.jpg',
    rating: 4.6,
    preparationTime: '5-10 mins'
  },
  {
    id: '3',
    category: 'Breakfast',
    name: 'Pongal',
    description: 'Pongal is a South Indian dish made with rice, lentils, and spices.',
    price: 40,
    image: 'https://avatars.mds.yandex.net/i?id=f2c215207cdcf857232a4fc431d94a8532ad643e-6234058-images-thumbs&n=13',
    rating: 4.3,
    preparationTime: '5-10 mins'
  },
  {
    id: '4',
    category: 'Breakfast',
    name: 'Poori',
    description: 'Poori is a deep-fried Indian bread made from wheat flour.',
    price: 30,
    image: 'https://i.pinimg.com/originals/71/cd/2d/71cd2db88ea0a6884800b97c2cc80258.jpg',
    rating: 4.3,
    preparationTime: '10-15 mins'
  },
  {
    id: '5',
    category: 'Breakfast',
    name: 'Masala Dosa',
    description: 'Masala dosa is a crispy crepe filled with spiced potatoes.',
    price: 50,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/442909756.jpg?k=baa35386ea86d7404f02f7e65a0fe6eecfd09c597e0dfdb84dee3b7f2e888ba9&o=&hp=1',
    rating: 4.3,
    preparationTime: '10-15 mins'
  },
  {
    id: '6',
    category: 'Breakfast',
    name: 'Kichadi',
    description: ' A savory, fluffy dish made from roasted semolina.',
    price: 30,
    image: 'https://www.travelkhana.com/tkblog/wp-content/uploads/sites/2/2016/01/Rava-upma.jpg',
    rating: 4.3,
    preparationTime: '10-15 mins'
  },
  {
    id: '7',
    category: 'Lunch',
    name: 'Mutton Biryani',
    description: 'Succulent pieces of tender mutton slow-cooked with aromatic basmati rice, rich spices,royal treat.',
    price: 250,
    image: 'https://avatars.dzeninfra.ru/get-zen_doc/10137773/pub_64b637b7682d3d25e14d12aa_64b63d4dcd666a6fb18190ab/scale_1200',
    rating: 4.5,
    preparationTime: '20-25 mins'
  },
  {
    id: '8',
    category: 'Lunch',
    name: 'Meals',
    description: '"Meals" is a South Indian platter with rice, sambar, vegetables, and curd.',
    price: 60,
    image: 'https://i.pinimg.com/originals/21/81/62/218162aacbde4c60a49c3f7f2bf49975.jpg',
    rating: 4.7,
    preparationTime: '20-25 mins'
  },
  {
    id: '9',
    category: 'Lunch',
    name: 'Parotta',
    description: 'Parotta is a flaky, layered South Indian flatbread made from refined flour.',
    price: 30,
    image: 'https://i.pinimg.com/originals/1e/e6/41/1ee641912027171731f24d5ea76b1b17.png',
    rating: 4.9,
    preparationTime: '20-25 mins'
  },
  {
    id: '10',
    category: 'Lunch',
    name: 'Chicken Biryani',
    description: ' Juicy chicken pieces marinated in spices, layered with fragrant basmati rice, savory delight.',
    price: 120,
    image: 'https://avatars.mds.yandex.net/i?id=8b8728b3a163b6758cbb53afead16ab6d87fcacd-8186184-images-thumbs&n=13',
    rating: 4.4,
    preparationTime: '5-10 mins'
  },
  {
    id: '11',
    category: 'Lunch',
    name: 'Chicken Rice',
    description: 'Chicken rice is a dish of rice cooked with seasoned chicken and spices.',
    price: 100,
    image: 'https://avatars.mds.yandex.net/i?id=ad9040bd5f3edec22ed29e20035423e5_l-7543737-images-thumbs&ref=rim&n=13&w=1280&h=720',
    rating: 4.9,
    preparationTime: '5-10 mins'
  },
  {
    id: '12',
    category: 'Beverages',
    name: 'Badam Milk',
    description: 'Creamy, sweet milk infused with ground almonds and a hint of cardamom.',
    price: 25,
    image: 'https://avatars.mds.yandex.net/i?id=6a946bfb984e2990be678f1af13226f2ecb7db4e-11379499-images-thumbs&n=13',
    rating: 4.8,
    preparationTime: '5-10 mins'
  },
  {
    id: '13',
    category: 'Beverages',
    name: 'Rose Milk',
    description: 'Refreshing, sweet milk flavored with rose syrup for a delicate floral taste.',
    price: 30,
    image: 'https://avatars.mds.yandex.net/i?id=366fefe02ca2870c23ee4dc6619c34a6-6946760-images-thumbs&n=13',
    rating: 4.8,
    preparationTime: '5-10 mins'
  },
  {
    id: '14',
    category: 'Snacks',
    name: 'Streamed Momos',
    description: 'Soft, delicate dumplings filled with spiced meat, served hot.',
    price: 70,
    image: 'https://avatars.mds.yandex.net/i?id=e1380e2094aebe138c5353e234f27f1f-5255540-images-thumbs&n=13 ',
    rating: 4.9,
    preparationTime: '5-10 mins'
  },
  {
    id: '15',
    category: 'Snacks',
    name: 'Veg puff',
    description: 'A flaky pastry stuffed with a spiced vegetable filling.',
    price: 15,
    image: 'https://avatars.mds.yandex.net/i?id=3c12a2fde6cc86bfb3a53b21a1ccd6a7b473ba5c-4598782-images-thumbs&n=13',
    rating: 4.8,
    preparationTime: '5-10 mins'
  },
  {
    id: '16',
    category: 'Snacks',
    name: 'Veg Roll',
    description: 'A soft wrap filled with spiced vegetables, rolled up flavorful.',
    price: 20,
    image: 'https://avatars.mds.yandex.net/i?id=8e29412fe122fdb21979275df4a40dcb1c2207c3597a8da4-12752609-images-thumbs&n=13',
    rating: 4.9,
    preparationTime: '5-10 mins'
  },
  {
    id: '17',
    category: 'Snacks',
    name: 'Egg Puff',
    description: 'A flaky pastry filled with a savory, spiced egg and spice mixture.',
    price: 25,
    image: 'https://avatars.mds.yandex.net/i?id=2db12262347047f8a7949a2178e7ced6f5ba81a4-10150478-images-thumbs&n=13',
    rating: 4.7,
    preparationTime: '5-10 mins'
  },
  {
    id: '18',
    category: 'Birthday Cakes',
    name: 'Black Forest',
    description: 'A rich chocolate cake filled with layers of whipped cream, cherries, and chocolate shavings.',
    price: 390,
    image: 'https://avatars.mds.yandex.net/i?id=ad910cf6f66a94281d81b98ae9b64dcb3e7f0545-6297400-images-thumbs&n=13',
    rating: 4.6,
    preparationTime: '5-10 mins'
  },
  {
    id: '19',
    category: 'Birthday Cakes',
    name: 'White Forest',
    description: 'A creamy, light cake made with layers of white chocolate, whipped cream.',
    price: 380,
    image: 'https://theboiledpeanuts.com/wp-content/uploads/2020/10/white-forest-cake-awesome-white-forest-cake-with-curls-of-white-forest-cake.jpg',
    rating: 4.4,
    preparationTime: '5-10 mins'
  },
  {
    id: '20',
    category: 'Birthday Cakes',
    name: 'Chocolate Cake',
    description: 'A rich, moist cake made with chocolate, often layered with creamy frosting.',
    price: 450,
    image: 'https://kerrygold.com/wp-content/uploads/2017/03/rsz_shutterstock_394680466.jpg',
    rating: 4.9,
    preparationTime: '5-10 mins'
  },
  {
    id: '21',
    category: 'Tea and Coffee',
    name: 'Tea',
    description: 'A hot, soothing beverage made by infusing tea leaves with milk.',
    price: 12,
    image: 'https://avatars.mds.yandex.net/i?id=48a638925af052d50e530484f34839055b1df5e7-10114046-images-thumbs&n=13',
    rating: 4.9,
    preparationTime: '5-10 mins'
  },
  {
    id: '22',
    category: 'Tea and Coffee',
    name: 'Coffee',
    description: 'A smooth coffee made by mixing brewed coffee with hot milk and sugar.',
    price: 20,
    image: 'https://avatars.mds.yandex.net/i?id=57ad32c60e7f92bb490d2491f05c93d3c1a5e707-11005614-images-thumbs&n=13',
    rating: 4.9,
    preparationTime: '5-10 mins'
  },
  {
    id: '23',
    category: 'Tea and Coffee',
    name: 'Milk',
    description: 'Chicken rice is a dish of rice cooked with seasoned chicken and spices.',
    price: 12,
    image: 'https://avatars.mds.yandex.net/i?id=adf3ca476bc7a4968b3d27bee4843b2ac6dcac5a-8154230-images-thumbs&n=13',
    rating: 4.8,
    preparationTime: '5-10 mins'
  },
  {
    id: '24',
    category: 'Tea and Coffee',
    name: 'Black Tea',
    description: 'A strong, brewed tea with a robust flavor, typically served without milk.',
    price: 12,
    image: 'https://i.pinimg.com/originals/a2/83/a5/a283a51d5ec634b0c49d1759ff309396.jpg',
    rating: 4.4,
    preparationTime: '5-10 mins'
  },
  {
    id: '25',
    category: 'Tea and Coffee',
    name: 'Lemon Tea',
    description: ' A refreshing tea infused with lemon juice and a hint of sweetness.',
    price: 15,
    image: 'https://s1.1zoom.ru/big0/378/Tea_Lemons_Cup_Foliage_Mentha_Saucer_571917_1280x853.jpg',
    rating: 4.9,
    preparationTime: '5-10 mins'
  },
  {
    id: '26',
    category: 'Tea and Coffee',
    name: 'Cold COffee',
    description: 'Refreshing coffee beverage made with chilled coffee, milk, ice, and sweetener, perfect for a cool, creamy treat.',
    price: 50,
    image: 'https://avatars.mds.yandex.net/i?id=c04b243c5be20d5c3ad99b47bf590171846e750f-5548878-images-thumbs&n=13',
    rating: 4.8,
    preparationTime: '5-10 mins'
  },
  {
    id: '27',
    category: 'Birthday Cakes',
    name: 'Chocolate Truffel Cake',
    description: ' Decadent cake with layers of moist, rich chocolate cake filled with creamy chocolate truffle.',
    price: 500,
    image: 'https://avatars.mds.yandex.net/i?id=28fd66498e3cdcbabcff008a4de35bed00c532e0-10814666-images-thumbs&n=13',
    rating: 4.9,
    preparationTime: '5-10 mins'
  },
  {
    id: '28',
    category: 'Birthday Cakes',
    name: 'Straberry Cake',
    description: 'A moist cake infused with fresh strawberries and topped with whipped cream .',
    price: 400,
    image: 'https://avatars.mds.yandex.net/i?id=93c7dd4fb236e3dca68045cd180bed915f615aec-10160311-images-thumbs&n=13',
    rating: 4.3,
    preparationTime: '5-10 mins'
  },
  {
    id: '29',
    category: 'Birthday Cakes',
    name: 'Honey Cake',
    description: 'A soft, sweet cake made with honey, giving it a rich, moist texture.',
    price: 450,
    image: 'https://i.pinimg.com/originals/d3/8b/0f/d38b0f2477aedd9c95dd6d3def22d673.jpg',
    rating: 4.9,
    preparationTime: '5-10 mins'
  },
  {
    id: '30',
    category: 'Birthday Cakes',
    name: 'Green Cake',
    description: 'A moist cake made with tangy green apples, offering a sweet and slightly tart flavor.',
    price: 350,
    image: 'https://avatars.mds.yandex.net/get-mpic/4250892/img_id6442967961414790794.jpeg/orig',
    rating: 4.2,
    preparationTime: '5-10 mins'
  },
  {
    id: '31',
    category: 'Birthday Cakes',
    name: 'Vennila Cake',
    description: ' A light, fluffy cake made with vanilla extract, offering a soft and sweet flavor.',
    price: 300,
    image: 'https://avatars.mds.yandex.net/i?id=4de785ed2b93b1bdac515e306cfa42f18e5bab5d-10108140-images-thumbs&n=13',
    rating: 4.9,
    preparationTime: '5-10 mins'
  },
  {
    id: '32',
    category: 'Birthday Cakes',
    name: 'Butterscotch Cake',
    description: 'A rich, buttery cake with a sweet, caramelized flavor, often topped with butterscotch frosting.',
    price: 500,
    image: 'https://i.ytimg.com/vi/DW3AVHnsn-M/maxresdefault.jpg',
    rating: 4.7,
    preparationTime: '5-10 mins'
  },
  {
    id: '33',
    category: 'Birthday Cakes',
    name: 'Fruit Cake',
    description: 'A dense, spiced cake loaded with mixed dried fruits, nuts.',
    price: 550,
    image: 'https://avatars.mds.yandex.net/i?id=8ae37661693eff4f56b1ec6d7176d2d5a540a26f-12422631-images-thumbs&n=13',
    rating: 4.1,
    preparationTime: '5-10 mins'
  },
  {
    id: '34',
    category: 'Birthday Cakes',
    name: 'Pineapple Cake',
    description: 'Light, fluffy cake filled with pineapple chunks.',
    price: 450,
    image: 'https://avatars.mds.yandex.net/i?id=03c2c9363335b1609021a27a05f0d4a5e67a5530-10115282-images-thumbs&n=13',
    rating: 4.5,
    preparationTime: '5-10 mins'
  },
  {
    id: '35',
    category: 'Birthday Cakes',
    name: 'Cheese Cake',
    description: 'A creamy, rich dessert made with cream cheese.',
    price: 500,
    image: 'https://avatars.mds.yandex.net/i?id=c736d75f44445b6a2b2d2639525d88f80342f89a-12935586-images-thumbs&n=13',
    rating: 4.6,
    preparationTime: '5-10 mins'
  },
  {
    id: '36',
    category: 'Snacks',
    name: 'Samosa',
    description: 'A crispy, deep-fried pastry filled with spiced potatoes, peas.',
    price: 10,
    image: 'https://avatars.mds.yandex.net/i?id=0959fe34735cbab2339bcd47c4de6bb6a57860c2-5233722-images-thumbs&n=13',
    rating: 4.9,
    preparationTime: '5-10 mins'
  },
  {
    id: '37',
    category: 'Snacks',
    name: 'Onion Pakoda',
    description: 'Crispy, deep-fried fritters made with thinly sliced onions,spices.',
    price: 10,
    image: 'https://avatars.mds.yandex.net/i?id=452c9b5c89378855183deb760cd020c980795059-4958973-images-thumbs&n=13',
    rating: 4.8,
    preparationTime: '5-10 mins'
  },
  {
    id: '38',
    category: 'Snacks',
    name: 'Chana Dhal Masala Vada',
    description: 'Crispy fritters made from ground chana dal, spiced with aromatic herbs and deep-fried until golden brown.',
    price: 10,
    image: 'https://avatars.mds.yandex.net/i?id=d35bc5bcdb98f26c54e692a3492a32334d119cc5-10208766-images-thumbs&n=13',
    rating: 4.5,
    preparationTime: '5-10 mins'
  },
  {
    id: '39',
    category: 'Snacks',
    name: 'Vada Pav',
    description: 'A popular Indian street food consisting of a spiced potato fritter (vada) served in a soft bun (pav) with chutneys.',
    price: 10,
    image: 'https://avatars.mds.yandex.net/i?id=2a0000017a0d84a5ba0e460f5d957fcd4c1d-4253558-images-thumbs&n=13',
    rating: 4.7,
    preparationTime: '5-10 mins'
  },
  {
    id: '40',
    category: 'Snacks',
    name: 'Medu Vada',
    description: 'A savory, crispy donut-shaped fritter made from urad dal, often served with chutney and sambar.',
    price: 10,
    image: 'https://avatars.mds.yandex.net/i?id=744842e5205e954ba4a8282899b7358f0a3fa5b7-13216520-images-thumbs&n=13',
    rating: 4.9,
    preparationTime: '5-10 mins'
  },
  {
    id: '41',
    category: 'Beverages',
    name: 'Apple Juice',
    description: ' A refreshing drink made from pressed or squeezed apples, often sweetened and served chilled.',
    price: 45,
    image: 'https://avatars.mds.yandex.net/i?id=a69ed127930bea9742549a67de760447f95a3ec5-5558053-images-thumbs&n=13',
    rating: 4.8,
    preparationTime: '5-10 mins'
  },
  {
    id: '42',
    category: 'Beverages',
    name: 'Vennila Milkshake',
    description: 'A creamy, sweet beverage made with vanilla ice cream, milk, and a touch of vanilla flavoring.',
    price: 40,
    image: 'https://avatars.mds.yandex.net/i?id=147ea9e8a83adb91a75117e8614eab578c0d0ec7-5876942-images-thumbs&n=13',
    rating: 4.5,
    preparationTime: '5-10 mins'
  },
  {
    id: '43',
    category: 'Beverages',
    name: 'Chocolate Milkshake',
    description: 'A creamy, indulgent drink made with chocolate ice cream, milk, and chocolate syrup.',
    price: 50,
    image: 'https://avatars.mds.yandex.net/i?id=272d6a82873ff81809d00283fd299ed118e43984-8437558-images-thumbs&n=13',
    rating: 4.9,
    preparationTime: '5-10 mins'
  },
  {
    id: '44',
    category: 'Beverages',
    name: 'Lasi',
    description: 'A traditional, creamy yogurt-based drink, often flavored with fruits.',
    price: 30,
    image: 'https://avatars.mds.yandex.net/i?id=cbbc6f984fe07a30bd39ee66509d477ea74be871-12155438-images-thumbs&n=13',
    rating: 4.8,
    preparationTime: '5-10 mins'
  },
  {
    id: '45',
    category: 'Beverages',
    name: 'Straberry Milkshake',
    description: ' A creamy, sweet drink made with fresh strawberries, milk, and ice cream blended together.',
    price: 45,
    image: 'https://avatars.mds.yandex.net/i?id=cde16725c9d5ea844d901c63727cf9abe3308062192d84c6-13213257-images-thumbs&n=13',
    rating: 4.9,
    preparationTime: '5-10 mins'
  },
  {
    id: '46',
    category: 'Beverages',
    name: 'Watermelon Juice',
    description: 'A refreshing, hydrating drink made by blending fresh watermelon.',
    price: 30,
    image: 'https://avatars.mds.yandex.net/i?id=1b30011cbc0786e7cdbf0b66aa2409a5d2ba0c4c-10340155-images-thumbs&n=13',
    rating: 4.8,
    preparationTime: '5-10 mins'
  },
  {
    id: '47',
    category: 'Beverages',
    name: 'Orange Juice',
    description: 'A refreshing, tangy drink made from freshly squeezed or pressed oranges, typically served chilled.',
    price: 35,
    image: 'https://avatars.mds.yandex.net/i?id=095b92429387f99e5c32c2a8e61a84cdc015d75c-7998332-images-thumbs&n=13',
    rating: 4.9,
    preparationTime: '5-10 mins'
  },
  {
    id: '48',
    category: 'Lunch',
    name: 'Chicken Noodles',
    description: 'Stir-fried noodles mixed with tender chicken pieces with savory sauces and spices..',
    price: 100,
    image: 'https://avatars.mds.yandex.net/i?id=a90257087144c39e38a9b632737e7acd0f9e418a8c272f11-12727852-images-thumbs&n=13',
    rating: 4.7,
    preparationTime: '20-25 mins'
  },
  {
    id: '49',
    category: 'Lunch',
    name: 'Veg Noodles',
    description: 'Stir-fried noodles with a mix of vegetables, seasoned with soy sauce and spices for a savory flavor.',
    price: 100,
    image: 'https://avatars.mds.yandex.net/i?id=760f3ce585ec7f8e79a4dc050ad4d756-5343659-images-thumbs&n=13',
    rating: 4.6,
    preparationTime: '20-25 mins'
  },
  {
    id: '50',
    category: 'Lunch',
    name: 'Vegetable Biryani',
    description: 'A flavorful rice dish cooked with mixed vegetables, aromatic spices.',
    price: 60,
    image: 'https://avatars.mds.yandex.net/i?id=27e543c38de355b08a707fab2cc3bf7427abfd3d-10230107-images-thumbs&n=13',
    rating: 4.9,
    preparationTime: '20-25 mins'
  },
  {
    id: '51',
    category: 'Lunch',
    name: 'Curd Rice',
    description: 'Creamy, chilled rice mixed with fresh yogurt, tempered with mustard seeds, curry leaves,  refreshing dish.',
    price: 40,
    image: 'https://avatars.mds.yandex.net/i?id=14cfa25a0b93434cd87aed0952fc4edc-5433873-images-thumbs&n=13',
    rating: 4.9,
    preparationTime: '20-25 mins'
  },
  {
    id: '52',
    category: 'Lunch',
    name: 'Sambar Rice',
    description: 'Rice: A comforting dish made with rice cooked in a tangy and spicy lentil-based sambar.',
    price: 40,
    image: 'https://avatars.mds.yandex.net/i?id=537f513b4debcfc092ba87909ccf4b0715c856f0-10018235-images-thumbs&n=13',
    rating: 4.8,
    preparationTime: '20-25 mins'
  },
  {
    id: '53',
    category: 'Lunch',
    name: 'Lemon Rice',
    description: 'A tangy rice dish flavored with lemon juice, tempered with mustard seeds, curry leaves, and spices.',
    price: 40,
    image: 'https://avatars.mds.yandex.net/i?id=2101a5d941f567df002e9f61647393268bdaf829-4688175-images-thumbs&n=13',
    rating: 4.5,
    preparationTime: '20-25 mins'
  },
  {
    id: '54',
    category: 'Lunch',
    name: 'Ghee Rice',
    description: 'Fragrant rice cooked with ghee, aromatic spices, and sometimes nuts, offering a rich and flavorful dish.',
    price: 40,
    image: 'https://avatars.mds.yandex.net/i?id=16ff9e34fe268e8614c21e43827f232c30cb1368-3163703-images-thumbs&n=13',
    rating: 4.9,
    preparationTime: '20-25 mins'
  },
  {
    id: '55',
    category: 'Lunch',
    name: 'Veg Rice',
    description: 'A simple rice dish cooked with mixed vegetables and seasoned with spices for a mild, flavorful taste',
    price: 40,
    image: 'https://avatars.mds.yandex.net/i?id=fa60d89dacf9b489894db612e6a9b1a550b579c9-4613717-images-thumbs&n=13',
    rating: 4.8,
    preparationTime: '20-25 mins'
  },
  {
    id: '56',
    category: 'Lunch',
    name: 'Tomato Rice',
    description: 'A flavorful rice dish made with tomatoes, spices, and herbs, offering a tangy and aromatic taste.',
    price: 40,
    image: 'https://avatars.mds.yandex.net/i?id=80b6c7cb7e9f8b2a8471a1bdbd2a738888a9eb01-10071204-images-thumbs&n=13',
    rating: 4.6,
    preparationTime: '20-25 mins'
  },
  {
    id: '57',
    category: 'Lunch',
    name: 'Kothu Parotta',
    description: ' A South Indian dish made by shredding parotta with meat, and spices.',
    price: 90,
    image: 'https://avatars.mds.yandex.net/i?id=90ca5ed5a210e35fa31e42b2005ec176-5656961-images-thumbs&n=13',
    rating: 4.8,
    preparationTime: '20-25 mins'
  },
  {
    id: '58',
    category: 'Lunch',
    name: 'Chicken 65',
    description: ' A popular spicy, deep-fried chicken dish marinated in a blend of spices.',
    price: 90,
    image: 'https://avatars.mds.yandex.net/i?id=19425df63ef8765a036fd8016066d74748b01edce5428bd1-4575357-images-thumbs&n=13',
    rating: 4.9,
    preparationTime: '20-25 mins'
  },
  {
    id: '59',
    category: 'Lunch',
    name: 'Nool Parotta',
    description: 'A type of soft, stringy flatbread made from dough, typically served with curries.',
    price: 50,
    image: 'https://avatars.mds.yandex.net/i?id=20d3bc3000b071af3a8a8dde039ffd311149eeac-9214146-images-thumbs&n=13',
    rating: 4.6,
    preparationTime: '20-25 mins'
  },
  {
    id: '60',
    category: 'Lunch',
    name: 'Egg Biryani',
    description: 'A fragrant rice dish cooked with spiced rice and boiled eggs, offering a flavorful and hearty meal.',
    price: 70,
    image: 'https://avatars.mds.yandex.net/i?id=301e7ae29f8bbdce56d558d266186c4975dc3362-9284609-images-thumbs&n=13',
    rating: 4.9,
    preparationTime: '20-25 mins'
  },
  {
    id: '61',
    category: 'Snacks',
    name: 'Masala Poori',
    description: 'Masala Poori is a spicy, crispy Indian fried bread enjoyed with yogurt or curry.',
    price: 30,
    image: 'https://avatars.mds.yandex.net/i?id=5e43a51216fa4a3ed3ed75610b042ad3868159b1-9099802-images-thumbs&n=13',
    rating: 4.6,
    preparationTime: '10-15 mins'
  },
  {
    id: '62',
    category: 'Snacks',
    name: 'Paani Poori',
    description: 'Paani Poori is a popular Indian street snack with crispy hollow shells filled with spicy, tangy water and savory fillings.',
    price: 30,
    image: 'https://i.ytimg.com/vi/S4szaAUGLSs/maxresdefault.jpg',
    rating: 4.6,
    preparationTime: '10-15 mins'
  },
  {
    id: '63',
    category: 'Snacks',
    name: 'Mushroom Chaat',
    description: 'Paani Poori is a popular Indian street snack with crispy hollow shells filled with spicy, tangy water and savory fillings.',
    price: 30,
    image: 'https://i.ytimg.com/vi/aRKF4JlWWm8/maxresdefault.jpg',
    rating: 4.6,
    preparationTime: '10-15 mins'
  },
  {
    id: '64',
    category: 'Snacks',
    name: 'Sandwhich ',
    description: 'A sandwich is a quick, versatile meal made with bread and various fillings like veggies, cheese, or meat.',
    price: 40,
    image: 'https://avatars.mds.yandex.net/i?id=0d78c24f6165eafc0581b95149f22cb3cad7b8ab16ee7c4b-12923554-images-thumbs&n=13',
    rating: 4.6,
    preparationTime: '10-15 mins'
  },
  {
    id: '65',
    category: 'Snacks',
    name: 'French Fries',
    description: 'French fries are crispy, golden potato sticks, usually salted and enjoyed as a popular snack or side.',
    price: 60,
    image: 'https://avatars.mds.yandex.net/i?id=cdd98272705057512e62b1c5f960b59142cf6d69-9224048-images-thumbs&n=13',
    rating: 4.9,
    preparationTime: '10-15 mins'
  },
  {
    id: '66',
    category: 'Snacks',
    name: 'Bread Omelette',
    description: 'Bread omelette is a simple dish made by cooking an omelette with bread slices, often served as a quick.',
    price: 40,
    image: 'https://avatars.mds.yandex.net/i?id=9ee2e7a7f49403367d58c115c3a6060aa3437a1f-8224882-images-thumbs&n=13',
    rating: 4.7,
    preparationTime: '10-15 mins'
  },
  {
    id: '67',
    category: 'Breakfast',
    name: 'Aapam',
    description: 'Soft, fluffy rice pancakes with crispy edges, perfect with stew or coconut milk.',
    price: 50,
    image: 'https://i.ytimg.com/vi/FWiR2-BRZSg/maxresdefault.jpg',
    rating: 4.8,
    preparationTime: '10-15 mins'
  },
  {
    id: '68',
    category: 'Breakfast',
    name: 'Idiyappam',
    description: ' Soft, steamed rice noodles served plain or with coconut milk for a light and tasty meal.',
    price: 40,
    image: 'https://i.ytimg.com/vi/T8RlJ7wBPG8/maxresdefault.jpg',
    rating: 4.9,
    preparationTime: '10-15 mins'
  },
  {
    id: '69',
    category: 'Breakfast',
    name: 'Onion Oothappam',
    description: 'Onion Oothappam is a thick, savory topped with sautéed onions and spices, usually served with chutneys and sambar.',
    price: 40,
    image: 'https://avatars.mds.yandex.net/i?id=f5374e9717ae8bcab0fcd593357387aba0517787-7754520-images-thumbs&n=13',
    rating: 4.5,
    preparationTime: '10-15 mins'
  },
  {
    id: '70',
    category: 'Breakfast',
    name: 'Ghee Roast',
    description: 'Crisp, spicy South Indian pancake or flatbread cooked with ghee and flavored with aromatic spices, served with chutney or sambar.',
    price: 45,
    image: 'https://avatars.mds.yandex.net/i?id=428fb39e44e92441fcd028656c5aaffc260a1be4-4937949-images-thumbs&n=13',
    rating: 4.6,
    preparationTime: '10-15 mins'
  },
  {
    id: '71',
    category: 'Breakfast',
    name: 'Egg Dosa',
    description: 'Egg Dosa is a crispy South Indian dosa topped with a cooked egg, seasoned with spices, and typically served with chutney and sambar.',
    price: 50,
    image: 'https://avatars.mds.yandex.net/i?id=07d7f192c45b8c552a08fc8390c4c3a2-5628603-images-thumbs&n=13',
    rating: 4.8,
    preparationTime: '10-15 mins'
  },
  {
    id: '72',
    category: 'Breakfast',
    name: 'Wheat Dosa',
    description: 'Wheat Dosa is a healthy, crispy pancake made from wheat flour, typically served with chutney or sambar in South Indian cuisine.',
    price: 40,
    image: 'https://avatars.mds.yandex.net/i?id=b68a5d0f9bb84ae16055de1f04fc43f7-5362604-images-thumbs&n=13',
    rating: 4.7,
    preparationTime: '10-15 mins'
  },
  {
    id: '73',
    category: 'Breakfast',
    name: 'Paniyaram',
    description: 'Paniyaram is a savory South Indian snack made from fermented rice and lentil batter, cooked in a special pan to form small, crispy dumplings.',
    price: 45,
    image: 'https://avatars.mds.yandex.net/i?id=5ca4b08c8b1531563903fa9c1612fc58cf5bf6e4-7544473-images-thumbs&n=13',
    rating: 5,
    preparationTime: '10-15 mins'
  },
  {
    id: '74',
    category: 'Breakfast',
    name: 'Neer Dosa',
    description: 'Thin, delicate rice crepes made from fermented rice batter and water. They are perfect for soaking up flavorful curries, chutneys, or sambar',
    price: 45,
    image: 'https://avatars.mds.yandex.net/i?id=77f206207b45e8d3ecb62e4362d1f1dda1553c0f-5987336-images-thumbs&n=13',
    rating: 4.8,
    preparationTime: '10-15 mins'
  },
  {
    id: '75',
    category: 'Breakfast',
    name: 'Oothapam',
    description: 'Oothappam is a thick, fluffy South Indian pancake made from fermented rice and lentil batter and served with chutney and sambar.',
    price: 40,
    image: 'https://avatars.mds.yandex.net/i?id=121f0fb7a367d4683a4bd264c9d19bcf5f6264bb-10700734-images-thumbs&n=13',
    rating: 4.6,
    preparationTime: '10-15 mins'
  },
  {
    id: '76',
    category: 'Breakfast',
    name: 'Ragi Dosa',
    description: 'Ragi Dosa is a healthy, crispy pancake made from finger millet flour, often served with chutney and sambar.',
    price: 45,
    image: 'https://avatars.mds.yandex.net/i?id=47ba6d9910eb5db9474403a98495bb5380ccdbdd-9146551-images-thumbs&n=13',
    rating: 4.8,
    preparationTime: '10-15 mins'
  },
  {
    id: '77',
    category: 'Breakfast',
    name: 'Semiya Kichadi',
    description: 'Semiya Kichadi is a savory dish made with vermicelli, vegetables, and spices.',
    price: 30,
    image: 'https://avatars.mds.yandex.net/i?id=6e69ae6bc2532278690183133491b4f1ffc08cbc-12384307-images-thumbs&n=13',
    rating: 4.3,
    preparationTime: '10-15 mins'
  },
  {
    id: '78',
    category: 'Breakfast',
    name: 'Podi Idly',
    description: 'Podi Idly is a popular South Indian dish where steamed idlis are coated with a spicy, flavorful powder.',
    price: 45,
    image: 'https://avatars.mds.yandex.net/i?id=c93230fecd2e617105071e3c0d95bcd21ccbd6ad-5220483-images-thumbs&n=13',
    rating: 4.9,
    preparationTime: '10-15 mins'
  },
  {
    id: '79',
    category: 'Tea and Coffee',
    name: 'Filter Coffee',
    description: 'Filter coffee is a strong, brewed coffee served with milk and sugar.',
    price: 30,
    image: 'https://avatars.mds.yandex.net/i?id=ac28ce7242e7b930274d720212d1b2d7d90b1c26-9181286-images-thumbs&n=13',
    rating: 4.9,
    preparationTime: '5-10 mins'
  },
  {
    id: '80',
    category: 'Tea and Coffee',
    name: 'Masala Tea',
    description: 'Masala tea is a spiced Indian tea brewed with a mix of aromatic spices like cardamom, ginger, and cinnamon.',
    price: 15,
    image: 'https://i.ytimg.com/vi/LVxxc144rqg/maxresdefault.jpg',
    rating: 4.8,
    preparationTime: '5-10 mins'
  },
  {
    id: '81',
    category: 'Tea and Coffee',
    name: 'Green Tea',
    description: 'Green tea is a light, herbal tea made from unoxidized tea leaves, known for its fresh taste and health benefits.',
    price: 15,
    image: 'https://avatars.mds.yandex.net/i?id=f97524a2a7dbf127730b482b04844db5a5cfca81ca704b67-12423122-images-thumbs&n=13',
    rating: 4.8,
    preparationTime: '5-10 mins'
  },

];

const categories = [
  'All',
  'Breakfast',
  'Lunch',
  'Beverages',
  'Snacks',
  'Birthday Cakes',
  'Tea and Coffee'
];
const convertToINR = (price: number) => Math.round(price);
function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();

  const filteredItems = menuItems.filter(
    item => selectedCategory === 'All' || item.category === selectedCategory
  );

  const handleAddToCart = (item: MenuItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: convertToINR(item.price)
    });
    toast.success(`Added ${item.name} to cart!`);
  };

  

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Categories */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-4 pb-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-[#e0a400] text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div key={item.id} className="card overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-49 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <div className="flex items-center text-yellow-500">
                  <Star size={16} className="fill-current" />
                  <span className="ml-1 text-sm">{item.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <div className="flex items-center text-gray-500 mb-4">
                <Clock size={16} />
                <span className="ml-1 text-sm">{item.preparationTime}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Rs.{item.price.toFixed(2)}</span>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;