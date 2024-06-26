const form = document.getElementById("form");
const success = document.getElementById('success');

// Error Messages
const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');
const invalidEmailError = document.getElementById('invalid-email-error');
const noEmailError = document.getElementById('no-email-error');
const queryError = document.getElementById('query-error');
const messageError = document.getElementById('message-error');
const consentError = document.getElementById('consent-error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  
    console.log(data);

    validateInputs();
    
})

function validateInputs() {

    let err = 0

    const firstName = document.getElementById('first-name');
    if (firstName.value === '' || firstName.value === null) {
        firstNameError.style.display = 'block';
        firstName.style.border = 'solid red 2px';
        err += 1;
    } else {
        firstName.style.border = 'solid var(--clr-mediumgrey) 1px';
        firstNameError.style.display = 'none';
    }

    const lastName = document.getElementById('last-name');
    if (lastName.value === '' || lastName.value === null) {
        lastNameError.style.display = 'block';
        lastName.style.border = 'solid red 2px';
        err += 1;
    } else {
        lastName.style.border = 'solid var(--clr-mediumgrey) 1px';
        lastNameError.style.display = 'none';
    }

    const email = document.getElementById('email');
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (email.value === '' || email.value === null) {
        invalidEmailError.style.display = 'none';
        email.style.border = 'solid red 2px';
        noEmailError.style.display = 'block';
        err += 1;
    } else if (!email.value.match(validEmail)) {
        noEmailError.style.display = 'none';
        email.style.border = 'solid red 2px';
        invalidEmailError.style.display = 'block';
        err += 1;
    } else {
        noEmailError.style.display = 'none';
        invalidEmailError.style.display = 'none';
        email.style.border = 'solid var(--clr-mediumgrey) 1px';
    }

    let valid = false;
    const queryType = document.getElementsByName('query-type');
    for (let i = 0; i < queryType.length; i++) {
        if (queryType[i].checked) {
            valid = true;
            break;
        } 
    }
    if (valid) {
        queryError.style.display = 'none'
    } else {
        queryError.style.display = 'block';
        err += 1;
    }

    const message = document.getElementById('message');
    if (message.value === '' || message.value === null) {
        message.style.border = 'solid red 2px';
        messageError.style.display = 'block';
        err += 1;
    } else {
        message.style.border = 'solid var(--clr-mediumgrey) 1px';
        messageError.style.display = 'none';
    }

    const consent = document.getElementById('consent');
    if (consent.checked) {
        consentError.style.display = 'none';
    } else {
        consentError.style.display = 'block';
        err += 1;
    }

    if (err === 0) {
        feedback();
    }
}

function feedback() {
    success.style.display = 'block';
}

