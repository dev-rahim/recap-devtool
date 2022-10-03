console.log('I am ok');

const mailValidation = () => {
    const userMail = document.getElementById('user-mail').value;
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (pattern.test(userMail)) {
        const small = document.createElement('small');
        small.classList.add('text-success')

        document.getElementById('header').appendChild()
    }
    else {

    }
}