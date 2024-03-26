// collect user input for username, title , content:
let usernameE1 = document.getElementById('username');
let titleE1 = document.getElementById('title');
let contentE1 = document.getElementById('content');

// collect submit button information as variable:
let submitButton = document.getElementById('submit');

// add click funciton to submit button
submitButton.addEventlistener('click', function(event){
    event.preventDefault();
    console.log('submit button clicked');
    
// check for blanks fields, or any errors in user input
    if (usernameE1.value.trim() === '' || titleE1.value.trim() === '' || contentE1.value.trim() === '') {
        alert('Please enter all data!');
    } // if all data is entered, log to console and save post 
    else {
        console.log('all data entered');
        savePost();
    }
})
    
function savePost() {
    // Define variable for posts
    const blogInput = {
        username: usernameE1.value.trim(),
        title: titleE1.value.trim(),
        content: contentE1.value.trim()
    };

    // check for saved posts in local storage, if none create empty array
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
    if (blogPosts === null) {
        blogPosts = [];
    } else {
        blogPosts.push(blogInput);
    }
}

// save posts to local storage, and log to console
localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
console.log('Post saved to local storage!');

// swtich to blog page once post is saved
window.location.href = 'blog.html';