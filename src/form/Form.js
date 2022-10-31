
import React, { } from 'react';
import './form.css'



const Form = () => {

    const [name, setName] = React.useState("")
    const [mail, setMail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [question, setQuestion] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [agreement, setAgreement] = React.useState("");
    const [agreement2, setAgreement2] = React.useState("");


    const hendelSub = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(mail)
        console.log(phone)
        console.log(question)
        console.log(message)
        console.log(agreement)
        console.log(agreement2)
    }

    return (
        <div className='wrapForm'>
            <h2>Есть вопросы ? Задовайте!</h2>

            <div>
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
                                <input type="checkbox" id="agreement" name="agreement" value={agreement} onChange={(e) => setAgreement(e.target.value)} />
                                <label for="agreement">Я согласен на обработку моих персональных данных</label>
                            </div>
                            <div>
                                <input type="checkbox" id="agreement2" name="agreement2" value={agreement2} onChange={(e) => setAgreement2(e.target.value)} />
                                <label for="agreement2">Я согласен на обработку моих персональных данных</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={(e) => hendelSub(e)}><svg width="44" height="25" viewBox="0 0 44 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43.8735 12.5L23.8735 0.952994V24.047L43.8735 12.5ZM0.877441 14.5H25.8735V10.5H0.877441V14.5Z" fill="white" />
                        </svg>
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}


export default Form;