import { useParams } from 'react-router-dom';

const Product = () => {
	const params = useParams();
	return <h1>{params.name}</h1>;
};

export default Product;
