import { test,request } from "@playwright/test";

test("post_api_testing",async({request})=>{
    let r1 = await request.post("https://petstore3.swagger.io/api/v3/pet",{
        data:{
             id: "51",
            name: "dog",
            status: "available"
        }
    })
    console.log(r1);    
    console.log((await r1.json()).name)
})
test("get_api_testing",async({request})=>{
    let r1 = await request.get("https://petstore3.swagger.io/api/v3/pet/51")
    console.log(r1);    
    console.log((await r1.json()).name)
})
test("put_api_testing",async({request})=>{
    let r1 = await request.put("https://petstore3.swagger.io/api/v3/pet/51",{
        data:{
             id: "51",
            name: "cat",
            status: "available"
        }
    })
    console.log(r1);    
    console.log((await r1.json()).name)
})
test("delete_api_testing",async({request})=>{
    let r1 = await request.delete("https://petstore3.swagger.io/api/v3/pet/51")
    console.log(r1);    
})