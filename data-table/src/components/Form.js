

const Form = ({ handleInputChange, handleSubmit, emptyField }) => {
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                {emptyField ? (
                    <div className="input-container">
                        <input
                            value=''
                            type="text"
                            name="fullName"
                            placeholder="full name..."
                            required
                            onChange={(e) => handleInputChange(e)}
                        />
                        <input
                            value=''
                            type="text"
                            name="address"
                            placeholder="address.."
                            required
                            onChange={(e) => handleInputChange(e)}
                        />
                        <input
                            value=''
                            type="text"
                            name="phoneNumber"
                            placeholder="phone number..."
                            required
                            onChange={(e) => handleInputChange(e)}
                        />
                        <input
                            value=''
                            type="text"
                            name="email"
                            required
                            placeholder="Email..."
                            onChange={(e) => handleInputChange(e)}
                        />
                        <button type="submit">Submit</button>
                    </div>
                ) : (
                    <div className="input-container">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="full name..."
                            required
                            onChange={(e) => handleInputChange(e)}
                        />
                        <input
                            // value={address}
                            type="text"
                            name="address"
                            placeholder="address.."
                            required
                            onChange={(e) => handleInputChange(e)}
                        />
                        <input
                            // value={tel}
                            type="text"
                            name="phoneNumber"
                            placeholder="phone number..."
                            required
                            onChange={(e) => handleInputChange(e)}
                        />
                        <input
                            // value={email}
                            type="text"
                            name="email"
                            placeholder="email..."
                            required
                            onChange={(e) => handleInputChange(e)}
                        />
                        <button type="submit">Submit</button>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Form;