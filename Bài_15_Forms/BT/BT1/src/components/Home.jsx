import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    function handleNavigateToAdmin() {
        navigate('/admin');
    }
    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    }
    const buttonStyle2 = {
        backgroundColor: 'green',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    }
    return (
        <div>
            <h1>Home</h1>
            <button style={buttonStyle} onClick={() => { navigate('/product/1') }}>product 1 </button>
            <button style={buttonStyle} onClick={() => { navigate('/product/2') }}>product 2 </button>
            <button style={buttonStyle} onClick={() => { navigate('/product/3') }}>product 3 </button>
            <button style={buttonStyle} onClick={() => { navigate('/product/4') }}>product 4 </button>
            <button style={buttonStyle2} onClick={handleNavigateToAdmin}>Admin</button>
        </div>
    );
}

export default Home;