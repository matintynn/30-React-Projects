const Screen = (props) => {

    return (
        <div className={`screen`} style={{ backgroundColor: props.tempColor }}>
            <h2 className={props.mode}>{props.degree}&deg;C</h2>
        </div >
    );
}

export default Screen;