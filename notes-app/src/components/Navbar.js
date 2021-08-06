const Navbar = ({ darkModeToggle }) => {

    return (
        <div className="header">
            <h3 className="logo">MY NOTES</h3>
            <div className="toggle">
                <i className="indicator"
                    // darkModeToggle((previourState): we can acess to the current state
                    onClick={() => darkModeToggle((previourState) => !previourState)}
                ></i>
            </div>
        </div>
    );
}

export default Navbar;