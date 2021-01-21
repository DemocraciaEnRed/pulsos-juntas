import React, { Component } from 'react'
import { Link } from 'react-router'
import t from 't-component'
import config from 'lib/config'

export default class Footer extends Component {

  render () {
    return (
      <div>

      <footer className='ext-footer'>
        <div className='footer container'>
          <div className='institutional'>
            <div className='logo gob'>
              <a href='/'>
                <img src={config.logoFooter} />
                <img src='/lib/frontend/site/home-multiforum/fes.png' />
              </a>
            </div>
            <p className=''>
            SOMOS MUCHAS fue creada con el propósito de ampliar el potencial de las causas feministas. Explora y descubre las herramientas disponibles.
            </p>
          </div>
            <nav className='menu'>
              <Link to='/ayuda/como-funciona'>¿Cómo funciona?</Link>
            </nav>
            <nav className='menu'>
              <Link to='/ayuda/terminos-y-condiciones'>{ t('help.tos.title')}</Link>
              <Link to='/ayuda/privacidad'>{ t('help.pp.title')}</Link>
            </nav>
        </div>
        <div className="social-footer">
          <a href="https://www.facebook.com/OrganizacionArtemisas" target="_blank">
            <img src="/lib/frontend/site/home-multiforum/facebook-brands.svg"/>  
          </a>
          <a href="https://www.instagram.com/organizacionartemisas/" target="_blank">
            <img src="/lib/frontend/site/home-multiforum/instagram-brands.svg"/>
          </a>
          <a href="https://twitter.com/Artemisas_org" target="_blank">
            <img src="/lib/frontend/site/home-multiforum/twitter-brands.svg"/>
          </a>
          <a href="https://www.youtube.com/channel/UCG1I8kZspV32fkRMq9uWiSg?view_as=subscriber" target="_blank">
            <img src="/lib/frontend/site/home-multiforum/youtube-brands.svg"/>
          </a>
        </div>
      </footer>
      <div className='der-footer'>
         <a href="https://democraciaenred.org" target='_blank'>
       <div className='container'>
           <div className='the-box'>
           <img src='/lib/frontend/site/footer/logo-der.svg' className='logo-der'/>
           <span>Hecho por Democracia en Red</span>
           </div>
        </div>
         </a>
      </div>
    </div>
    )
  }
}
