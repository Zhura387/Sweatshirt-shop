import React from "react";
import './InfoCard.css';
function InfoCard(props) {

  return (
    <div className="infoCard">
      <div className="cardIn"><img src='./3.png' alt='icon-2'></img>
        <div>
          <h3>ткани</h3>
          <p>Множество тканей, шёлк, ацетат, вискоз, синтетика</p>
        </div>
      </div>
      <div className="cardIn"><img src='./2.png' alt='icon-1'></img>
        <div>
          <h3>качество</h3>
          <p>Лучшее качество тавара во всём минске, доказано 1450 человек </p>
        </div>
      </div>
      <div className="cardIn"><img src='./4.png' alt='icon-3'></img>
        <div>
          <h3>бренд</h3>
          <p>Бренд который ты искал, он у нас в онлайн-магазине</p>
        </div>
      </div>
    </div>
  )
}
export default InfoCard;