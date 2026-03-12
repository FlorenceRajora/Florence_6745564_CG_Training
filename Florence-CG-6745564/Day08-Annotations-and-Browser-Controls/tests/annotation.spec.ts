import {test} from "@playwright/test"
//@annotations
//we are adding some extra label

/**
 * skip
 * only
 * fixme
 * fail
 * descirbe
 * slow
 * settimeout
 */

test.skip("test1",async()=>{
    console.log("test1");
})

test("test2",async()=>{
    console.log("test2");
})

test.fixme("test3",async()=>{
    console.log("test3");
})

test("test4",async()=>{
    test.slow()
    console.log("test4");
})

test("test5",async()=>{
    console.log("test5");
})

test.describe("test6",async()=>{
    console.log("test6");
    test("",async({page})=>{
    
    })
})

