import {setCookie, getCookie, removeCookie} from './Cookie';


export const getUserName = (user) => (user && user.FirstName && user.LastName ?  `${user.FirstName} ${user.LastName}` : null);
export const getUserEmail = (user) => (user && user.Email ? user.Email : null);

export const setTokens = (activeUserId, authToken, firstName, lastName) =>{
    if(activeUserId) setCookie('activeUserID',activeUserId);
    if(authToken) setCookie('access_token', authToken);
    if(firstName) setCookie('firstName', firstName);
    if(lastName) setCookie('lastName', lastName);
}

export const getActiveUserName = () => `${getCookie('firstName')} ${getCookie('lastName')}`;

export const getActiveUserId = () => getCookie('activeUserID');

export const getActiveUserToken = () =>getCookie('access_token');

export const removeTokens = () =>{
    removeCookie('activeUserID')
    removeCookie('access_token')
    removeCookie('firstName')
    removeCookie('lastName')
}