import React from 'react'
import '../styles/aboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faFacebook } from '@fortawesome/free-solid-svg-icons'

export const AboutMe = () => {
  return (
    <>
    
    <div className='information'>
        <div className='description'>
            <div className='presentation'>
                <h1 className='firstWork'>AboutMe</h1>
                <h4 className='descriptionYou'>Soy Erik Cedano .........</h4>
            </div>
            <div className='Me'>
                <button className='infoMe'>Acerca de mí</button>
                <button className='MyCV'>Ver CV {'>'}</button>
            </div>
            <div className='extraData'>
                <div className='tittles'>
                    <h color='#2b2bf3'>Lugar de nacimiento:</h>
                    <h color='#2b2bf3'>Experiencia:</h>
                    <h color='#2b2bf3'>Fecha de nacimiento:</h>
                </div>
                <div className='answers'>
                    <h>Mazatlan, Sinaloa</h>
                    <h>1 year</h>
                    <h>19 agost 2000</h>
                </div>
                
            </div>
        </div>
        <div className='socialInformation'>
            <image className='photoPerfil'/>
                <div className='linkSocial'>
                    <button> Facebook </button>
                    <button> Twitter</button>
                    <button> LinkeLink</button>
                </div>
        </div>
    </div>
    
    </>
  )
}
