// Define variables for back-button and link to index.html
backButtonLink = document.getElementById('back-button');
blogMain = document.getElementById('blog');

// add event listener to trigger back button
backButtonLink.addEventListener('click', function() {
    window.location.href = 'index.html';
});

// create function for blog post
function postBlog() {
    // use Json.parse to get blog posts from local storage and convert to object
    const blogPost = Json.parse(localStorage.getItem('blogPosts'));
    // see if data is returned, if not exit out of current function
    if (blogPost !== null){
        for ( let i = 0 ; i < blogPost.length; i++) {
            const blog = blogPost[i];
            console.log(blog.username)
            console.log(blog.title)
            console.log(blog.content)

            const li = document.createElement('li');
            li.setAtrribute('class', 'blog-post');
    }
}













// create an init() function that starts when page is loaded
    function init() {
            //  when init() function is executed, render the blog to webpage
        postBlog()
    }
    init ();
