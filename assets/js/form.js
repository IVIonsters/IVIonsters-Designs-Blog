// collect user input for username, title , content:
usernameE1 = document.getElementById('username');
titleE1 = document.getElementById('title');
contentE1 = document.getElementById('content');

// collect submit button information as variable:
submitButton = document.getElementById('submit');

// add click funciton to submit button
submitButton.addEvenlistener('click', function(event){
    event.preventDefault();
    console.log('submit button clicked');
// check for blanks fields, or any errors in user input
    if (usernameE1.value === '' || titleE1.value === '' || contentE1.value === ''){
        alert('Please enter all data!');
    } // if all data is entered, log to console and save post 
    else {
        console.log('all data entered');
        savePost();
    }
});
    

//pull data from local storage, if no data, create empty array


// event listener for submit button
    // prevent default action? 


// check if any field was left blank , or has error. If so, alert user to fill in all fields


// create object with user input


// push object to array


// save array to local storage


// clear form fields, if all data is correct proceed to blog page.