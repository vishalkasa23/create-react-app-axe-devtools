import React from 'react';
import KitchenAPI from '../api/kitchenAPI';

const KitchenAppliances = ()=>(
    <div>
        <table className="table  table-bordered table-hover bg-light m-5">
        <caption style={{'caption-side':'top'}} className="h4 text-center">Kitchen Appliances</caption>
            <thead className="text-dark">
            <tr>
            <th>Appliances</th>
            <th>Brand</th>
            <th>Price</th>
            </tr>
            </thead>
            <tbody>
        {KitchenAPI.all().map(k=>
            <tr key={k.number}>
                <td>{k.name}</td>
                <td>{k.brand}</td>
                <td>{k.price}</td>
            </tr>
        )}
        </tbody>
        </table>
    </div>
)

export default KitchenAppliances;