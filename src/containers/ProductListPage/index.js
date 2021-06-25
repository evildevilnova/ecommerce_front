import React from 'react'
import Layout from '../../components/Layout';
import getParams from '../../utils/getParams';
import ClothingAndAccessories from './ClothingAndAccessories';
import ProductPage from './productPage';
import ProductStore from './ProductStore';

const ProductListPage = (props) => {

    const renderProduct = () => {
        console.log(props)
        const params = getParams(props.location.search);
        console.log(params);    
        let content = null;
        switch(params.type){
            case 'store':
                content = <ProductStore {...props}/>;
                break;
            case 'page':
                content = <ProductPage {...props} />;
                break;
            default: 
                content = <ClothingAndAccessories {...props} />; 
            }
            return content;
    }
 
    return (
        <Layout>
            {renderProduct()}
        </Layout>
    )
}

export default ProductListPage;
