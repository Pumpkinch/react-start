import React from "react";
import "./styles.css";
import smallIcon1 from "../../small-icon1.svg";
import image from "../../img-index.svg";
import icon1 from "../../icon1.svg";
import icon2 from "../../icon2.svg";
import icon3 from "../../icon3.svg";
import WidgetApp from "../WidgetApp/WidgetApp";

const WidgetApps = ({ }) => {
    return (
        <div className={["WidgetApps"].join(" ")}>
            <div className="row">
                <div className="list-app">
                    <h1 className="application">Приложения</h1>
                    <div className="list">
                        <WidgetApp smallIcon={smallIcon1} butText="для ANDROiD" icon={icon1} heading="АТИ Грузы и Транспорт" text="Находите и добавляйте грузы, отправляйте предложения, просматривайте информацию по фирме." />
                        <WidgetApp smallIcon={smallIcon1} butText="для ANDROiD" icon={icon2} heading="АТИ Водитель" text="Отслеживайте груз на карте в режиме реального времени." />
                        <WidgetApp smallIcon={smallIcon1} butText="для ANDROiD" icon={icon3} heading="АТИ Мессенджер" text="Обсуждайте детали грузоперевозок, обменивайтесь документами и фотографиями." />

                    </div>
                </div>
                <div class="image-index"><img src={image} /></div>
            </div>
        </div>
    )
}

export default WidgetApps;