import logo from "../logo.svg"

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <h2>FRUIT CALORIE</h2>
            <p>Calculator</p>
        </div>
    );
}

export default Header;