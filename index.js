

const handleSubmit = (e) => {
    e.preventDefault(e);
  
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  
    console.log(data);

    for (const [key, value] of Object.entries(data)) {    
        console.log(`Key: ${key}, Value: ${value}`);

    
    };
};

function validateEmail() {
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (email.value.match(validEmail)) {
        emailInput.style = '';
        errorMessage.innerHTML = ''; // HACER QUE HAGA ALGO CUANDO ESTÉ BIEN
        success();
    } else if (email.value === '' || !validEmail.test(email)) {
        errorStyle();
    }; 
}