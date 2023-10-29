let user = {
    lastActivityTime : new Date()
};
let posts = [];
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}
function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivityTime = new Date();
            resolve(user.lastActivityTime);
        }, 1000);
    });
}
function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: NO POSTS TO DELETE");
            }
        }, 1000);
    });
}
createPost('New post 1')   
    .then(() => updateLastUserActivityTime()) 
    .then(() => {
        console.log("All Posts:", posts);
        console.log("Last Activity Time:", user.lastActivityTime) ;
        return deletePost();
    })
    .then((deletedPost) => {
        console.log("Deleted Post:", deletedPost);
        console.log("Remaining Posts:", posts);
    })
    .catch((error) => {
        console.error(error);
    });