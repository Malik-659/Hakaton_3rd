import { useEffect } from 'react';
import s from './OrganizationsList.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import OrganizationSearch from './OrganizationSearch';
import OrganizationSort from './OrganizationSort';

const OrganizationsList = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])
  return (
      <div className={s.organizationsList}>
          <div className={s.container}>
        
              <h2 className={s.title}>
                  <div className={s.waviy}>
                      <span style={{ '--i': 1 }}>С</span>
                      <span style={{ '--i': 2 }}>П</span>
                      <span style={{ '--i': 3 }}>И</span>
                      <span style={{ '--i': 4 }}>С</span>
                      <span style={{ '--i': 5 }}>О</span>
                      <span style={{ '--i': 6 }}>К</span>
                  </div>
                  <div className={s.waviy}>
                      <span style={{ '--i': 7 }}>О</span>
                      <span style={{ '--i': 8 }}>Р</span>
                      <span style={{ '--i': 9 }}>Г</span>
                      <span style={{ '--i': 10 }}>А</span>
                      <span style={{ '--i': 11 }}>Н</span>
                      <span style={{ '--i': 12 }}>И</span>
                      <span style={{ '--i': 13 }}>З</span>
                      <span style={{ '--i': 14 }}>А</span>
                      <span style={{ '--i': 15 }}>Ц</span>
                      <span style={{ '--i': 16 }}>И</span>
                      <span style={{ '--i': 17 }}>Й</span>
                  </div>
              </h2>
              <div style={{display:"flex", width: "60vw", justifyContent:"space-around", margin: "14px 0"}}>
              <OrganizationSearch />
              <OrganizationSort />
              </div>
              <div className={s.cards}>
                  <div data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000" className={s.card}>
                      <div>
                          <p>Название организации</p>
                          <h3 className={s.cardTitle}>ЦОН Жибек-Жолу</h3>
                          <p>Сумма</p>
                          <h3>2 000 000</h3>
                      </div>
                      <div className={s.info}>
                          <div>
                              <p>Год</p>
                              <h4>2023</h4>
                          </div>
                          <div>
                              <p>Номер счета</p>
                              <h4>41565841568415874154</h4>
                          </div>
                      </div>
                      <div>
                        <img className={s.imageAnimated} src='https://cdn-icons-gif.flaticon.com/9822/9822032.gif' />
                      </div>
                  </div>
                  <div data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000" className={s.card}>
                      <div>
                          <p>Название организации</p>
                          <h3 className={s.cardTitle}>ЦОН Жибек-Жолу</h3>
                          <p>Сумма</p>
                          <h3>2 000 000</h3>
                      </div>
                      <div className={s.info}>
                          <div>
                              <p>Год</p>
                              <h4>2023</h4>
                          </div>
                          <div>
                              <p>Номер счета</p>
                              <h4>41565841568415874154</h4>
                          </div>
                      </div>
                      <div>
                        <img className={s.imageAnimated} src='https://cdn-icons-gif.flaticon.com/9822/9822032.gif' />
                      </div>
                  </div>
                  <div data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000" className={s.card}>
                      <div>
                          <p>Название организации</p>
                          <h3 className={s.cardTitle}>ЦОН Жибек-Жолу</h3>
                          <p>Сумма</p>
                          <h3>2 000 000</h3>
                      </div>
                      <div className={s.info}>
                          <div>
                              <p>Год</p>
                              <h4>2023</h4>
                          </div>
                          <div>
                              <p>Номер счета</p>
                              <h4>41565841568415874154</h4>
                          </div>
                      </div>
                      <div>
                        <img className={s.imageAnimated} src='https://cdn-icons-gif.flaticon.com/9822/9822032.gif' />
                      </div>
                  </div>
                  <div data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000" className={s.card}>
                      <div>
                          <p>Название организации</p>
                          <h3 className={s.cardTitle}>ЦОН Жибек-Жолу</h3>
                          <p>Сумма</p>
                          <h3>2 000 000</h3>
                      </div>
                      <div className={s.info}>
                          <div>
                              <p>Год</p>
                              <h4>2023</h4>
                          </div>
                          <div>
                              <p>Номер счета</p>
                              <h4>41565841568415874154</h4>
                          </div>
                      </div>
                      <div>
                        <img className={s.imageAnimated} src='https://cdn-icons-gif.flaticon.com/9822/9822032.gif' />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default OrganizationsList