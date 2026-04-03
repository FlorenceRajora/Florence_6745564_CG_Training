import { APIRequestContext, APIResponse } from "@playwright/test";
export interface BookingDates {
  checkin: string;
  checkout: string;
}

export interface BookingPayload {
  firstname: string;
  lastname: string;
  totalprice: number;
  depositpaid: boolean;
  bookingdates: BookingDates;
  additionalneeds?: string;
}

export class BookingPage {
  private readonly endpoint = "/booking";

  constructor(private request: APIRequestContext, private baseURL: string) {}

  
  async getBooking(bookingId: number): Promise<APIResponse> {
    return this.request.get(`${this.baseURL}${this.endpoint}/${bookingId}`, {
      headers: {
        Accept: "application/json",
      },
    });
  }

  
  async createBooking(payload: Partial<BookingPayload>): Promise<APIResponse> {
    return this.request.post(`${this.baseURL}${this.endpoint}`, {
      data: payload,
    });
  }

  
  async createBookingAndGetId(payload: BookingPayload): Promise<number> {
    const response = await this.createBooking(payload);
    const body = await response.json();
    if (!body.bookingid) {
      throw new Error(
        `Failed to create booking. Response: ${JSON.stringify(body)}`
      );
    }
    return body.bookingid as number;
  }

  
  async updateBooking(
    bookingId: number,
    payload: BookingPayload,
    token: string
  ): Promise<APIResponse> {
    return this.request.put(
      `${this.baseURL}${this.endpoint}/${bookingId}`,
      {
        headers: {
          Cookie: `token=${token}`,
        },
        data: payload,
      }
    );
  }

  async updateBookingWithoutAuth(
    bookingId: number,
    payload: BookingPayload
  ): Promise<APIResponse> {
    return this.request.put(
      `${this.baseURL}${this.endpoint}/${bookingId}`,
      { data: payload }
    );
  }
}
