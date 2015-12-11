// Write your code here!

$(document).ready(function() {

    $('#signup-form').on('submit', function(event) {
        // write your code here
        
        var password = $('input[name=password]').val();
        var confirmPassword = $('input[name=password2]').val();
        
        if (password !== confirmPassword){
            alert("Passwords don't match!");
        }
        else if (password.length < 10) {
            alert("Password is too short!");
        }
        else {
            return;
        }
        
        event.preventDefault();
    });
});