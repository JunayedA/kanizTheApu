document.getElementById('login-submit').addEventListener('click',function(){
    //get user email
    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;
    //get user password
    const passwordFild = document.getElementById('user-password');
    const userPassword = passwordFild.value;
    //check email and password
    if(userEmail == 'kanizkabir@gmail.com' && userPassword == '1234'){
        //redirect to another page
        window.location.href = 'banking.html';
    };
});