import React from 'react'
import '../styles/aboutMe.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import myPerson from './myPerson';

export const AboutMe = () => {
    return (
        <>

            <div className='information'>
                <div className='description'>
                    <div className='presentation'>
                        <h1>Hola,</h1>
                        <h1>Soy {myPerson.firsName}</h1>
                        <h5 className='descriptionYou'>{myPerson.presentate}</h5>
                    </div>
                    <div className='Me'>
                        <button className='infoMe'>Acerca de mí</button>
                        <button className='MyCV'>Ver CV {' >'}</button>
                    </div>
                    <div className='extraData'>
                        <div className='timeZone'>
                            <div className='tittles'>
                                <h5>Lugar de nacimiento:</h5>
                                <h5>Experiencia:</h5>
                                <h5>Fecha de nacimiento:</h5>
                            </div>
                            <div className='content'>
                                <h4>{myPerson.birthplace}</h4>
                                <h4>{myPerson.experiensYears} year</h4>
                                <h4>{myPerson.brinday}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='socialInformation'>
                    <image className='photoPerfil' />
                    <div className='linkSocial'>
                        <button> <FaFacebook /> </button>
                        <button> <FaTwitter /></button>
                        <button> <FaLinkedin /></button>
                    </div>
                </div>
            </div>

        </>
    )
}
