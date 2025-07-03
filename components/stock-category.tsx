import { StockCategoryItem } from "./stock-category-item";

export function StockCategory() {
    const categories = [
        {
          id: 1,
          title: "Munchies",
          image: "/stock-category-images/munchies.avif",
        },
        {
          id: 2,
          title: "Cold Drinks & Juices",
          image: "/stock-category-images/cold-drinks-juices.avif",
        },
        {
          id: 3,
          title: "Instant & Frozen Food",
          image: "/stock-category-images/instant-frozen-food.avif",
        },
        {
          id: 4,
          title: "Tea, Coffee & Health Drinks",
          image: "/stock-category-images/tea-coffee-health-drinks.avif",
        },
        {
          id: 5,
          title: "Bakery & Biscuits",
          image: "/stock-category-images/bakery-biscuits.avif",
        },
        {
          id: 6,
          title: "Sweet Tooth",
          image: "/stock-category-images/sweet-tooth.avif",
        },
        {
          id: 7,
          title: "Atta, Rice & Dal",
          image: "/stock-category-images/atta-rice-dal.avif",
        },
        {
          id: 8,
          title: "Dry Fruits, Masala & Oil",
          image: "/stock-category-images/dry-fruits-masala-oil.avif",
        },
        {
          id: 9,
          title: "Sauces & Spreads",
          image: "/stock-category-images/sauces-spreads.avif",
        },
        {
          id: 10,
          title: "Chicken, Meat & Fish",
          image: "/stock-category-images/chicken-meat-fish.avif",
        },
        {
          id: 11,
          title: "Paan Corner",
          image: "/stock-category-images/paan-corner.avif",
        },
        {
          id: 12,
          title: "Organic & Premium",
          image: "/stock-category-images/organic-premium.avif",
        },
        {
          id: 13,
          title: "Baby Care",
          image: "/stock-category-images/baby-care.avif",
        },
        {
          id: 14,
          title: "Pharma & Wellness",
          image: "/stock-category-images/pharma-wellness.avif",
        },
        {
          id: 15,
          title: "Cleaning Essentials",
          image: "/stock-category-images/cleaning-essentials.avif",
        },
        {
          id: 16,
          title: "Home & Office",
          image: "/stock-category-images/home-office.avif",
        },
        {
          id: 17,
          title: "Personal Care",
          image: "/stock-category-images/personal-care.avif",
        },
        {
          id: 18,
          title: "Pet Care",
          image: "/stock-category-images/pet-care.avif",
        },
        {
          id: 19,
          title: "Fashion & Accessories",
          image: "/stock-category-images/fashion-accessories.avif",
        },
        {
          id: 20,
          title: "Vegetables & Fruits",
          image: "/stock-category-images/vegetables-fruits.avif",
        },
        {
          id: 21,
          title: "Dairy & Breakfast",
          image: "/stock-category-images/dairy-breakfast.avif",
        },
      ];
      
      
  return (
    <div className="px-3">
      <h2 className="font-bold text-2xl py-3 px-4 mt-3 mb-2">
        Inventory Breakdown
      </h2>
      <div className="grid grid-cols-3">
        {categories.map((category) => {
          return (
            <StockCategoryItem
              key={category.id}
              id={category.id}
              title={category.title}
              image={category.image}
            />
          );
        })}
      </div>
      <div className="my-16"></div>
    </div>
  );
}
