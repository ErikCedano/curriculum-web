import '../styles/navBar.css';

export const Navbar = () => {
    return (
        <>
            <div className="bar">
                <div className="sections">
                    <div className="homePage">
                        <button />
                    </div>
                    <div className="informationMe">
                        <button>Inicio</button>
                        <button>Acerca de mi</button>
                        <button>Blog</button>
                        <button>Contacto</button>
                    </div>
                    <div className="contact">
                        <button className="contactButton">Contactame</button>
                    </div>
                </div>
            </div>
        </>
    )
};