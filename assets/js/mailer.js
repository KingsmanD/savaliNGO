$("#submitBtn").click(function(){
    var name = $("#name").val();
    var subject =  $("#subject").val();
    var email = $("#email").val();
    var message = $("#message").val();
    if(name == ""){
        alert("Please Enter Name!!")
    }else if(email == ""){
        alert("Please Enter Email!!")
    }else if(subject == ""){
        alert("Please Enter subject!!")
    }else if(message == ""){
        alert("Please Enter message!!")
    }else{
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email.match(validRegex)){
            SendMail(name,email,subject,message);
        }else{
            alert("Enter Valid Email Id");
            $("#email").val("");
        }
    }
    
})

function SendMail(name,email,subject,message){
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "nagarkardurgesh@gmail.com",
                Password : "187B0FE368875856B13BE99C947F3FCD0D88",
                To : 'durgesh4work@gmail.com',
                From : email.trim(),
                Subject : subject,
                Body : "Name : " + name + "<br> Email : " + email +"<br> Message : "+ message
            }).then(
            message => alert("Thank you !!")
            );
    }