import wireframe from '../assets/wireframe.svg'

const Message = () => {
    return (
        <div className="page">
            <h1 style={{ color: 'white' }}>
                Message Page
            </h1>
            <img style={{ maxWidth: '100%' }} src={wireframe} alt="wireframe" />

        </div>
    );
}

export default Message;