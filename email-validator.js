console.log('I am ok');

const mailValidation = () => {
    const userMail = document.getElementById('user-mail').value;
    const div = document.getElementById('validation-result');
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (pattern.test(userMail)) {
        div.innerHTML = `
        <small class="text-success">Your mail is valid</small>
        `;
        document.getElementById('header').appendChild(div)
    }
    else {
        div.textContent = '';
        div.innerHTML = `
        <small class="text-danger">Your mail is not valid</small>
        `;
        document.getElementById('header').appendChild(div)
    }
}