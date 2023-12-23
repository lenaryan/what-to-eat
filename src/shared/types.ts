export type DayMenuType = {
    "breakfast": string,
    "lunch": string,
    "dinner": string,
}

export type CarouselProps = {
    menu: DayMenuType[]
}

export type daysType = {
    [index: number]: string;
}

type MealsArrayType = {
    'dish': string,
    'ingredients': string[]
}

export type DishesType = {
    'breakfastList': MealsArrayType[],
    'lunchList': MealsArrayType[],
    'dinnerList': MealsArrayType[],
}