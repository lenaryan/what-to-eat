import { DishesType, daysType } from "./types"

export const urls = {
    main: '/',
    ingredients: '/ingredients'
}

export const days: daysType = {
    0: "Сегодня",
    1: "Завтра",
    2: "Послезавтра",
}

export const byingList = ["мюсли", "котлеты", "оливки", "лук", "помидоры", "попить", "мюсли", "котлеты", "оливки", "лук", "помидоры", "попить"]

// export const menu = [
//     {
//         "breakfast": "бутерброды и мюсли",
//         "lunch": "пюре с котлетами",
//         "dinner": "чаю с тортиком погоняем и нормально",
//     },
//     {
//         "breakfast": "бутерброды",
//         "lunch": "рис с котлетами",
//         "dinner": "греческий салат",
//     },
//     {
//         "breakfast": "бутерброды и мюсли",
//         "lunch": "пюре с котлетами",
//         "dinner": "чаю с тортиком погоняем и нормально",
//     },
// ]

export const dishes: DishesType = {
    'breakfastList': [
        {
            'dish': 'мюсли, бутерброды и кофе',
            'ingredients': ['мюсли', 'апельсиновый сок', 'йогурт', 'молоко', 'творожный сыр', 'хлеб', 'мясо', 'кофе']
        },

    ],
    'lunchList': [
        {
            'dish': 'сырники',
            'ingredients': ['творог', 'яйца', 'мука']
        },
    ],
    'dinnerList': [
        {
            'dish': 'салат с помидорами и сыром',
            'ingredients': ['помидоры', 'сыр', 'уксус', 'масло', 'лук']
        },
    ]
}