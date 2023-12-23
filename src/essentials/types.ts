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