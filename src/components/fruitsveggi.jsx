import React from 'react';
import fruitsveggiAPI from '../api/fruitsveggiAPI';

const FruitsVeggi = ()=> (
    <div>
        <table className="table  table-bordered table-hover bg-light m-5">
            <caption style={{'caption-side':'top'}} className="h4 text-center">Fruits & Vegetables</caption>
            <thead className="text-dark">
            <tr>
            <th>Fruits & Vegetables</th>
            <th>Price</th>
            </tr>
            </thead>
            <tbody>
        {fruitsveggiAPI.all().map(p=>
        <tr key={p.number}>
            <td>{p.name}</td>
            <td>{p.price}</td>
        </tr>            
        )}
        </tbody>
        </table>
    </div>
)

export default FruitsVeggi;