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
            ],
            tips: [
                {
                    id: 1,
                    content: " যথাসম্ভব পাতিলে থাকনা দিয়ে রান্না করুন। এতে করে খাবারের পুষ্টিগুণ ঠিক থাকে।"
                },
                {
                    id: 2,
                    content: "মাংস রান্নার শুরুতেই লবণ না দিয়ে রান্নার মাঝামাঝি সময়ে লবণ দিয়ে ভালোভাবে নাড়ুন। এর পর দেখে নিন পরিমাণ ঠিক হল কিনা।"
                },
                {
                    id: 3,
                    content: "তরকারির ঝোল ঘন করতে চাইলে কিছু কর্ণ ফ্লাওয়ার পানিতে গুলে ঢেলে দিন। লক্ষ্য রাখুন- যেন কর্ণ ফ্লাওয়ারের মিশ্রণটি ভালোমতো তরকারির সঙ্গে মিশে যায়।"
                },
                {
                    id: 4,
                    content: "চাল ধোয়ার পর ১০ মিনিট রেখে দিয়ে তারপর রান্না করুন অথবা রান্নার সময় ১ চা চামচ তেল দিয়ে দিন। দেখবেন ভাত সুন্দর ঝরঝরে হয়েছে।"
                },
                {
                    id: 5,
                    content: "মুরগির ফ্যাট এড়াতে চাইলে চামড়া ছাড়িয়ে মুরগি রান্না করুন। কারণ মুরগির চামড়াতেই প্রধান ফ্যাট থাকে।"
                },
                {
                    id: 6,
                    content: "সবুজ সবজি রান্নার সময় সবুজ রং ঠিক রাখতে চাইলে এক চিমটি চিনি দিন।"
                },
                {
                    id: 7,
                    content: "রান্না করার জন্য একদিন আগেই মাংস সিদ্ধ এবং ঠাণ্ডা করে ফ্রিজে সংরক্ষণ করে রাখতে পারেন।"
                },
                {
                    id: 8,
                    content: "রান্নার সময় গরম পানি ব্যবহার করুন।"
                },
                {
                    id: 9,
                    content: "ফ্রিজের মধ্যে আঁশটে গন্ধ দূর করতে ফ্রিজে এক টুকরো কাঠ কয়লা রেখে দিন।"
                },
                {
                    id: 10,
                    content: "মাংস তাড়াতাড়ি সিদ্ধ করতে চাইলে খোসাসহ এক টুকরো কাঁচা পেঁপে তরকারিতে দিন।"
                },
                {
                    id: 11,
                    content: "মাছ, মাংস বা ডিমের ঝোলে লবণ বেশি হয়ে গেলে তরকারিতে কয়েকটি সিদ্ধ আলু ভেঙে দিন। স্বাদ ঠিক হয়ে যাবে।"
                },
                {
                    id: 12,
                    content: "মুরগির মাংস বা কলিজা রান্নায় ১ টেবিল চামচ সিরকা দিন। এতে মাংসের গন্ধ থাকবে না আবার তাড়াতাড়ি সিদ্ধও হবে।"
                },
                {
                    id: 13,
                    content: "মাছ ভাজার সময় তেল ছিটা রোধ করতে একটু লবণ ছড়িয়ে দিন।"
                },
                {
                    id: 14,
                    content: "বেরেস্তা করার সময় পেঁয়াজ ভেজে নামানোর আগে সামান্য পানি ছিটিয়ে দিন। এতে পেঁয়াজ তাড়াতাড়ি লালচে হবে।"
                },
                {
                    id: 15,
                    content: "কাঁচামাছ বা মাংস ছুরি-চপিং বোর্ডে কাটতে চাইলে বেশ কিছুক্ষণ আগে থেকেই পানিতে ভিজিয়ে নরমাল করে নিন।"
                },
                {
                    id: 16,
                    content: "আলু ও ডিম একসঙ্গে সিদ্ধ করুন, আলাদা কাজে ব্যবহার করলেও তাড়াতাড়ি সিদ্ধ হবে।"
                },
                {
                    id: 17,
                    content: "স্যুপ রান্নার সময় পাতলা হয়ে গেলে দুটি সিদ্ধ আলু ম্যাশ করে স্যুপে মিশিয়ে ফুটিয়ে নিন।"
                },
                {
                    id: 18,
                    content: "ডাল তাড়াতাড়ি রান্না করতে আগের রাতেই ভিজিয়ে রাখুন।"
                },
                {
                    id: 19,
                    content: "সহজে মসলাপাতি খুঁজে পেতে কৌটার গায়ে নাম লিখে রাখুন।"
                },
                {
                    id: 20,
                    content: "আগামী দিন কী রান্না করবেন তার প্রস্তুতি রাতেই নিন, তা হলে সময় বেচে যাবে।"
                },
                {
                    id: 21,
                    content: "রান্না করার সময় অবশ্যই মাছ ও সবজির কম্বিনেশনের ব্যাপারে নজর রাখবেন।"
                },
                {
                    id: 22,
                    content: "মাছ রান্না করে কাঁচা ধনিয়া পাতা থাকলে তা কুচি করে কেটে বিছিয়ে দিন, স্বাদ অনেকগুণ  বেড়ে যাবে।"
                },
                {
                    id: 23,
                    content: "ডালে বাগার দিতে রসুন কুচি তেলে ভেজে ডালে দিয়ে দিন।"
                },
                {
                    id: 24,
                    content: "মাংসজাতীয় রান্না করে শেষে বেরেস্তা (পেঁয়াজ কুচি ভাজি) ছড়িয়ে দিন। এতে স্বাদ বেড়ে যাবে।"
                },
                {
                    id: 25,
                    content: "ডিম সিদ্ধ করতে পানিতে সামান্য লবণ দিয়ে নিন। এতে ডিম খেতে সুস্বাদু হবে। আর ঠাণ্ডা করে ডিম ছিলুন, তা হলে খোসায় লেগে ডিম নষ্ট হবে না।"
                },
                {
                    id: 26,
                    content: "চুলায় হাঁড়ি-পাতিলে ঢাকনা থাকলে তা খালি হাতে ধরবেন না।"
                },
                {
                    id: 27,
                    content: "ভর্তা বানাতে মরিচ খালি হাতে ডলবেন না, এতে হাত জ্বালা করবে।"
                },
                {
                    id: 28,
                    content: "মাছ ভাজতে কড়াই হতে নিদিষ্ট দূরে থাকুন। মাছে পানি থাকলে কিংবা ফুটে আপনার গায়ে বা চোখে তেল পড়তে পারে।"
                },
                {
                    id: 29,
                    content: "শুকনা মরিচ ভাজার সময় মরিচ পোড়ার ঝাঁজে হাঁচি-কাশি রোধে রান্নাঘরের দরজা-জানালা ভালো করে খুলে দিন।"
                },
                {
                    id: 30,
                    content: "ভাজিতে তেল বেশি পড়ে গেলে ভাজিগুলো কড়াই বা প্যানের একদিকে সরিয়ে কড়াই কাত করে কিছুক্ষণ রেখে দিন। তেল ভাজি থেকে ঝরে গেলে সংরক্ষণ করে অন্য প্যান ব্যবহার করতে পারবেন। মাংসের তরকারিতে যদি তেল বেশি হয়ে পড়ে, তবে ওপর থেকে চামচ দিয়ে তেল উঠিয়ে ভাজিতে ব্যবহার করলে ভালোই সুস্বাদু লাগে।"
                },
                {
                    id: 31,
                    content: "এলাচ সম্পূর্ণ গুঁড়ো করে ব্যবহার করা ভালো। এতে এলাচ কামড়ে পড়ে খাওয়ার মজা নষ্ট হবে না। আবার রান্নাতেও সুগন্ধ হবে।"
                },
                {
                    id: 32,
                    content: "সবজির রং ঠিক রাখতে পাতিল ঢেকে রান্না না করাই ভালো। আর কিছু সবজিকে সামান্য সিদ্ধ করে ঠাণ্ডা পানি দিয়ে ধুয়ে ফেললে কিংবা বরফ কুচিতে রাখলে রান্নার পরও রং ঠিক থাকে।"
                },
                {
                    id: 33,
                    content: "কিছু ভাজিতে কড়াইতে তেল গরম হলে, যা দেবেন তার সঙ্গে সামান্য লবণ দিয়ে দিন, তেলের ছিটকা উঠবে না।"
                },
                {
                    id: 34,
                    content: "ডালের মজা বৃদ্ধির জন্য বেশি সময় ধরে রান্না করুন, স্বাদ বেড়ে যাবে।"
                },
                {
                    id: 35,
                    content: "তেলাপিয়া মাছের গন্ধ দূর করতে তেলাপিয়া মাছ হলুদ ও ভিনিগার/লেবুর রস মাখিয়ে মিনিট ১৫ রেখে রান্না করুন।"
                },
                {
                    id: 36,
                    content: "লাল সরষের ঝাঁজ বেশি হয়। হলুদ সরষে ব্যবহার করলে তিতা হয় না। সরষে বাটার সময় লবণ আর কাঁচামরিচ একসঙ্গে বাটলে তিতা হয় না।"
                },
                {
                    id: 37,
                    content: "বর্ষাকালে লবণ গলে যায়, তাই একমুঠো পরিষ্কার চাল পুঁটলি করে বেঁধে লবণের পাত্রে রেখে দিন।"
                },
                {
                    id: 38,
                    content: "কাচের গ্লাসে গরম কিছু নিতে গেলে অনেক সময় ফেটে যায়, তাই গরম কিছু ঢালার আগে গ্লাসে একটি ধাতু নির্মিত চামচ রেখে ঢাললে গ্লাস ফাটবে না।"
                },
                {
                    id: 39,
                    content: " আলু ও আদা বালির মধ্যে ডুবিয়ে রাখলে অনেক দিন পর্যন্ত টাটকা থাকে।"
                },
                {
                    id: 40,
                    content: "যে কোনো খাবার রেফ্রিজারেটরে রাখলে ঢাকনা দিয়ে রাখা ভালো। ফলে এক খাবারের গন্ধ আরেক খাবারে যায় না এবং রেফ্রিজারেটও গন্ধ হয় না।"
                },
                {
                    id: 41,
                    content: "শিশি বা কৌটার মধ্যে বিস্কিট রাখার আগে সামান্য চিনি বা মোটা কাগজের ঠুকরো রেখে দিলে বিস্কিট অনেক দিন মচমচে থাকে।"
                },
                {
                    id: 42,
                    content: "আঙুর, টমেটো প্রভৃতি ফল ফুটন্ত পানিতে ২ মিনিট রেখে সঙ্গে সঙ্গে ঠাণ্ডা পানিতে রেখে দিলে সহজেই খোসা ছড়ানো যায়।"
                },
                {
                    id: 43,
                    content: "চাল ও ডালের কৌটায় কয়েকটি শুকনো নিমপাতা বা শুকনো মরিচ রাখলে সহজে পোকা ধরবে না।"
                },
                {
                    id: 44,
                    content: "কাঁচকলা ও লেবু প্রতিদিন অন্তত এক ঘণ্টা পানিতে ভিজিয়ে রাখলে বেশি দিন টাটকা থাকে।"
                },
                {
                    id: 45,
                    content: "কাঁচামরিচের বোঁটা ফেলে পানি শুকিয়ে কাপড় বা কাগজের প্যাকেটে সংরক্ষণ করলে বেশি দিন ভালো থাকে।"
                },
                {
                    id: 46,
                    content: "চিকেন ফ্রাই, চিকেন রোল— এসব খাবার অ্যালুমিনিয়াম ফয়েলে মুড়িয়ে রাখলে সহজে নষ্ট হয় না।"
                },
                {
                    id: 47,
                    content: "খাবার পুড়ে পাত্রের তলায় আটকে থাকলে পাত্রটিকে নুনপানিতে ভর্তি করে পানি ফোটালে পোড়া অংশ দ্রুত আলাগা হয়ে উঠে যায়।"
                },
                {
                    id: 48,
                    content: "আচার বয়াম থেকে নেওয়ার সময় পরিষ্কার চামচ ব্যবহার করলে আচারে ফাঙ্গাস পড়ে না।"
                },
                {
                    id: 49,
                    content: "চিনির পাত্রের মধ্যে দু-চারটি লবঙ্গ দিয়ে রাখলে পিঁপড়ে ঢুকবে না।"
                },
            ]
        }
    },
    getters: {

    },
    actions: {

    }
});

