import { test,request } from "@playwright/test";
let token:string;
test("post_shopperlogin_testing",async({request})=>{
    let r1 = await request.post("https://www.shoppersstack.com/shopping/users/login",{
        data:{
            email:"florencerajora@gmail.com",
            password:"pq$jaJYa6Jg@vZ",
            role:"SHOPPER"
        },ignoreHTTPSErrors:true
    })
    let resp = await r1.json()
    token=resp.data.jwtToken
    console.log(resp)
    console.log(token);

    let r2 = await request.get("https://www.shoppersstack.com/shopping/products/alpha",{
        // headers:{
        //     Authorization:`Bearer ${token}`     }
        ignoreHTTPSErrors:true  ,params:{}      
    })
    console.log(await r2.json())
    let r3 = await request.get("https://www.shoppersstack.com/shopping/shoppers/336912/orders",{
        headers:{
             Authorization:`Bearer ${token}`     }
        ,ignoreHTTPSErrors:true  ,params:{}      
    })
    console.log(await r3.json())
})
test('wishlist', async () => {
    let token;
    let req = await request.newContext({
        ignoreHTTPSErrors: true
    })
    let response = await req.post('https://www.shoppersstack.com/shopping/users/login', {
        data: {
            email:"florencerajora@gmail.com",
            password:"pq$jaJYa6Jg@vZ",
            role:"SHOPPER"
        }
    })
    let resp = await response.json()
    token = resp.data.jwtToken
    let response1 = await req.post('https://www.shoppersstack.com/shopping/shoppers/336912/wishlist', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            productId: 51,
            quantity: 5
        }
    })
    console.log(await response1.json());
    let response2 = await req.get('https://www.shoppersstack.com/shopping/shoppers/336912/wishlist', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    console.log(await response2.json());
    let response3 = await req.delete('https://www.shoppersstack.com/shopping/shoppers/336912/wishlist/51', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
})
test('carts',async()=>{
    let token;
    let req = await request.newContext({
        ignoreHTTPSErrors: true
    })
    let response = await req.post('https://www.shoppersstack.com/shopping/users/login', {
        data: {
            email:"florencerajora@gmail.com",
            password:"pq$jaJYa6Jg@vZ",
            role:"SHOPPER"
        }
    })
    let resp = await response.json()
    token = resp.data.jwtToken
    let response1 = await req.post('https://www.shoppersstack.com/shopping/shoppers/336912/carts', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            productId: 51,
            quantity: 5
        }
    })
    let itemid=(await response1.json()).data.itemId
    console.log(await response1.json());
    let response2 = await req.get('https://www.shoppersstack.com/shopping/shoppers/336912/carts', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    console.log(await response2.json());
    let response3=await req.put(`https://www.shoppersstack.com/shopping/shoppers/336912/carts/${itemid}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            productId: 51,
            quantity: 2
        }
    })
    console.log(await response3.json());
    let response4 = await req.delete('https://www.shoppersstack.com/shopping/shoppers/336912/carts/51', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    console.log(await response4.json());
})
test('orders',async()=>{
    let token;
    let req = await request.newContext({
        ignoreHTTPSErrors: true
    })
    let response = await req.post('https://www.shoppersstack.com/shopping/users/login', {
        data: {
            email:"florencerajora@gmail.com",
            password:"pq$jaJYa6Jg@vZ",
            role:"SHOPPER"
        }
    })
    let resp = await response.json()
    token = resp.data.jwtToken
    let addresponse=await req.get('https://www.shoppersstack.com/shopping/shoppers/336912/address', {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    let addId=(await addresponse.json()).data[0].addressId
    console.log(await addresponse.json());
    let respo1 = await req.post('https://www.shoppersstack.com/shopping/shoppers/336912/carts', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            productId: 51,
            quantity: 1
        }
    })
    let response1 = await req.post('https://www.shoppersstack.com/shopping/shoppers/336912/orders', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
                address: {
                    addressId: addId,
                    buildingInfo: "Flat 302, Shantiniketan Apartments",
                    city: "Jaipur",
                    country: "India",
                    landmark: "Near City Mall",
                    name: "Florence Rajora",
                    phone: "8770070682",
                    pincode: "432106",
                    state: "Rajasthan",
                    streetInfo: "Malviya Nagar",
                    type: "HOME"
                },
                    paymentMode: "COD"
                }
    })
    console.log(await response1.json());
    let response2 = await req.get('https://www.shoppersstack.com/shopping/shoppers/336912/orders', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    console.log(await response2.json());
})
test('address',async()=>{
    let token;
    let req = await request.newContext({
        ignoreHTTPSErrors: true
    })
    let response = await req.post('https://www.shoppersstack.com/shopping/users/login', {
        data: {
            email:"florencerajora@gmail.com",
            password:"pq$jaJYa6Jg@vZ",
            role:"SHOPPER"
        }
    })
    let resp = await response.json()
    token = resp.data.jwtToken
    let addresponse=await req.get('https://www.shoppersstack.com/shopping/shoppers/336912/address', {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    console.log(await addresponse.json());
    let addresponse2=await req.post('https://www.shoppersstack.com/shopping/shoppers/336912/address', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data:{
                addressId: 1,
                buildingInfo: "House 12",
                city: "Jaipur",
                country: "India",
                landmark: "Near mall",
                name: "Florence Rajora",
                phone: 8770070682,
                pincode: 432106,
                state: "Rajasthan",
                streetInfo: "MI Road",
                type: "HOME"
        }
    })
    console.log(await addresponse2.json());
})
test('review',async({request})=>{
    let token;
    let r1 = await request.post('https://www.shoppersstack.com/shopping/users/login', {
        data: {
            email:"florencerajora@gmail.com",
            password:"pq$jaJYa6Jg@vZ",
            role:"SHOPPER"
        },ignoreHTTPSErrors: true
    })
    let resp = await r1.json()
    token = resp.data.jwtToken
    let r2 = await request.post('https://www.shoppersstack.com/shopping/reviews/?productId=51', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
                dateTime: "2026-04-01T09:16:30.206Z",
                description: "florence",
                heading: "Rajora",
                rating: 3,
                shopperId: 336912,
                shopperName: "string"
        },ignoreHTTPSErrors: true
    })
    console.log(await r2.json());
    let r3 = await request.get('https://www.shoppersstack.com/shopping/reviews/51', {
        headers: {
            Authorization: `Bearer ${token}`
        },ignoreHTTPSErrors: true
    })
    console.log(await r3.json());
})