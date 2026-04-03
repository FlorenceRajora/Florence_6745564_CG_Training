import { test, expect } from "@playwright/test";
import { AuthPage } from "../pages/AuthPage";
import authData from "../data/auth.json";

const BASE_URL = "https://restful-booker.herokuapp.com";

test.describe("Auth — CreateToken", () => {
  let authPage: AuthPage;

  test.beforeEach(async ({ request }) => {
    authPage = new AuthPage(request, BASE_URL);
  });

  test("should return a token for valid credentials", async () => {
    const response = await authPage.createToken(authData.validCredentials);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty("token");
    expect(typeof body.token).toBe("string");
    expect(body.token.length).toBeGreaterThan(0);

    console.log(` Token received: ${body.token}`);
  });

  test("should return an alphanumeric token for valid credentials", async () => {
    const response = await authPage.createToken(authData.validCredentials);
    const body = await response.json();

    expect(body.token).toMatch(/^[a-zA-Z0-9]+$/);
  });

  test("should return 'Bad credentials' for invalid password", async () => {
    const response = await authPage.createToken(authData.invalidCredentials);

    expect(response.status()).toBe(200); 
    const body = await response.json();
    expect(body).toHaveProperty("reason");
    expect(body.reason).toBe(authData.expectedMessages.badCredentials);
  });

  test("should return 'Bad credentials' for empty credentials", async () => {
    const response = await authPage.createToken(authData.emptyCredentials);

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty("reason");
    expect(body.reason).toBe(authData.expectedMessages.badCredentials);
  });
});
