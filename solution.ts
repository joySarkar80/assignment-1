function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string") {
        return value.toUpperCase();
    }

    if (typeof value === "number") {
        return value * 10;
    }

    if (typeof value === "boolean") {
        return !value;
    }

    return value;
}


function getLength(value: string | any[]): number {
    if (typeof value === "string") {
        return value.length;
    }
    if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, age: ${this.age}'`
    }
}


type Item = {
    title: string;
    rating: number;
}
function filterByRating(items: Item[]): Item[] {
    const highRating: any[] = items.filter(item => item.rating >= 4)
    return highRating;
}


type user = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
function filterActiveUsers(users: user[]): user[] {
    const activeUsers: any[] = users.filter(user => user.isActive === true);
    return activeUsers;
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
function printBookDetails(book: Book): string {
    const availability: string = book.isAvailable ? "Yes" : "No";
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}


function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
    const uniqeArray: (string | number)[] = [];

    function existInUniqeArray(value: string | number): boolean {
        for (let i = 0; i < uniqeArray.length; i++) {
            if (value === uniqeArray[i]) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (!existInUniqeArray(arr1[i])) {
            uniqeArray[uniqeArray.length] = arr1[i];
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!existInUniqeArray(arr2[i])) {
            uniqeArray[uniqeArray.length] = arr2[i];
        }
    }
    return uniqeArray;
}


type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}
function calculateTotalPrice(products: Product[]): number {
    if (products.length === 0) {
        return 0;
    }
    const productPrice = products.map(product => {
        const totalWithoutDiscount = product.price * product.quantity;
        if (product.discount) {
            let withDiscount = (totalWithoutDiscount / 100) * product.discount;
            withDiscount = totalWithoutDiscount - withDiscount;
            return withDiscount;
        } else {
            return totalWithoutDiscount;
        }
    })
    const finalPrice = productPrice.reduce((acc, vaule) => {
        return acc + vaule;
    })
    return finalPrice;
}
