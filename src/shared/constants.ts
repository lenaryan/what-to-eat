import { MealsArrayType, TMealName, daysType } from "./types"
import { BreakfastIcon } from '../components/Menu/svgs/BreakfastIcon'
import { LunchIcon } from '../components/Menu/svgs/LunchIcon'
import { DinnerIcon } from '../components/Menu/svgs/DinnerIcon'

export const SUPABASE_URL = 'https://teyomhgcavivsiwdllpt.supabase.co';
export const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRleW9taGdjYXZpdnNpd2RsbHB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4MjM4NjAsImV4cCI6MjAxOTM5OTg2MH0.GUovxTYlelBCgNb4VNyOeRXBJPWBdNP35IC7opHMB0w';

export const ROUTES = {
    menu: '/',
    ingredients: '/ingredients',
    shoppingList: '/shopping-list'
}

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
    'мороженое'
]

export const breakfastList: MealsArrayType[] = [
    {
        'dish': 'мюсли, бутерброды и кофе',
        'ingredients': ['мюсли', 'апельсиновый сок', 'йогурт', 'молоко', 'творожный сыр', 'хлеб', 'мясо', 'кофе']
    },
    {
        'dish': 'авокадоброды и кофе',
        'ingredients': ['хлеб', 'авокадо', 'кофе']
    },

];

export const lunchList: MealsArrayType[] = [
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
];

export const dinnerList: MealsArrayType[] = [
    {
        'dish': 'салат с помидорами и сыром',
        'ingredients': ['помидоры', 'сыр', 'уксус', 'растительное масло', 'лук']
    },
];

export const MEAL_NAME: TMealName = {
    breakfast: {
        title: 'Завтрак',
        icon: BreakfastIcon
    },
    lunch: {
        title: 'Обед',
        icon: LunchIcon
    },
    dinner: {
        title: 'Ужин',
        icon: DinnerIcon
    },
}