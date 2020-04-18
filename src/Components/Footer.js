import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
    const instagramIcon = <FontAwesomeIcon icon={faInstagramSquare} />
    return (
<React.Fragment>
        <footer className="footer">
            <p>Copyright © 2020 Wszystkie prawa zastrzeżone</p>
            <p>MEBLOWY.PL</p>
            <div className="footer__socialIcons">
            {facebookIcon}
            {instagramIcon}
            </div>
        </footer>
</React.Fragment>
    );
}

export default Footer;
