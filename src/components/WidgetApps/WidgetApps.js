import React from 'react';
import './styles.css';
import smallIcon1 from './small-icons/small-icon1.svg';
import smallIcon2 from './small-icons/small-icon2.svg';
import smallIcon3 from './small-icons/small-icon3.svg';
import smallIcon4 from './small-icons/small-icon4.svg';
import smallIcon5 from './small-icons/small-icon5.svg';
import image from '../../img-main.svg';
import icon1 from './icons/icon1.svg';
import icon2 from './icons/icon2.svg';
import icon3 from './icons/icon3.svg';
import WidgetApp from '../WidgetApp';

const data = {
  android: {
    text: 'Для андроид',
    logo: smallIcon1,
  },
  windows: {
    text: 'Для windows',
    logo: smallIcon5,
  },
  ios: {
    text: 'Для ios',
    logo: smallIcon2,
  },
  huawei: {
    text: 'Для huawei',
    logo: smallIcon3,
  },
  rustore: {
    text: 'Для rustore',
    logo: smallIcon4,
  },
};

const WidgetApps = () => (

  <div className={['WidgetApps'].join(' ')}>
    <div className="row">
      <div className="list-app">
        <h1 className="application">Приложения</h1>
        <div className="list">
          <WidgetApp
            data={data}
            name="atiLoads"
            icon={icon1}
            heading="АТИ Грузы и Транспорт"
            text="Находите и добавляйте грузы, отправляйте предложения, просматривайте информацию по фирме."
          />
          <WidgetApp
            data={data}
            name="atiDriver"
            icon={icon2}
            heading="АТИ Водитель"
            text="Отслеживайте груз на карте в режиме реального времени."
          />
          <WidgetApp
            data={data}
            name="atiMassenger"
            icon={icon3}
            heading="АТИ Мессенджер"
            text="Обсуждайте детали грузоперевозок, обменивайтесь документами и фотографиями."
          />

        </div>
      </div>
      <img className="image-main" alt="widget" src={image} />
    </div>
  </div>
);

export default WidgetApps;
