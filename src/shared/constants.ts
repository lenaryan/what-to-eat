import { DishesType, daysType } from "./types"

export const urls = {
    main: '/',
    ingredients: '/ingredients'
}

export const SUPABASE_URL = 'https://teyomhgcavivsiwdllpt.supabase.co';
export const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRleW9taGdjYXZpdnNpd2RsbHB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4MjM4NjAsImV4cCI6MjAxOTM5OTg2MH0.GUovxTYlelBCgNb4VNyOeRXBJPWBdNP35IC7opHMB0w';

export const days: daysType = {
    0: "Сегодня",
    1: "Завтра",
    2: "Послезавтра",
}

export const ingredientsList = [
    'яйца',
    'курица',
    'растительное масло',
    'кетчуп',
    'молоко',
    'листовой салат',
    'замороженная смесь',
    'мороженое'
]

export const defaultShoppingList = [
    "яйца",
    "курица",
    "овощная смесь",
    "зелень",
    "овощи",
    "растительное масло",
    "сливочное масло",
    "сыр",
    "хлеб",
    "кофе"
]

export const dishes: DishesType = {
    'breakfastList': [
        {
            'dish': 'мюсли, бутерброды и кофе',
            'ingredients': ['мюсли', 'апельсиновый сок', 'йогурт', 'молоко', 'творожный сыр', 'хлеб', 'мясо', 'кофе']
        },
        {
            'dish': 'авокадоброды и кофе',
            'ingredients': ['хлеб', 'авокадо', 'кофе']
        },

    ],
    'lunchList': [
        {
            'dish': 'сырники',
            'ingredients': ['творог', 'яйца', 'мука']
        },
        {
            'dish': 'ленивые вареники пп',
            'ingredients': ['творог', 'яйца', 'овсяные хлопья', 'сметана']
        },
        {
            'dish': 'фаршированный перец',
            'ingredients': ['болгарский перец', 'рис', 'фарш', 'томатная паста']
        },
    ],
    'dinnerList': [
        {
            'dish': 'салат с помидорами и сыром',
            'ingredients': ['помидоры', 'сыр', 'уксус', 'растительное масло', 'лук']
        },
    ]
}