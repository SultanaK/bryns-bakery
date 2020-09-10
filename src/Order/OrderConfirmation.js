import React, {useContext} from 'react'
import OrderContext from '../Context/OrderContext'

export default function OrderConfirmation(){
    const context = useContext(OrderContext)
    const items = () => {
        const itemArray = Object.keys(context.order)
        return itemArray.map(x => {
            if(context.order[x].type === 'cookies'){
                return <li>
                    <p>{context.order[x].type}</p>
                    <p>{context.order[x].cookieFlavor}</p>
                    <p>{context.order[x].quantity}</p>
                    <p>{context.order[x].theme}</p>
                    <p>${context.order[x].cost}</p>
                </li>
            }else{
                return <li>
                <p>{context.order[x].type}</p>
                <p>{context.order[x].cakeFlavor}</p>
                <p>{context.order[x].frostingFlavor}</p>
                <p>{context.order[x].frostingColor}</p>
                <p>{context.order[x].type === 'cake' ? context.order[x].servingSize : context.order[x].quantity}</p>
                <p>{context.order[x].theme}</p>
                <p>{context.order[x].notes}</p>
                <p>${context.order[x].cost}</p>
            </li>

            }
        })
    }

    return(
        <>
        <h1>Congrats!</h1>
        <p>Thank you {context.userInfo['first-name']}!</p>
        <p>If you have any questions about your order, email or contact us *here*</p>

        <h2>Order</h2>
        <ul>
            {items()}
        </ul>
        </>
    )
}