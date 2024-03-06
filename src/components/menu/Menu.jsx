import { Link, useNavigate } from 'react-router-dom';

const Menu = () => {
	const navigate = useNavigate();
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/product/ordenador'>Product ordenador</Link>
					</li>
				</ul>
			</nav>
			<button onClick={() => navigate('/')}>Ir al home</button>
		</>
	);
};

export default Menu;

// En los casos de navegar con botones, u otra que no sea un enlace, no se usa Link, sino Navigate.
