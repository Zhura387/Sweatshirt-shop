import './modal.css';
import React, { } from 'react';

const Modal = ({ items, modalClouse }) => {
    const [mail, setMail] = React.useState("");
    const [phone, setPhone] = React.useState("");

    const prod = items.map((item) => item)

    const handleClick = () => {
        postForm(prod)
    }

    const postForm = async (prod) => {
        const res = await fetch('https://6312695bb466aa9b0389c80a.mockapi.io/order',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "mail": mail,
                    "phone": phone,
                    'product': prod,
                }),
            }
        )
        const data = await res.json()
        console.log(data)
    }

    return (
        <div className='conteinerModal'>
            <div className='wrappModal'>
                <div className='headerModal'>
                    <h2>Заказ собран</h2>
                    <button onClick={modalClouse}>
                        <svg width="25" height="25" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.8105 0.600068C32.1555 0.944851 32.3494 1.41257 32.3496 1.90033C32.3497 2.38808 32.1561 2.85593 31.8113 3.20094L18.8113 16.2096L31.8199 29.2096C32.1649 29.5544 32.3588 30.0221 32.359 30.5099C32.3592 30.9976 32.1656 31.4655 31.8208 31.8105C31.476 32.1555 31.0083 32.3494 30.5205 32.3496C30.0328 32.3497 29.5649 32.1561 29.2199 31.8113L16.2113 18.8113L3.21122 31.8199C2.86644 32.1649 2.39872 32.3588 1.91096 32.359C1.42321 32.3592 0.955362 32.1656 0.610352 31.8208C0.265342 31.476 0.0714259 31.0083 0.0712651 30.5205C0.0711044 30.0328 0.264712 29.5649 0.609495 29.2199L13.6096 16.2113L0.600924 3.21122C0.255913 2.86644 0.0619977 2.39872 0.061837 1.91097C0.0616762 1.42321 0.255284 0.955363 0.600067 0.610353C0.94485 0.265343 1.41257 0.0714281 1.90032 0.0712674C2.38808 0.0711066 2.85592 0.264713 3.20094 0.609496L16.2096 13.6096L29.2096 0.600925C29.5544 0.255914 30.0221 0.062 30.5099 0.0618392C30.9976 0.0616785 31.4655 0.255285 31.8105 0.600068V0.600068Z" fill="black" />
                        </svg>
                    </button>
                </div>
                <div className='wrappContent'>
                    {items.map((item) => (
                        <div className='contentModal'>
                            <div><span> <img style={{ height: '60px' }} src={item.imageUrl}></img></span></div>
                            <div className='infoModal'><span>{item.name}</span>
                                <span>{item.model}</span>
                                <span>{item.price}</span></div>
                        </div>
                    ))}
                </div>
                <div className='modalFooter'>
                    <div className='formPlace'>
                        <div>
                            <span>Подтвердите заказ и с Вами свяжутся</span>
                        </div>
                        <form className='formModal'>
                            <div className='inputModal'>
                                <input type="email" placeholder="Введите E-mail" name="mail" id="mail" value={mail} onChange={(e) => setMail(e.target.value)}></input>
                                <input type="tel" placeholder="Введите телефон" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                            </div>
                            <button onClick={() => handleClick()} className='btnModal'>Подтвердить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;