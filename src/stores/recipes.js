import { defineStore } from "pinia";

export const useRecipes = defineStore("recipes", {
    state: () => {
        return {
            category: [
                {
                    id: 1,
                    title: "বিরিয়ানি রেসিপি",
                    img: "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg"
                },
                {
                    id: 2,
                    title: "কাবাব রেসিপি",
                    img: "https://img.freepik.com/free-photo/grilled-meat-skewers-with-vegetables-gourmet-summer-appetizer-generated-by-ai_188544-55981.jpg"
                },
                {
                    id: 3,
                    title: "খিচুরি, পোলাও",
                    img: "https://img.freepik.com/premium-photo/picture-patla-khichuri_871710-28414.jpg"
                },
                {
                    id: 4,
                    title: "ভেজিটেবল",
                    img: "https://img.freepik.com/free-photo/picture-vegetables-fruits-with-blue-background_1340-23458.jpg"
                },
                {
                    id: 5,
                    title: "মাছের রেসিপি",
                    img: "https://img.freepik.com/premium-photo/fried-fish-carp-fresh-vegetable-salad-wooden-background_2829-1105.jpg"
                },
                {
                    id: 6,
                    title: "ভর্তা রেসিপি",
                    img: "https://img.freepik.com/premium-photo/ilish-bhorta-hilsa-served-dish-isolated-background-top-view-bangladesh-food_689047-5312.jpg"
                },
                {
                    id: 7,
                    title: "সালাদ",
                    img: "https://img.freepik.com/premium-photo/fresh-vegetable-salad-with-feta-cheese-food-top-view-free-space-your-text_187166-21463.jpg"
                },
                {
                    id: 8,
                    title: "স্যুপ",
                    img: "https://img.freepik.com/free-photo/tomato-soup-with-green-table_140725-2447.jpg"
                },
                {
                    id: 9,
                    title: "ফাস্ট ফুড",
                    img: "https://img.freepik.com/premium-photo/burger-with-veal-cheese-vegetables-fast-food-wooden-background-top-view-free-space-your-text_187166-22955.jpg"
                },
                {
                    id: 10,
                    title: "ড্রিংক",
                    img: "https://img.freepik.com/free-photo/cocktail-glasses_144627-34955.jpg"
                },
                {
                    id: 11,
                    title: "আচার",
                    img: "https://img.freepik.com/free-photo/fresh-sweet-ripe-tamarind-white-surface_1150-41897.jpg"
                },
                {
                    id: 12,
                    title: "কেক",
                    img: "https://img.freepik.com/free-photo/chocolate-cake-decorated-with-forest-fruits-blueberries-strawberries-blackberries-ai-generative_123827-24044.jpg"
                },
                {
                    id: 13,
                    title: "পিঠা",
                    img: "https://img.freepik.com/premium-photo/this-food-is-made-rice-powder-sugar-oil-this-item-is-called-tele-vaga-pitha-bangladesh-it-is-so-delicious_799261-727.jpg"
                },
                {
                    id: 14,
                    title: "নাস্তা",
                    img: "https://img.freepik.com/free-photo/breakfast-set-table_140725-9332.jpg"
                },
                {
                    id: 15,
                    title: "ডেজার্ট",
                    img: "https://img.freepik.com/free-photo/tartlets-with-pistachios-strawberry-cream-chocolate-side-view_141793-4156.jpg"
                },
                {
                    id: 16,
                    title: "অন্যান্য",
                    img: "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141349.jpg"
                },
            ],
            recipe: [
                {
                    id: 1,
                    category: 1,
                    title: "কাচ্চি বিরিয়ানি",
                    img: "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg"
                },
                {
                    id: 2,
                    category: 1,
                    title: "চিকেন বিরিয়ানি",
                    img: "https://img.freepik.com/free-photo/plate-biryani-with-bowl-chicken-vegetables_505751-3813.jpg?"
                },
                {
                    id: 3,
                    category: 1,
                    title: "তান্দুরি চিকেন বিরিয়ানি",
                    img: "https://img.freepik.com/premium-photo/bowl-biryani-with-chicken-dish-side_582637-8942.jpg"
                },
                {
                    id: 4,
                    category: 2,
                    title: "চিকেন টিক্কা কাবাব",
                    img: "https://img.freepik.com/free-photo/grilled-skewers-with-vegetables-gray-plate-top-view-ai-generative_123827-24874.jpg"
                },
                {
                    id: 5,
                    category: 2,
                    title: "সুতি কাবাব",
                    img: "https://img.freepik.com/free-photo/skewers-with-meat-kebabs-vegetables-rustic-wooden-table-ai-generative_123827-24878.jpg"
                },
            ]
        }
    },
    getters: {

    },
    actions: {

    }
});

