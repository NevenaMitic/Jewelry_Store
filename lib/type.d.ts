// Tip za kolekciju proizvoda
type CollectionType = {
    _id: string;
    title: string;
    products: number;
    image: string;
  };
  
  // Tip za proizvod
  type ProductType = {
    _id: string;
    title: string;
    description: string;
    media: [string];
    category: string;
    collections: [string];
    tags: [string];
    price: number;
    gemstone: string;
    sizes: [string];
    diamondWeight: number;
    createdAt: string;
    updatedAt: string;
  };
  
  //Tip za korisnika
  type UserType = {
    clerkId: string;
    wishlist: [string];
    createdAt: string;
    updatedAt: string;
  };
// Tip za narudžbinu
  type OrderType = {
    shippingAddress: Object;
    _id: string;
    customerClerkId: string;
    products: [OrderItemType]
    shippingRate: string;
    totalAmount: number
  }
  // Tip za stavku narudžbine
  type OrderItemType = {
    product: ProductType;
    color: string;
    size: string;
    quantity: number;
    _id: string;
  }