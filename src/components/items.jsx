import React from 'react';
import GroceryAPI from '../api/groceryAPI';
import {Link} from 'react-router-dom';

const Item = (props) => {
    const item = GroceryAPI.get(parseInt(props.match.params.number));
    if(!item){
        return <div>
            Item Not Found
        </div>
    }
    return <div className="m-2">
        <h1>{item.brand}</h1>
        <h2 className="text-primary">{item.name}</h2>
        <h3 className="text-danger" >Weight: {item.weight} Price: {item.price}</h3>
        <Link to="/grocery" className="btn-danger p-1">Back</Link>
        
    </div>
}

export default Item;