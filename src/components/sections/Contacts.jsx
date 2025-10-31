import "../../assets/Contacts.css";
import logo from "../../assets/images/logo.png"
import {useTranslation} from "react-i18next";
const Contacts = () => {

    const { t } = useTranslation();

    return (
        <div id="Contacts">
            <div className="contact-wrapper">
                <div className="contact-info" data-aos="fade-up">
                    <div className="logo_box">
                        <img
                            src={logo}
                            alt="OTABEK & MARAT LOGOTIP"
                            className="contact-logo"
                        />
                    </div>
                    <h3 className="brand-name">OTABEK & MARAT</h3>

                    <div className="social_links" data-aos="fade-up" data-aos-delay="200">
                        <a href="https://www.instagram.com/otabek_marat_mebel" target="_blank" rel="noopener noreffer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://t.me/joinchat/AAAAAEmnJj9WH6sevO3JHw" target="_blank" rel="noopener noreffer"><i className="fa-brands fa-telegram"></i></a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=otabekochilov@gmail.com&body=Assalomu%20alaykum" target="_blank" rel="noopener noreffer"><i className="fa-solid fa-envelope"></i></a>
                    </div>

                    <span>{t(`contactNum`)} :  <a href="tel:+9982827747" rel="noopener noreferrer">+998 97 282 77 47</a></span>
                </div>

                <div className="map-container" data-aos="fade-up" data-aos-delay="400">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6109.935362118992!2d64.525288!3d40.031501!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDAxJzUzLjQiTiA2NMKwMzEnMzEuMCJF!5e0!3m2!1sru!2s!4v1761936224887!5m2!1sru!2s"
                        width="100%"
                        height="450"
                        style={{
                            border: "none",
                            borderRadius: "16px",
                            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer"
                    ></iframe>
                </div>
            </div>

            <div className="copyright">
                <p>© 2025 OTABEK & MARAT. All rights reserved.</p>
                <span>
          Designed by{" "}
                    <a
                        href="https://t.me/buxoro_tadbirkorlar_klubi"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
            Buxoro Tadbirkorlari Biznes Klubi
          </a>
        </span>
            </div>
        </div>
    );
};

export default Contacts;