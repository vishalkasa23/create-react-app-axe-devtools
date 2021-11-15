import React from 'react';
import GroceryAPI from '../api/groceryAPI';
import {Link} from 'react-router-dom';

const AllGrocery = ()=> (
    <div>
        <h2>Grocery Items</h2>
        <ul className="h4">
        
            {GroceryAPI.all().map(g=>
                <li key={g.number}>
                    <Link to={`./grocery/${g.number}`} >{g.name}</Link>
                </li>    
            )}
        </ul>
    </div>
)

export default AllGrocery;