import regeneratorRuntime from "regenerator-runtime";

export const ListUsers = async () => {    
    const Api = {
        URL:'https://jsonplaceholder.typicode.com/users'
    }  
    const rawResponse = await fetch(Api.URL);
    const content = await rawResponse.json();
    return content;    
}

export const PostbyUsers = async (counter) => {    
    const Api = {
        URL:`https://jsonplaceholder.typicode.com/posts?userId=${counter}`
    }  
    const rawResponse = await fetch(Api.URL);
    const content = await rawResponse.json();
    return content;    
}

export const AlbumsbyUsers = async (counter) => {    
    const Api = {
        URL:`https://jsonplaceholder.typicode.com/Albums?userId=${counter}`
    }  
    const rawResponse = await fetch(Api.URL);
    const content = await rawResponse.json();
    return content;    
}

export const CommentbyPosts = async (counter) => {    
    const Api = {
        URL:`https://jsonplaceholder.typicode.com/comments?postId=${counter}`
    }  
    const rawResponse = await fetch(Api.URL);
    const content = await rawResponse.json();
    return content;    
}
