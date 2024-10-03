
import CartItem from '../../components/CartItem'
import { age } from './data'

export default function Cart() {
    let cart = ['tomato', 'pasta', 'coconut']
    return (
        <div>
            <h4 className="title">Cart</h4>
            {cart.map(item => {
                return(
                    <CartItem name={item}/>
                )
            })}
        </div>
    )
} 