const DOMAIN = "https://studapi.teachmeskills.by";
const USERS = "/auth/users/";
const ACTIVATEURL = "/auth/users/activation/";
const CHECKUSER = "/auth/jwt/create/"
const PROFILE = "/auth/users/me/"
const JWTREFRESH = "/auth/jwt/refresh/"

export type User = {
    username: string | null,
    password: string | null,
    email: string | null
}

export type ActivateProps = {
    uid: string,
    token: string
}

export type CheckUser = {
    email: string,
    password: string,
}

export const regUser = async (user: User) => {
    const url = new URL(DOMAIN + USERS);
    const response = await fetch(url,
        {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" }
        });
    const result = await response.json();
    return result;
};

export const activateUser = async (user: ActivateProps) => {
    const url = new URL(DOMAIN + ACTIVATEURL);
    const response = await fetch(url,
        {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" }
        });
    const result = await response.json();
    return result;
};

export const checkUser = async (user: CheckUser) => {
    const url = new URL(DOMAIN + CHECKUSER);
    const response = await fetch(url,
        {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" }
        });
    const result = await response.json();
    return result;
}

type Tokens = {
    access: string,
    refresh: string,
}

export const saveTokens = (tokens: Tokens) => {
    localStorage.setItem('accessToken', tokens.access)
    localStorage.setItem('refreshToken', tokens.refresh)
}


export type Profile = {
    username: string,
    id: 0,
    email: string,
}


export const getProfile = async () => {
    const accessToken = localStorage.getItem('accessToken')
    const response = await fetch(DOMAIN + PROFILE, {
        headers : {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    const user: Profile = await response.json()
    return user
}

export const refreshJWT = async (refresh: string) => {
    const url = new URL(DOMAIN + JWTREFRESH);
    const response = await fetch(url,
        {
            method: 'POST',
            body: JSON.stringify({refresh}),
            headers: { "Content-Type": "application/json" }
        });
    const result = await response.json();
    return result;
}