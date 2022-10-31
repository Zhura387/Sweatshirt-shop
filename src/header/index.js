import './header.css';


function Head({onClickSave, items}) {

  const sum = (a) => {
    let x = 0
    let b = a.map((item) => item.price + x, x)
    let z = b.reduce(function (sum, current) {
        return sum + current;
    }, 0);
    return (z)
  }

  return (
    <div className="Header">
      <div className='ItemLeft'>
        <a>
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="52" height="52" fill="#F93CC4" />
            <path d="M23.172 14.196V16.968L10.896 36.084H23.172L22.776 39H7.08V36.264L19.464 17.076H8.376V14.196H23.172ZM37.1566 19.596C38.8846 19.596 40.2286 20.112 41.1886 21.144C42.1726 22.176 42.6646 23.592 42.6646 25.392V39H39.3526V25.86C39.3526 24.516 39.0886 23.568 38.5606 23.016C38.0566 22.464 37.3126 22.188 36.3286 22.188C35.3446 22.188 34.4686 22.476 33.7006 23.052C32.9326 23.628 32.2126 24.444 31.5406 25.5V39H28.2286V12.432L31.5406 12.072V22.656C33.0286 20.616 34.9006 19.596 37.1566 19.596Z" fill="black" />
          </svg>
        </a>
        <span>SWEATSHIRT</span>
      </div>

      <div className='ItemRight'>
        <button onClick={onClickSave}>
        <svg width="55" height="53" viewBox="0 0 55 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="27.0584" cy="26.2166" rx="27.0584" ry="26.2166" fill="black"/>
<path d="M20.3 36.4C18.595 36.4 17.2155 37.885 17.2155 39.7C17.2155 41.515 18.595 43 20.3 43C22.005 43 23.4 41.515 23.4 39.7C23.4 37.885 22.005 36.4 20.3 36.4ZM11 10V13.3H14.1L19.68 25.8235L17.5875 29.866C17.3395 30.328 17.2 30.8725 17.2 31.45C17.2 33.265 18.595 34.75 20.3 34.75H38.9V31.45H20.951C20.734 31.45 20.5635 31.2685 20.5635 31.0375L20.61 30.8395L22.005 28.15H33.5525C34.715 28.15 35.738 27.4735 36.265 26.4505L41.814 15.742C41.938 15.511 42 15.2305 42 14.95C42 14.0425 41.3025 13.3 40.45 13.3H17.5255L16.0685 10H11ZM35.8 36.4C34.095 36.4 32.7155 37.885 32.7155 39.7C32.7155 41.515 34.095 43 35.8 43C37.505 43 38.9 41.515 38.9 39.7C38.9 37.885 37.505 36.4 35.8 36.4Z" fill="white"/>
</svg>
        </button>
           <div> {sum(items)}</div>
      </div>
    </div>

  )
}
export default Head;