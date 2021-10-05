import React, { useState } from 'react'

const Signin = () => {

    const [values, setValues] = useState({
        name: '',
        nickName: '',
        email: ''
    });
    const [isPending, setIsPending] = useState(false)
    const [isSubmited, setIsSubmited] = useState(false)

    const changeHandle = (event) => {
        if (event.target.name === "name") {
            setValues({ ...values, name: event.target.value })
        } else if (event.target.name === "nickName") {
            setValues({ ...values, nickName: event.target.value })
        } else {
            setValues({ ...values, email: event.target.value })
        }
    }

    const submitHandle = (event) => {
        setIsPending(true);
        event.preventDefault();
        setTimeout(() => {
            setIsPending(false);
            setIsSubmited(true);
        }, 1000)
    }

    return (
        <div className="signin-bg">
            <div className="signin-container">
                <h2>JOIN OUR COMMUNITY</h2>
                <form onSubmit={(e) => submitHandle(e)}>
                    <input
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={values.name}
                        onChange={(e) => changeHandle(e)}
                        required
                    />
                    <input
                        name="nickName"
                        type="text"
                        placeholder="Prefer name"
                        value={values.nickName}
                        onChange={(e) => changeHandle(e)}
                    />
                    <input
                        name="email"
                        type="text"
                        placeholder="Your email"
                        value={values.email}
                        onChange={(e) => changeHandle(e)}
                        required
                    />
                    {/* {isPending && <button>SENDING ...</button>}
              {!isPending && <button>JOIN NOW</button>} */}
                    {isSubmited ? <button style={{ backgroundColor: "#0DB952" }}>SUBMITED!</button> : isPending ? <button>SENDING ...</button> : <button>JOIN NOW</button>}
                </form>
            </div>
        </div>
    );
}

export default Signin
