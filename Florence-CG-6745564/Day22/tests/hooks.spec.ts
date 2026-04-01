import {test} from '@playwright/test';

test.beforeAll("",async () => {
    console.log('beforeAll');
});

test.beforeEach("",async () => {
    console.log('beforeEach');
});

test.afterEach("",async () => {     
    console.log('afterEach');
});

test.afterAll("",async () => {
    console.log('afterAll');
});

test(' test1', async () => {
    console.log('test1');
});
test(' test2', async () => {
    console.log('test2');
});
