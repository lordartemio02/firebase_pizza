import emailjs from 'emailjs-com';
import * as React from "react";
import validator from 'validator';
import style from './sendEmail.css';
// send the message and get a callback with an error or details of the message that was sent



export default function SendEmail(){
	var name,email,message,phoneNumber = '';

	function sendEmailToClient(email){
		const isValidEmail = email => {
			const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return regex.test(String(email).toLowerCase());
		};

		if(isValidEmail && name && email && message){
			try{
				emailjs.sendForm(
					'service_mtpbi9k',
					'template_6eo82nf',
					'e.target',
					'user_hQtnN6WQ3lPhssV1YKqHc',
					{
						name: "name",
						email: "email",
						message: "message",
						phoneNumber: "phoneNumber",
					}
				);
				console.log("work");
			}
			catch{

			}
		}
	};
	function nameChange(e){
		name = e.target.value;
	};
	function emailChange(e){
		const isValidEmail = email => {
			const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return regex.test(String(e.target.value).toLowerCase());
		};
		if(isValidEmail){
			email = e.target.value;
		}

	};
	function messageChange(e){
		message = e.target.value;
	};
	function phoneNumberChange(e){
		phoneNumber = e.target.value;
	};
	function handlerSubmit(event){
		event.preventDefault();
        const form = event.target;
        const inputsData = form.querySelectorAll('.contact-input');
        const arrDataFromForm = {};
        Array.from(inputsData).map((e)=>{
            const name = e.name;
            const value = (name !== 'phone')
            ? e.value // Записываю пароли
            : e.value.replace(/\D/g, '').replace(/^7/, '8'); // Чищу номера телефона от лишних символов
            arrDataFromForm[name] = value;
        });
        // Проверка номера на валидность
        if(validator.isMobilePhone(arrDataFromForm["phone"], ['ru-RU'])){
            // Изменил state
			phoneNumber = arrDataFromForm["phone"];
			alert("Сообщение отправлено");
			sendEmailToClient(email);

        } else {
            // Предупреждаю, что номер неверный
            alert('Неверный номер телефона необходимо такой формат +79123456789');
            // Подсвечиваю input с номером телефона для удобства
        }
	}

	return(
		<>

			<form className="contact" onSubmit={handlerSubmit}>
			<p className="contact-title">Contact me</p>
				<label className="contact-label" htmlFor="">Name</label>
				<input placeholder="Enter you name" className="contact-input" type="text" onChange={nameChange} required />
				<label className="contact-label" htmlFor="">Email</label>
				<input placeholder="Enter you email" className="contact-input" type="email" onChange={emailChange} required />
				<label className="contact-label" htmlFor="">Message</label>
				<textarea placeholder="Enter you message" rows="3" className="contact-input" type="text" onChange={messageChange} required />
				<label className="contact-label" htmlFor="">Number phone</label>
				<input placeholder="Enter you number" className="contact-input" name="phone" type="tel" onChange={phoneNumberChange} required />
				<button className="contact-button" onClick={sendEmailToClient(email)}>
					Send Email
				</button>
			</form>

		</>
	)
}



