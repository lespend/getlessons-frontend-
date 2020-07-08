import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'

const form = document.querySelector('form')
console.log(form)

 function registerUser(data) {
    axios.post(`${BASE_URL}/api/register/`, data)  
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            function deleteAllWarnings() {
                const warningsList = document.getElementsByClassName('alert-warning');
                const warnings = Array.from(warningsList);
                if (!(warnings.length === 0)) {
                    for (let i = 0; i < warnings.length; i++) {
                        let elem = warnings.pop(i)
                        console.log(elem)
                        elem.remove();
                    }
                }   
            }

            deleteAllWarnings();

            console.log(error.response.data)
            let alerts = error.response.data
            for (let fieldName in alerts) {
                const field = document.querySelector(`input[name=${fieldName}]`)
                console.log(field)
                for (let alert in alerts[fieldName]) {
                    let div = document.createElement('div')
                    div.className = 'alert-warning'
                    div.innerHTML = alerts[fieldName][alert]
                    field.after(div)
                        
                }
            }
            form.reset()     
        });
}


form.addEventListener('submit', event => {
    event.preventDefault();
    registerUser({
        'username': '',
        'password': '',
        'email': 'some@email.com',
        'first_name': 'Lol',
        'last_name': 'Kek'
    });
  
//     const username = document.querySelector('input[name=username]').value;
//     console.log(username);

//     const password = document.querySelector('input[name=password]').value;
//     console.log(password);

//     const userdata = {
//         'username': username,
//         'password': password,
//         'email': '',
//         'first_name': '',
//         'last_name': ''
//     }

//     registerUser(userdata)
});

