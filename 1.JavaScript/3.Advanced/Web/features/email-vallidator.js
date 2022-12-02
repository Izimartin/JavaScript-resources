//form validator
function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");

}

// send email to tecnoelectro with message
function sendEmail(message) {
    var email = $('#email').val();
    var name = $('#name').val();
    var subject = $('#subject').val();
    var message = $('#message').val();
    var data = {
        'email': email,
        'name': name,
        'subject': subject,
        'message': message
    };
    $.ajax({
        url: '/sendEmail',
        type: 'POST',
        data: data,
        success: function (data) {
        }
    });

}