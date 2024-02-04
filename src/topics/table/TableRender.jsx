import React from 'react'

const TableRender = (props) => {
    const product = props.products;
    const rows = [];
    let lastCategory = null;

    // const productTable = () => {
        // return (
            // products.forEach(product => {
                if(product.category != lastCategory){
                    rows.push(
                        <tr key={product.category}>
                            <th colSpan={2}>{product.category}</th>
                        </tr>
                    )
                }
                rows.push(
                    <tr key={product.name}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>
                )
            // };
            // ))}


  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>{rows}</tbody>
    </table>
  )
}

export default TableRender