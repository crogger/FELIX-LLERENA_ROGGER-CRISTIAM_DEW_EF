import { Fragment } from "react";
import './Header.css'   

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKc1doavSg53lV-p-oMYuaHjn-Opou7nSECA&s' alt="MueblesFAST Logo" className="logo-image" />
                <h2>MueblesFAST</h2>
            </div>
            <div className="redes-sociales">
                <a href="https://web.facebook.com/?locale=es_LA&_rdc=1&_rdr" target="_blank"><img className="rs facebook" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnwh8bTFP2921byF6r9p-xEMWCQ60P6aavYIy5iuxcktZEhHlNo1pQYBQLqvY9hSKCA1Q&usqp=CAU" alt="" /></a>
                <a href="https://instagram.com" target="_blank"><img className="rs instagram" src="https://images.vexels.com/content/137380/preview/instagram-icon-logo-748850.png" alt="" /></a>
                <a href="https://www.youtube.com/" target="_blank"><img className="rs youtube" src="https://static.vecteezy.com/system/resources/previews/023/986/480/original/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png" alt="" /></a>
            </div>
        </header>
    );
};

export default Header;
