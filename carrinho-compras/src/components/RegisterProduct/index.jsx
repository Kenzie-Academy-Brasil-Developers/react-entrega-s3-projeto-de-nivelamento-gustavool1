import { useState } from "react"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import './style.css'
const RegisterProduct = ({ productsList,setProductsList }) =>{
    toast.configure()
    const [ product, setProduct ] = useState(
        {
            name:'',
            codeValue:'',
            description:'',
            discount:0,
            price:0,
        })
    const handleClick = (e) =>{
        e.preventDefault()
        const filterProducts = productsList.filter((item)=> item.name === product.name)
        if(filterProducts.length === 1){
            toast.error("Impossível adicionar items iguais ao carrinho")
        }else{
            setProductsList([...productsList, product])
        }
        
        
    }
    return(
        <form>
            <h1>Registrar produto</h1>
            <input type='text' required placeholder='Nome do produto' onChange={(e)=> setProduct({...product,name:e.target.value})}/>
            <input type='text' required placeholder='Descrição'onChange={(e)=> setProduct({...product, description:e.target.value})}/>
            <input type='number' required placeholder='Código do produto' onChange={(e)=> setProduct({...product, codeValue:e.target.value})}/>
            <input type='number' required placeholder='Preço do produto'onChange={(e)=> setProduct({...product, price:e.target.value - product.discount})}/>
            <input type='number' required placeholder='Discount 'onChange={(e)=> setProduct({...product, discount:e.target.value})}/>

            <button  type='submit'onClick={handleClick}>Cadastrar</button>
        </form>
    )
}
export default RegisterProduct