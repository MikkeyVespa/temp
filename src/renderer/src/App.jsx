import { useEffect, useState } from 'react'
import electronLogo from '../../../resources/icon.png'

//добавим useState для хранения и изменения состояния и пропишем путь к лого

// фиксируем текущее состояние и инициалищируем текущее состояние партнеров
function App() {
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await window.api.getPartners();
      setPartners(res);
    })();
  }, []);


  // отрисуем представление
  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <ul className="members-list">
        {partners.map((partner) => {
          return (
            <li className="member-card">
              <div className="member-data">
                <p className="card_heading">{partner.type} | {partner.name}</p>
                <div className="member-data-info">
                  <p>Директор: {partner.director}</p>
                  <p>Номер телефона: {partner.phone}</p>
                  <p>Рейтинг: {partner.rating}</p>
                </div>
              </div>

            </li>
          );
        })}
      </ul>
    </>
  )
}

export default App

