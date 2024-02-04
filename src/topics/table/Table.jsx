import TableRender from './TableRender.jsx';

const  Table = () => {
  return (
    <div>
        <TableRender products={PRODUCTS}/>
    </div>
  )
}

const PRODUCTS = [
    {category: 'sporting Goods', price: '$49.99', name: 'Football'},
    {category: 'sporting Goods', price: '$9.99', name: 'Baseball'},
    {category: 'Electronics', price: '$99.99', name: 'iPod Touch'},
    {category: 'sporting Goods', price: '$399.99', name: 'no name'}
];

export default  Table