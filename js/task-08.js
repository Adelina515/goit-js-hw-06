/*
Напиши скрипт управління формою логіна.
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.+
Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
 що всі поля повинні бути заповнені.
Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, 
де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. 
Для доступу до елементів форми використовуй властивість elements.
Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
*/

const form = document.querySelector(".login-form");

form.addEventListener('submit', handleSendForm);

function handleSendForm(event) {
    event.preventDefault();
    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const password = formEl.password.value;
    const formData = {
        email,
        password,
    }
    if (email === "" || password === "") {
        alert(" Всі поля повинні бути заповнені");
    } else {
        console.log(formData);
        document.querySelector(".login-form").reset();
    }
}
