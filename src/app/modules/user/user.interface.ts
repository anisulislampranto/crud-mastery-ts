export type userName = {
    firstName: string;
    lastName: string;
}

export type address = {
    street: string;
    city: string;
    country: string;
}

export type order = {
    productName: string;
    price: number;
    quantity: number;
}

export type user = {
    userId: number;
    username: string;
    password: string;
    fullName: userName;
    age: number;
    email: string;
    isActive: boolean;
    hobbies?: [string];
    address?: address;
    orders?: [order]
}