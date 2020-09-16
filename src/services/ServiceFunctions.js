import config from '../config/config'

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

        fetch(url, options)
        .then(res => {
            if(!res.ok){
                throw new Error("something went wrong")
            }
            return res.json();
        })
        .then(data => console.log(data))
        .catch(err => "something went wrong");
            
    },
    getAllOrders(){ 
        const url = config.API_ENDPOINT + '/orders'
        const OrderData = fetch(url)
        .then(res => {
            if(!res.ok){
                throw new Error("something went wrong")
            }
            return res.json();
        })
        .then(data =>{
            return data
        })
        .catch(err => "something went wrong");

        return OrderData
    },
    getUnfinished(){
        const url = config.API_ENDPOINT + '/orders/unfinished'

        const unfinishedOrders = fetch(url)
        .then(res => {
            if(!res.ok){
                throw new Error("something went wrong")
            }
            return res.json()
        })
        .then(data => data)
        .catch(err => 'something went wrong')

        return unfinishedOrders
    },
    getCompleted(){
    const url = config.API_ENDPOINT + '/orders/completed'
      const completedOrders = fetch(url)
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

        const items = fetch(url)
        .then(res => {
            if(!res.ok){
                throw new Error('something went wrong') 
            }

            return res.json()
        })
        .then(data => console.log(data))
        .catch(err => 'something went wrong')

        return items
    },
    complete(id){
        const url = config.API_ENDPOINT + '/orders/completed'

        let userid = {
            "user_id": id
        }

        console.log(userid)
        const options = {
            method: 'POST',
            body: JSON.stringify(userid),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(url, options)
        .then(res => {
            if(!res.ok){
                throw new Error('something went wrong')
            }
            return res.json()
        })
        .then(data => console.log(data))
        .catch(err => "something went wrong");
    }

}

export default ServiceFunctions