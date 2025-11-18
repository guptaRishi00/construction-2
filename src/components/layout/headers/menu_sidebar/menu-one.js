import { Link } from 'react-router-dom';
import logo1 from "../../../assets/logo/logo.svg";
import ResponsiveMenu from "../responsive-menu";

const MobileMenuOne = ({ isOpen, setIsOpen }) => {
    return (
        <div className={`menu__bar-popup ${isOpen ? "show" : ""}`}>
            <div className="menu__bar-popup-top">
                <div className="logo">
                    <Link to="/"><img src={logo1} alt='QuadFour Infra Pvt Ltd' /></Link>
                </div>
                <div className="close" onClick={() => setIsOpen(false)}>
                    <i className="fal fa-times"></i>
                </div>
            </div>
            <div className="responsive-menu mean-container">
                <div className="mean-bar">
                    <div className="mean-nav">
                        <ResponsiveMenu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenuOne;