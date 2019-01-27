import regeneratorRuntime from "regenerator-runtime";

let LocalUri = 'http://localhost:3000';
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

export const AlbumsPost = async (counter) => {    
    const Api = {
        URL:`https://jsonplaceholder.typicode.com/photos?albumId=${counter}`
    }  
    const rawResponse = await fetch(Api.URL);
    const content = await rawResponse.json();
    return content;    
}

export const AddPostUsers = async(jsonData)=>{
    const rawResponse = await fetch(`${LocalUri}/posts`, { 
        method: 'POST',
        body: jsonData, 
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    const content = await rawResponse.json();
    return content;    
}

export const EditPostUsers = async(jsonData,id)=>{
    const rawResponse = await fetch(`${LocalUri}/posts/${id}`, { 
        method: 'PUT',
        body: jsonData, 
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    const content = await rawResponse.json();
    return content;    
}

export const DeletePostUsers = async(id)=>{
    const rawResponse = await fetch(`${LocalUri}/posts/${id}`, { 
        method: 'DELETE',        
    });
    const content = await rawResponse.json();
    return content;    
}

export const ListPostUsers = async (counter) => {    
    const Api = {
        URL:`${LocalUri}/posts`
    }  
    const rawResponse = await fetch(Api.URL);
    const content = await rawResponse.json();
    return content;    
}
