import React, { useContext, useState } from 'react'
import { cartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../../Firebase/Firebase"
import "./Sales.css"

const Sales = () => {

    const [confirm, setConfirm] = useState(false)
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [direction, setDirection] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState(0)
    const [userId, setUserId] = useState("")
    const [testData, setTestData] = useState("")

    const { prodToCart, clear, subTotal } = useContext(cartContext)

    const order = {
        buyer: {
            name: name,
            lastName: lastName,
            direction: direction,
            email: email,
            phoneNumber: phoneNumber,
        },
        items: prodToCart.map(p => ({id: p.id, title: p.title, price: p.price, quantity: p.quantity})),
        total: subTotal,
    }


    /*const repeatedDataChecker = (name) => {
        const orderCollection = collection(db, "orders")
        getDocs(orderCollection, order)
        .then(result =>{
            setTestData(result)
        })

        testData.forEach(element => {
            if(name == element.name){
                return false
            }else{
                return true
            }
        });   

        if(name == testData.name){ 
            return false
        }else{
            return true
        }
    }*/

    const confirmedOrder = ()=> {        
            const orderCollection = collection(db, "orders")
            addDoc(orderCollection, order)
            .then(({ id }) => {
                console.log(id)
                setUserId(id)
                setConfirm(true)
        })
    }

    const confirmHandler = () => {
        if(nameHandler){
            if(lastNameHandler){
                if(directionHandler){
                    if(emailHandler){
                        if(phoneHandler){
                            confirmedOrder()
                            clear()  
                        }
                    }
                }
            }
        }
    }

    const nameHandler = (e) => {
        if(e.target.value != ''){
            setName(e.target.value)
            return true
        }else{
            return false
        }
    }

    const lastNameHandler = (e) => {
        if(e.target.value != ''){
            setLastName(e.target.value)
            return true
        }else{
            return false
        }
    }
    
    const directionHandler = (e) => {
        if(e.target.value != ''){
            setDirection(e.target.value)
            return true
        }else{
            return false
        }
    }
    
    const emailHandler = (e) => {
        if(e.target.value != ''){
            setEmail(e.target.value)
            return true
        }else{
            return false
        }
    }
    
    const phoneHandler = (e) => {
        if(e.target.value != ''){
            setPhoneNumber(e.target.value)
            return true
        }else{
            return false
        }
    }

  return (
    <div>
        {
            confirm
            ?
            <div>
                <h3>Que disfrute su compra!!!</h3>
                <p>Su codigo de seguimiento es:</p>
                {userId}
            </div>
            :
            <div>
                <div className='selected-products'>
                    <h3>Su compra:</h3>
                    {prodToCart.map((product) => <p key={product.id} product={product.title}> <img width='100px' height='100px' src={product.image}></img> {product.title}: {product.quantity} unidades ${product.price * product.quantity}</p>)}
                </div>
                <div className='form-container'>
                    <p><b>Ingrese sus datos para finalizar</b></p>
                    <form>
                        <div>
                            <label>Nombre:</label>
                            <input type="text" onChange={nameHandler}/>
                        </div>
                        <div>
                            <label>Apellido:</label>
                            <input type="text" onChange={lastNameHandler}/>
                        </div>
                            <label>Direccion:</label>
                            <input type="text" onChange={directionHandler}/>
                        <div>
                        </div>
                            <label>Correo electronico</label>
                            <input type="email" onChange={emailHandler}/>
                        <div>
                            <label>Numero de telefono</label>
                            <input type="number" onChange={phoneHandler}></input>
                        </div>
                    </form>
                    <div>
                        <button className='confirm' onClick={confirmHandler}>Confirmar</button>
                    </div> 
                    <div>
                        <Link to="/"><button>Seguir comprando</button></Link>
                    </div>       
                </div>
            </div>
        }   
    </div>
  )
}

export default Sales