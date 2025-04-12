import { APIRequestContext } from '@playwright/test';

export class DummyJsonAPI {
    
    public readonly baseUrl = `${process.env.BASE_URL}${process.env.LOGIN_URL}`;
    public readonly userName = `${process.env.USER}`;
    public readonly userPassword = `${process.env.USER_PASSWORD}`;

    constructor(private readonly request: APIRequestContext) {}

    async postLogin() {
        
        const body = {
            username: this.userName,
            password: this.userPassword
        };
    
        const response = await this.request.post(this.baseUrl, {
          data: body,
        });
        return response;
      }

      async getLogin() {
        const userResponse = await this.request.get('https://dummyjson.com/auth/me');
            
          return userResponse;
      }

}