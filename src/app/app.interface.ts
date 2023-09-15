export interface IUserDetails {

    name: string,
    email: string,
    password: string,
    cpassword: string

}

export interface IBookDetails{
    id:number,
    title:string,
    author: string,
    summary:string,
    notes: string,
    rating: number
}

export interface IBookDetailsDTO{
    title:string,
    author: string,
    summary:string,
    notes: string,
    rating: number
}