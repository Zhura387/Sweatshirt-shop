import React, { } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Head from './header';
import Card from './card';
import Save from './Save';
import Content from './content/Content';
import InfoCard from './infoCard/InfoCard';
import Form from './form/Form';

function App() {

  const [saveOpened, setSaveOpened] = React.useState(false)
  const [items, setItems] = React.useState([])
  const [itemsCard, setItemsCard] = React.useState([])

  React.useEffect(() => {
    fetch('https://6312695bb466aa9b0389c80a.mockapi.io/items')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setItems(json)
      })
  }, [])

  const onAddCart = (obj) => {
    setItemsCard([...itemsCard, { ...obj, _id: itemsCard.length }])
  }

  const handleDelete = (id) => {
    const henDel = itemsCard.filter((item) => item._id !== id);
    setItemsCard([...henDel]);
  }

  return (
    <div className="Wrapp">
      {saveOpened && <Save
        items={itemsCard}
        handleDelete={handleDelete}
        onClose={() => setSaveOpened(false)} />}

      <Head onClickSave={() => setSaveOpened(true)}
        items={itemsCard}
      />

      <Content />

      <h2>Почему мы лучшие
        в Минске </h2>

      <InfoCard />

      <h2>Каталог sweatshirt </h2>

      <div className='cards'>
        <div className='cardName'>
          <span><Link to="/">Все</Link></span>
          <span> <Link to="/nike">Nike</Link></span>
          <span> <Link to="/StoneIsland">Stone Island</Link></span>
          <span> <Link to="/Adidas">Adidas</Link></span>
          <span> <Link to="/Carhartt">Carhartt</Link></span>
        </div>
        <div className='kat'>
          <Routes>
            <Route path='/' element={items.map((item) => (
              <Card
                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                model={item.model}
                size={item.size}
                price={item.price}
                nul={item.nul}
                addCard={(obj) => onAddCart(obj)} />))} />

            <Route path='/nike' element={items.filter(i => i.name === 'Nike').map((item) => (
              <Card
                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                model={item.model}
                size={item.size}
                price={item.price}
                nul={item.nul}
                addCard={(obj) => onAddCart(obj)} />))} />
            <Route path='/StoneIsland' element={items.filter(i => i.name === 'Stone Island').map((item) => (
              <Card
                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                model={item.model}
                size={item.size}
                price={item.price}
                nul={item.nul}
                addCard={(obj) => onAddCart(obj)} />))} />

            <Route path='/Adidas' element={items.filter(i => i.name === 'Adidas').map((item) => (
              <Card
                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                model={item.model}
                size={item.size}
                price={item.price}
                nul={item.nul}
                addCard={(obj) => onAddCart(obj)} />))} />

            <Route path='/Carhartt' element={items.filter(i => i.name === 'Carhartt').map((item) => (
              <Card
                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                model={item.model}
                size={item.size}
                price={item.price}
                nul={item.nul}
                addCard={(obj) => onAddCart(obj)} />))} />

          </Routes>
        </div>
      </div>
      <Form />
    </div>
  );
}

export default App;
