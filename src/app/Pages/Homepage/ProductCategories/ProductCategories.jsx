import Image from "next/image";
import React from "react";

const ProductCategories = () => {
  const Categories = [
    {
      id: 1,
      name: "Grains",
      imageUrl: "https://i.ibb.co/HFqNfdP/grains.jpg",
      subcategories: [
        {
          id: 101,
          name: "Rice",
          types: ["Basmati", "Aman", "Boro", "IRRI", "Miniket"],
        },
        {
          id: 102,
          name: "Wheat",
          types: ["Local Wheat", "Hybrid Wheat"],
        },
        {
          id: 103,
          name: "Maize",
          types: ["Yellow Maize", "White Maize"],
        },
      ],
    },
    {
      id: 2,
      name: "Fibers",
      imageUrl: "https://i.ibb.co/ZVPcH5Z/fibers.jpg",
      subcategories: [
        {
          id: 201,
          name: "Jute",
          types: ["Tossa Jute", "White Jute", "Mesta"],
        },
        {
          id: 202,
          name: "Cotton",
          types: ["Upland Cotton", "Desi Cotton"],
        },
      ],
    },
    {
      id: 3,
      name: "Fruits",
      imageUrl: "https://i.ibb.co/FhKh4LW/fruits.jpg",
      subcategories: [
        {
          id: 301,
          name: "Mango",
          types: ["Himsagar", "Langra", "Fazli", "Gopalbhog"],
        },
        {
          id: 302,
          name: "Banana",
          types: ["Sabri", "Amritsagar", "Kacha Kola"],
        },
        {
          id: 303,
          name: "Jackfruit",
          types: ["Echors", "Kanthal"],
        },
        {
          id: 304,
          name: "Guava",
          types: ["Local Guava", "Hybrid Guava"],
        },
      ],
    },
    {
      id: 4,
      name: "Vegetables",
      imageUrl: "https://i.ibb.co/k5RfVqM/vegetables.jpg",
      subcategories: [
        {
          id: 401,
          name: "Potato",
          types: ["Diamond", "Granola", "Cardinal"],
        },
        {
          id: 402,
          name: "Brinjal",
          types: ["Round Brinjal", "Long Brinjal"],
        },
        {
          id: 403,
          name: "Tomato",
          types: ["Roma", "Cherry Tomato"],
        },
        {
          id: 404,
          name: "Cabbage",
          types: ["Green Cabbage", "Red Cabbage"],
        },
      ],
    },
    {
      id: 5,
      name: "Fish",
      imageUrl: "https://i.ibb.co/JzbxFRC/fish.jpg",
      subcategories: [
        {
          id: 501,
          name: "Freshwater Fish",
          types: ["Rohu", "Catla", "Tilapia", "Pangasius"],
        },
        {
          id: 502,
          name: "Hilsa",
          types: ["River Hilsa", "Sea Hilsa"],
        },
        {
          id: 503,
          name: "Shrimp",
          types: ["Bagda", "Galda"],
        },
      ],
    },
    {
      id: 6,
      name: "Spices",
      imageUrl: "https://i.ibb.co/jH8mM1M/spices.jpg",
      subcategories: [
        {
          id: 601,
          name: "Chili",
          types: ["Green Chili", "Dry Red Chili"],
        },
        {
          id: 602,
          name: "Turmeric",
          types: ["Local Turmeric", "Hybrid Turmeric"],
        },
        {
          id: 603,
          name: "Garlic",
          types: ["Local Garlic", "Imported Garlic"],
        },
        {
          id: 604,
          name: "Ginger",
          types: ["Local Ginger", "Imported Ginger"],
        },
      ],
    },
    {
      id: 7,
      name: "Pulses",
      imageUrl: "https://i.ibb.co/TBcct5K/pulses.jpg",
      subcategories: [
        {
          id: 701,
          name: "Lentils",
          types: ["Red Lentil", "Yellow Lentil"],
        },
        {
          id: 702,
          name: "Chickpeas",
          types: ["Kabuli Chickpeas", "Desi Chickpeas"],
        },
        {
          id: 703,
          name: "Green Gram",
          types: ["Local Green Gram", "Hybrid Green Gram"],
        },
      ],
    },
    {
      id: 8,
      name: "Dairy Products",
      imageUrl: "https://i.ibb.co/sbMsjJN/dairy.jpg",
      subcategories: [
        {
          id: 801,
          name: "Milk",
          types: ["Cow Milk", "Buffalo Milk"],
        },
        {
          id: 802,
          name: "Cheese",
          types: ["Paneer", "Chhana"],
        },
        {
          id: 803,
          name: "Yogurt",
          types: ["Sweet Yogurt", "Plain Yogurt"],
        },
      ],
    },
    {
      id: 9,
      name: "Meat",
      imageUrl: "https://i.ibb.co/gtSS4jS/meats.jpg",
      subcategories: [
        {
          id: 901,
          name: "Beef",
          types: ["Local Beef", "Imported Beef"],
        },
        {
          id: 902,
          name: "Chicken",
          types: ["Broiler Chicken", "Desi Chicken"],
        },
        {
          id: 903,
          name: "Goat Meat",
          types: ["Local Goat Meat", "Imported Goat Meat"],
        },
      ],
    },
  ];

  return (
    <div className="max-w-[1170px] mx-auto mt-10 lg:mt-14 px-3 lg:px-0 mb-10">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-center py-2 text-yellow bg-green-600 inline-block px-5 mb-5 lg:mb-10 rounded-lg">
          Product Categories
        </h2>
      </div>

      {/* Sub heading */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl mb-3 font-bold text-green">
          Discover Our Agricultural Treasures:
        </h2>
        <p>
          Explore a wide range of agricultural products sourced from the rich
          lands of Bangladesh. From fresh grains and vibrant fruits to
          sustainable fibers and nutritious fish, our categories highlight the
          diverse products that contribute to a healthy, sustainable lifestyle.
          Learn about each category and the importance they hold in our farming
          communities.
        </p>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-10">
        {Categories.map((category) => (
          <div key={category?.id} className="bg-base-100 rounded-lg">
            <div className="">
              <Image
                src={category.imageUrl}
                width={500}
                height={800}
                alt={category?.name}
                className="w-full rounded-lg"
              />
            </div>
            <div className="p-3">
              <h2 className="text-green font-bold text-2xl mb-2">
                {category?.name}
              </h2>
              <ul className="list-disc ml-5">
                {category?.subcategories?.map((sub) => (
                  <li className="" key={sub.id}>
                    <span className="font-bold text-md">{sub.name}:</span>
                    <p className="">
                      {sub?.types?.map((type, idx) => (
                        <span className="" key={idx}>
                          {type},
                        </span>
                      ))}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
