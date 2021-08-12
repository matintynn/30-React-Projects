import logo from '../logo.svg';
import CostManagement from './CostMgment';

const Header = () => {
    return (
        <div>
            <div className="bg-primary rounded-corner">
                <div className="container">
                    <div className="d-flex align-items-center pt-5">
                        <img src={logo} alt="logo" />
                        <h3 className="text-white ms-2">MY BUDGET</h3>
                    </div>
                    <CostManagement />
                </div>
            </div>
        </div>
    );
}

export default Header;