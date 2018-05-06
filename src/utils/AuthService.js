import decode  from 'jwt-decode';
import auth0 from 'auth0-js';
import {BrowserRouter} from 'react-router-dom';
const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';

const CLIENT_ID = '{AUTH0_CLIENT_ID}';
const CLIENT_DOMAIN = 'AUTH0_DOMAIN';
const REDIRECT = 'YOUR_CALLBACK_URL';
const SCOPE = 'YOUR_SCOPT';
const AUDIENCE = 'AUDIENCE_ATTRIBUTE';

var auth = new auth0.WebAuth({
    clientID:CLIENT_ID,
    domain:CLIENT_DOMAIN
});

export function login(){
    auth.authorize({
        responseType:'token id_token',
        redirectUri:REDIRECT,
        audience:AUDIENCE,
        scope:SCOPE
    });
}

export function logout(){
    clearIdToken();
    clearAccessToken();
}

export function getIdToken(){
    return localStorage.getItem(ID_TOKEN_KEY);
}

export function getAccessToken(){
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function clearIdToken(){
    localStorage.removeItem(ACCESS_TOKEN_KEY);
}

function clearAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }

// helper function that will allow us to extract the access_token and id_token
function getParamByName(name){
    let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Get and store access_token in localstorage
export function setAccessToken(){
    let accessToken =getParamByName('access_token');
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

// Get and store id_token in local storage
export function setIdToken(){
    let idToken = getParamByName('id_token');
    localStorage.setItem(ID_TOKEN_KEY, idToken);
}

export function isLoggedIn(){
    const idToken = getIdToken();
    return !!idToken && isTokenExpired(idToken);
}

function getTokenExprirationDate(encodedToken){
    const token =decode(encodedToken);
    if(!token.exp){return null;}

    const date = new Date(0);
    date.setUTCSeconds(token.exp);
    return date;
}

function isTokenExpired(token){
    const expirationDate = getTokenExprirationDate(token);
    return expirationDate < new Date();
}