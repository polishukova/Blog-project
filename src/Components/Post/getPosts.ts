import { refreshJWT } from "../../Server/auth";

const DOMAIN = "https://studapi.teachmeskills.by";
const POSTS = "/blog/posts/";

export type OnePost = {
    author?: number;
    date?: string;
    description?: string;
    id?: number;
    image?: string;
    lesson_num?: number;
    text?: string;
    title?: string;
    likes?: number;
    dislikes?: number;
    favorite?: boolean;
};

type PostsResponse = {
    count: number;
    next: string;
    previous?: string;
    results: OnePost[];
};

type PostsParams = {
    limit?: number,
    search?: string,
    offset?: number
};

export const getPosts = async ({ limit, search, offset }: PostsParams) => {
    const postsUrl = new URL(DOMAIN + POSTS);
    if (limit) postsUrl.searchParams.set("limit", String(limit));
    if (search) postsUrl.searchParams.set("search", String(search));
    if (offset) postsUrl.searchParams.set("offset", String(offset))
    const response = await fetch(postsUrl);
    const posts: PostsResponse = await response.json();
    return posts.results;
};

export const getPost = async (postId: string) => {
    const postUrl = new URL(DOMAIN + POSTS + '/' + postId);
    const response = await fetch(postUrl);
    const post: OnePost = await response.json();
    return post
}

export type PostNext = Required<
    Pick<OnePost, "description" | "image" | "lesson_num" | "text" | "title">
>;

export const sendPost = async (post: FormData) => {
    const postUrl = new URL(DOMAIN + POSTS);
    const accessToken = localStorage.getItem('accessToken');
    const response = await fetch(postUrl, {
        method: 'POST',
        body: post,
        headers: { 'Authorization': `Bearer ${accessToken}` }
    })
    if (response.status === 401) {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) return
        const tokens = await refreshJWT(refreshToken);
        localStorage.setItem("accessToken", tokens.access);;
        await fetch(postUrl, {
            method: 'POST',
            body: post,
            headers: { 'Authorization': `Bearer ${tokens.access}` }
        });
    }
}