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

export type IngredientsType = {
    id: number,
    title: string
}

export type TMealName = {
    [meal: string]: {
        title: string,
        icon: () => JSX.Element
    }
}