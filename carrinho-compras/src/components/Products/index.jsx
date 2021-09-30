import { useState } from 'react/cjs/react.development'
import './style.css'
const Products = ({ productsList }) =>{
    console.log()
    return (
        <div>
            Produtos
            <ul>
                {productsList && productsList.map((produto)=>(
                     <li key={produto.codeValue}>
                         <p>{produto.name}</p>
                         <p>R${produto.price}</p>
                         <p>Desconto:R${produto.discount}</p>
                    </li>
                ))}
            </ul>
            <div>
                <h2>Total com desconto: R${productsList.reduce((prev,curr)=>prev+curr.price,0) - productsList.reduce((prev,curr)=>prev+curr.discount,0) }</h2>
            </div>
        </div>
    )
}
export default Products