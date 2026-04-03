import { test, expect } from '@playwright/test';

test('GET API test', async ({ request }) => {
    await request.newContext({
        baseURL: 'https://petstore.swagger.io/v2'
    });
    await request.get('baseURL/pet/findByStatus');
    
});