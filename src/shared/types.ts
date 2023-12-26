export type DayMenu = {
    [key: string]: string,
}

export type CarouselProps = {
    menu: DayMenu[]
}

export type daysType = {
    [index: number]: string;
}

export type MealsArrayType = {
    'dish': string,
    'ingredients': string[]
}

export type DishesType = {
    [key: string]: MealsArrayType[],
}