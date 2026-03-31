export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    age: number;
}

export const  fetchUser = async (userId: string) => {
    console.log(`fetching user with id ${userId}...`);
    const res = (await fetch(`https://dummyjson.com/users/${userId}`))
    const data = await res.json();
    return data;
    
};

export const  fetchUsers = async (pageNumber: object) => {
    console.log(`fetching users`);
    const res = (await fetch(`https://dummyjson.com/users?page=${pageNumber}`))
    const data = await res.json();
    return data.users;
};