function formatString(name: string, married?: boolean) {
    if (married == true || married == undefined) {
        return name.toUpperCase()
    }

    else {
        return name.toLowerCase()
    }
}

const value = formatString('Mohsin', true)







interface Books {
    title: string;
    rating: number
}

function filterByRating(items: Books[]) {
    const rating = items.filter((item => item.rating > 4))
    return rating
}


const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book A', rating: 4.6 },
    { title: 'Book A', rating: 3 }
]

const result = filterByRating(books)









function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat()
}


const array = concatenateArrays([12, 13], [14])
// console.log(array)








class Vehicle {
    private make: string;
    private year: number


    constructor(make: string, year: number) {
        this.make = make;
        this.year = year
    }

    getInfo() {
        return `This ${this.make} relased on ${this.year} `
    }

}

class Car extends Vehicle {
    private model: string;

    constructor(model: string, name: string, year: number) {
        super(name, year)
        this.model = model
    }

    getModel() {
        return `${this.model}`
    }
}


const mycar = new Car('Corolla', 'Toyota', 2024)





function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length
    }
    else if (typeof value === 'number') {
        return value * 2
    }

    throw new Error('Invalid input Type')

}

const result1 = processValue(10)






interface Product {
    name: string;
    price: number
}


function getMostExpensiveProduct(products: Product[]): Product | null {

    if (products.length === 0) return null

    return products.reduce((max, product) => {
        return product.price > max.price ? product : max
    })

}

const product: Product[] = [
    { name: 'a', price: 10 },
    { name: 'b', price: 11 },
    { name: 'c', price: 10 },
]

const result2 = getMostExpensiveProduct(product)









enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day) {
    if (day === Day.Saturday || day === Day.Sunday) {
        return 'Weekend'
    }

    else {
        return 'Weekday'
    }
}


const result3 = getDayType(Day.Friday)