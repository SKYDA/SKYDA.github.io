import { POSTS } from '../postsMdx/constants';
import matter from 'gray-matter';

export const getPostsFiles = () => {
    return POSTS.map(item => item.title)
}


export function getPostData(postIdentifier) {
    // const { data, content } = matter(fileContent);
    const file = POSTS.find(item => item.title === postIdentifier) || {}
    const postData = {
        slug: postIdentifier,
        ...file,
    }

    return postData;
}

export function getAllPosts() {
    const postFiles = getPostsFiles();

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    });

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedPosts;
}

export function getPostByTopic(topic) {
    const postFiles = getPostsFiles();

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    });

    const filteredPosts = allPosts.filter(post => post.topic === topic);

    return filteredPosts;
}


export function getLatestPosts() {
    const postFiles = getPostsFiles();

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    });

    const dateOfToday = new Date()
    const twoMonthsAgo = dateOfToday.getMonth() - 2

    const latestPost = allPosts.filter(post => {
        const postDate = new Date(post.date)
        if (postDate >= twoMonthsAgo) {
            return true
        }
    })

    const sortedPosts = latestPost.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedPosts;
}