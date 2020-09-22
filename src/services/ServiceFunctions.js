import config from '../config/config'
import TokenService from './token-service'

const headers = {
    headers: {
    'authorization': `bearer ${TokenService.getAuthToken()}`,
    }
}

const ServiceFunctions = {
   submitOrder(ord, items, userInfo){
        const url = config.API_ENDPOINT + '/orders'

        const user = {
            "first_name": userInfo['first-name'],
            "last_name": userInfo['last-name'],
            "email": userInfo.email,
            "phone_number": userInfo['phone-number']
        }

        const order = {
            "readydate": ord.ready_date,
            "total": ord.total
        }

        const submitedOrder = {
            order,
            user,
            items
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(submitedOrder),
            headers: {
                'Content-Type': 'application/json'
            }
        }

    const submitted = fetch(url, options)
        .then(res => {
            if(!res.ok){
                throw new Error("something went wrong")
            }
            return res.json();
        })
        .then(data => data)
        .catch(err => "something went wrong");
         
    return submitted
    },
    getAllOrders(){ 
        const url = config.API_ENDPOINT + '/orders'

        const OrderData = fetch(url, headers)
        .then(res => {
            if(!res.ok){
                throw new Error("something went wrong")
            }
            return res.json();
        })
        .then(data => {
            return data
        })
        .catch(err => "something went wrong");

        return OrderData
    },
    getUnfinished(){
        const url = config.API_ENDPOINT + '/orders/unfinished'
        
        const unfinishedOrders = fetch(url, headers)
        .then(res => {
            if(!res.ok){
                throw new Error("something went wrong")
            }
            return res.json()
        })
        .then(data => data)
        .catch(err => console.log(err))

        return unfinishedOrders
    },
    getCompleted(){
    const url = config.API_ENDPOINT + '/orders/completed'
      const completedOrders = fetch(url, headers)
        .then(res => {
            if(!res.ok){
                throw new Error('something is wrong')
            }

            return res.json()
        })
        .then(data => data)
        .catch(err => 'something went wrong')

        return completedOrders
    },
    getItemsInAnOrder(order_id){
        const url = config.API_ENDPOINT + '/orders/items/' + order_id
        
        const items = fetch(url, headers)
        .then(res => {
            if(!res.ok){
                throw new Error('something went wrong') 
            }

            return res.json()
        })
        .then(data => data)
        .catch(err => 'something went wrong')

        return items
    },
    complete(id){
        const url = config.API_ENDPOINT + '/orders/completed'

        let userid = {
            "user_id": id
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(userid),
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        }

       const complete = fetch(url, options)
        .then(res => {
            if(!res.ok){
                throw new Error('something went wrong')
            }
            return res.json()
        })
        .then(data => data)
        .catch(err => "something went wrong");

        return complete
    },
    async completeOrder(id, selected){
        const complete = await ServiceFunctions.complete(id)
        const orders = await (selected === 'new' ? ServiceFunctions.getAllOrders() : ServiceFunctions.getUnfinished())

        return orders
    }


}

export default ServiceFunctions