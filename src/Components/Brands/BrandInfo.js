   const products = [
        // APPLE
        {
            id: 1,
            brand: "apple",
            name: "iPhone 15",
            description: "A16 Bionic chip with advanced dual camera system.",
            price: 79999,
            image: "https://images.unsplash.com/photo-1695048133142-1a20484c1a14"
        },
        {
            id: 2,
            brand: "apple",
            name: "iPhone 14",
            description: "Powerful performance with improved battery life.",
            price: 69999,
            image: "https://images.unsplash.com/photo-1663499482523-1c5f2f6b3c1b"
        },
        {
            id: 3,
            brand: "apple",
            name: "iPhone 13",
            description: "Super Retina display with powerful A15 chip.",
            price: 59999,
            image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5"
        },
        {
            id: 4,
            brand: "apple",
            name: "iPhone 12",
            description: "5G connectivity with ceramic shield protection.",
            price: 52999,
            image: "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd"
        },
        {
            id: 5,
            brand: "apple",
            name: "iPhone SE",
            description: "Compact design with powerful processor.",
            price: 39999,
            image: "https://images.unsplash.com/photo-1580910051074-3eb694886505"
        },


        // SAMSUNG

        {
            id: 6,
            brand: "samsung",
            name: "Samsung Galaxy S23",
            description: "Flagship smartphone with AMOLED display.",
            price: 74999,
            image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf"
        },
        {
            id: 7,
            brand: "samsung",
            name: "Samsung Galaxy S22",
            description: "Premium performance with advanced camera.",
            price: 68999,
            image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00"
        },
        {
            id: 8,
            brand: "samsung",
            name: "Samsung Galaxy A54",
            description: "Mid-range smartphone with smooth performance.",
            price: 34999,
            image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00"
        },
        {
            id: 9,
            brand: "samsung",
            name: "Samsung Galaxy M34",
            description: "Massive battery and smooth display.",
            price: 21999,
            image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f"
        },
        {
            id: 10,
            brand: "samsung",
            name: "Samsung Galaxy F54",
            description: "108MP camera with long battery life.",
            price: 24999,
            image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f"
        },

        // REDMI
        {
            id: 11,
            brand: "redmi",
            name: "Redmi Note 13",
            description: "120Hz display with powerful processor.",
            price: 19999,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
        },
        {
            id: 12,
            brand: "redmi",
            name: "Redmi Note 12",
            description: "Smooth performance with long battery backup.",
            price: 17999,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
        },
        {
            id: 13,
            brand: "redmi",
            name: "Redmi 12",
            description: "Affordable smartphone with stylish design.",
            price: 12999,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
        },
        {
            id: 14,
            brand: "redmi",
            name: "Redmi 11 Prime",
            description: "Budget phone with strong battery.",
            price: 11999,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
        },
        {
            id: 15,
            brand: "redmi",
            name: "Redmi K50",
            description: "Gaming smartphone with powerful chipset.",
            price: 29999,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
        },


        // VIVO

        {
            id: 16,
            brand: "vivo",
            name: "Vivo V29",
            description: "Premium design with powerful camera.",
            price: 28999,
            image: "https://images.unsplash.com/photo-1580910051074-3eb694886505"
        },
        {
            id: 17,
            brand: "vivo",
            name: "Vivo V27",
            description: "Slim design with excellent portrait camera.",
            price: 27999,
            image: "https://images.unsplash.com/photo-1580910051074-3eb694886505"
        },
        {
            id: 18,
            brand: "vivo",
            name: "Vivo Y100",
            description: "AMOLED display with stylish design.",
            price: 23999,
            image: "https://images.unsplash.com/photo-1580910051074-3eb694886505"
        },
        {
            id: 19,
            brand: "vivo",
            name: "Vivo Y56",
            description: "Long battery life with smooth performance.",
            price: 17999,
            image: "https://images.unsplash.com/photo-1580910051074-3eb694886505"
        },
        {
            id: 20,
            brand: "vivo",
            name: "Vivo T1",
            description: "Gaming-friendly smartphone.",
            price: 19999,
            image: "https://images.unsplash.com/photo-1580910051074-3eb694886505"
        },


        // REALME

        {
            id: 21,
            brand: "realme",
            name: "Realme GT 5",
            description: "High-performance smartphone for gaming.",
            price: 32999,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        },
        {
            id: 22,
            brand: "realme",
            name: "Realme Narzo 60",
            description: "Budget gaming phone with smooth display.",
            price: 16999,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        },
        {
            id: 23,
            brand: "realme",
            name: "Realme 11 Pro",
            description: "Premium design with powerful camera.",
            price: 25999,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        },
        {
            id: 24,
            brand: "realme",
            name: "Realme C55",
            description: "Affordable smartphone with stylish design.",
            price: 11999,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        },
        {
            id: 25,
            brand: "realme",
            name: "Realme GT Neo",
            description: "Fast performance with AMOLED display.",
            price: 27999,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        }

    ];


    export default products;