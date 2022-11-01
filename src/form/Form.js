import React, { } from 'react';
import './form.css'

const Form = () => {

    const [name, setName] = React.useState("")
    const [mail, setMail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [question, setQuestion] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [checked, setChecked] = React.useState(true);

    const handelSub = (e) => {
        e.preventDefault();
        if (checked) {
            postForm()
        } else {
            alert('Подтвердите обработку Ваших данных')
        }
    }

    const postForm = async () => {
        const res = await fetch('https://6312695bb466aa9b0389c80a.mockapi.io/form',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "name": name,
                    "mail": mail,
                    "phone": phone,
                    "question": question,
                    'message': message,
                }),
            }
        )
        const data = await res.json()
        console.log(data)
    }

    return (
        <div className='wrapForm'>
            <h2>Есть вопросы ? Задaвайте!</h2>

            <form className='form'>
                <div className='formPlace'>
                    <div className='formInfo'>
                        <input type="text" placeholder="Введите имя" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                        <input type="email" placeholder="Введите E-mail" name="mail" id="mail" value={mail} onChange={(e) => setMail(e.target.value)}></input>
                        <input type="tel" placeholder="Введите телефон" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                        <input type="text" placeholder="Тема вопроса" name="question" id="question" value={question} onChange={(e) => setQuestion(e.target.value)}></input>
                    </div>
                    <div className='formText'>
                        <input type="text" placeholder="Введите сообщениее" rows={4} name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)}></input>
                    </div>

                    <div className='formBox'>
                        <div>
                            <input type="checkbox" name="agreement" checked={checked} onChange={() => setChecked(!checked)} />
                            <label for="agreement">Я согласен на обработку моих персональных данных</label>
                        </div>
                    </div>
                </div>
                <div className='btnForm'>
                    <button onClick={(e) => handelSub(e)}><svg width="44" height="25" viewBox="0 0 44 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43.8735 12.5L23.8735 0.952994V24.047L43.8735 12.5ZM0.877441 14.5H25.8735V10.5H0.877441V14.5Z" fill="white" />
                    </svg>
                    </button>
                </div>
                <div className='formImg'>
                    <img style={{ width: '100%', height: '100%' }} src='./30.png' alt='formimage'></img>
                </div>
            </form>
        </div>
    )
}


export default Form;