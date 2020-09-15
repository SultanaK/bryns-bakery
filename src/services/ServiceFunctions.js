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
}

export default ServiceFunctions