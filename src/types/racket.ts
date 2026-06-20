type Brand = {
    id: number,
    name: string
}

export type Racket = {
    id: number,
    name: string,
    imageUrl: string,
    brand: Brand,
    description: string,
    price: number,
}