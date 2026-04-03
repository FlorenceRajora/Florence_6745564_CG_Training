import { APIRequestContext, APIResponse } from "@playwright/test";

export class AuthPage {
  private readonly endpoint = "/auth";

  constructor(private request: APIRequestContext, private baseURL: string) {}

  
  async createToken(credentials: {
    username: string;
    password: string;
  }): Promise<APIResponse> {
    return this.request.post(`${this.baseURL}${this.endpoint}`, {
      data: credentials,
    });
  }

 
  async getValidToken(credentials: {
    username: string;
    password: string;
  }): Promise<string> {
    const response = await this.createToken(credentials);
    const body = await response.json();
    if (!body.token) {
      throw new Error(
        `Failed to get auth token. Response: ${JSON.stringify(body)}`
      );
    }
    return body.token as string;
  }
}
