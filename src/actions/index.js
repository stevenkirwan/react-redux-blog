import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = '?key=acdc';

// Get all posts
export function fetchPosts() {

    // Send request to get API
    const request = axios.get(`${ROOT_URL}${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

// Create single post
export function createPost(values, callback) {
    
    // Send request to get API
    const request = axios.post(`${ROOT_URL}${API_KEY}`, values)
    .then(() => callback());
    
    return {
        type: CREATE_POST,
        payload: request
    };
}

// Get single post
export function fetchPost(id) {
    
    // Send request to get API
    const request = axios.get(`${ROOT_URL}/${id}${API_KEY}`);
    
    return {
        type: FETCH_POST,
        payload: request
    };
}

// Delete single post
export function deletePost(id, callback) {

    // Send request to get API
    const request = axios.delete(`${ROOT_URL}/${id}${API_KEY}`)
    .then(() => callback());
    
    return {
        type: DELETE_POST,
        payload: id
    };
}