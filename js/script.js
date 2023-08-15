// step one
document.getElementById('btn-submit').addEventListener('click', function(){
    // step tow
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // step three
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // step four //we don't use this method
    if(email === "nirob@gmail.com" && password === "nirob"){
        window.location.href = 'bank.html';
    }else{
        alert("invalid user");
    }
})