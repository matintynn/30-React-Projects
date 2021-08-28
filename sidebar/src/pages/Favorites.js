import wireframe from '../assets/wireframe.svg'

const Favorites = () => {
    return (
        <div className="page">
            <h1 style={{ color: 'white' }}>
                Favorites Page
            </h1>
            <img style={{ maxWidth: '100%' }} src={wireframe} alt="wireframe" />

        </div>
    );
}

export default Favorites;