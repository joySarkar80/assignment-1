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
function filterActiveUsers (users: user[]): user[]{
    const activeUsers = users.filter(user => user.isActive === true);
    return activeUsers;
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
function printBookDetails(book: Book): string{
    const availability: string = book.isAvailable ? "Yes" : "No";
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}
