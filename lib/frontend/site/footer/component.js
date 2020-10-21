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
            <br />
            <p className=''>
              JUNTAS es un espacio de diálogo, articulación y co-construcción de agendas de mujeres progresistas de América Latina
            </p>
          </div>
            <nav className='menu'>
              <Link to='/ayuda/como-funciona'>¿Cómo funciona?</Link>
              <Link to='/ayuda/acerca'>Acerca de este sitio</Link>
              <Link to='/ayuda/acerca'>Contacto</Link>
            </nav>
            <nav className='menu'>
              <Link to='/ayuda/terminos-y-condiciones'>{ t('help.tos.title')}</Link>
              <Link to='/ayuda/privacidad'>{ t('help.pp.title')}</Link>
            </nav>
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
