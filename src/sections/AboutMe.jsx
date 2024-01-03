import React from 'react'
import '../styles/aboutMe.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
//import { faFacebook } from '@fortawesome/free-solid-svg-icons'

export const AboutMe = () => {
  return (
    <>
    
    <div className='information'>
        <div className='description'>
            <div className='presentation'>
                <h1 className='greeting' >Hola,</h1>
                <h1 className='greeting' >Soy Erik</h1>
                <h4 className='descriptionYou'>Soy Desarrollador Front-End especializado en HTML, 
                CSS, diseño responsivo y AngularJS, también manejo JSON. En la universidad donde estudio, 
                he impartido clases donde he compartido mi conocimiento en lenguajes y 
                tecnologías como programación en C#, VB.NET, ASP.NET, NET MVC, Java, desarrollo para Android y MS SQL Server, 
                los cuales conozco bien aunque no los practico en programación cotidiana.</h4>
            </div>
            <div className='Me'>
                <button className='infoMe'>Acerca de mí</button>
                <button className='MyCV'>Ver CV {'>'}</button>
            </div>
            <div className='extraData'>
                <div className='tittles'>
                    <h>Lugar de nacimiento:</h>
                    <h>Experiencia:</h>
                    <h>Fecha de nacimiento:</h>
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
                    <button> <FaFacebook/> </button>
                    <button> <FaTwitter/></button>
                    <button> <FaLinkedin/></button>
                </div>
        </div>
    </div>
    
    </>
  )
}
