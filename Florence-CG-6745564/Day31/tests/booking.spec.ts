import { test, expect } from "@playwright/test";
import { AuthPage } from "../pages/AuthPage";
import { BookingPage } from "../pages/BookingPage";
import authData from "../data/auth.json";
import bookingData from "../data/booking.json";

const BASE_URL = "https://restful-booker.herokuapp.com";

test.describe("Booking — GetBooking", () => {
  let bookingPage: BookingPage;

  test.beforeEach(async ({ request }) => {
    bookingPage = new BookingPage(request, BASE_URL);
  });

  test("should return booking details for a valid booking ID", async () => {
    const response = await bookingPage.getBooking(bookingData.getBooking.validId);

    expect(response.status()).toBe(bookingData.expectedStatusCodes.ok);

    const body = await response.json();
    expect(body).toHaveProperty("firstname");
    expect(body).toHaveProperty("lastname");
    expect(body).toHaveProperty("totalprice");
    expect(body).toHaveProperty("depositpaid");
    expect(body).toHaveProperty("bookingdates");
    expect(body.bookingdates).toHaveProperty("checkin");
    expect(body.bookingdates).toHaveProperty("checkout");

    console.log(`GetBooking(${bookingData.getBooking.validId}):`, JSON.stringify(body, null, 2));
  });

  test("should return correct data types in the booking response", async () => {
    const response = await bookingPage.getBooking(bookingData.getBooking.validId);
    const body = await response.json();

    expect(typeof body.firstname).toBe("string");
    expect(typeof body.lastname).toBe("string");
    expect(typeof body.totalprice).toBe("number");
    expect(typeof body.depositpaid).toBe("boolean");
    expect(typeof body.bookingdates.checkin).toBe("string");
    expect(typeof body.bookingdates.checkout).toBe("string");
  });

  test("should return 404 for a non-existent booking ID", async () => {
    const response = await bookingPage.getBooking(bookingData.getBooking.invalidId);

    expect(response.status()).toBe(bookingData.expectedStatusCodes.notFound);
  });
});

test.describe("Booking — CreateBooking", () => {
  let bookingPage: BookingPage;

  test.beforeEach(async ({ request }) => {
    bookingPage = new BookingPage(request, BASE_URL);
  });

  test("should create a new booking and return booking ID + details", async () => {
    const payload = bookingData.createBooking.valid;
    const response = await bookingPage.createBooking(payload);

    expect(response.status()).toBe(bookingData.expectedStatusCodes.ok);

    const body = await response.json();
    expect(body).toHaveProperty("bookingid");
    expect(typeof body.bookingid).toBe("number");
    expect(body.bookingid).toBeGreaterThan(0);

    expect(body.booking.firstname).toBe(payload.firstname);
    expect(body.booking.lastname).toBe(payload.lastname);
    expect(body.booking.totalprice).toBe(payload.totalprice);
    expect(body.booking.depositpaid).toBe(payload.depositpaid);
    expect(body.booking.bookingdates.checkin).toBe(payload.bookingdates.checkin);
    expect(body.booking.bookingdates.checkout).toBe(payload.bookingdates.checkout);
    expect(body.booking.additionalneeds).toBe(payload.additionalneeds);

    console.log(`CreateBooking — bookingid: ${body.bookingid}`);
  });

  test("should be able to fetch the newly created booking by ID", async () => {
    const payload = bookingData.createBooking.valid;

    const bookingId = await bookingPage.createBookingAndGetId(payload);
    expect(bookingId).toBeGreaterThan(0);

    const getResponse = await bookingPage.getBooking(bookingId);
    expect(getResponse.status()).toBe(bookingData.expectedStatusCodes.ok);

    const body = await getResponse.json();
    expect(body.firstname).toBe(payload.firstname);
    expect(body.lastname).toBe(payload.lastname);

    console.log(` Created and verified bookingid: ${bookingId}`);
  });

  test("should return 500 when required fields are missing", async () => {
    const response = await bookingPage.createBooking(bookingData.createBooking.missingFields);

    expect(response.status()).toBe(bookingData.expectedStatusCodes.serverError);
  });
});

test.describe("Booking — UpdateBooking", () => {
  let authPage: AuthPage;
  let bookingPage: BookingPage;
  let bookingId: number;
  let authToken: string;

  test.beforeEach(async ({ request }) => {
    authPage = new AuthPage(request, BASE_URL);
    bookingPage = new BookingPage(request, BASE_URL);

    authToken = await authPage.getValidToken(authData.validCredentials);

    bookingId = await bookingPage.createBookingAndGetId(bookingData.createBooking.valid);

    console.log(`🔧 Setup — bookingId: ${bookingId}, token: ${authToken}`);
  });

  test("should fully update a booking and return the updated data", async () => {
    const updatePayload = bookingData.updateBooking.valid;
    const response = await bookingPage.updateBooking(bookingId, updatePayload, authToken);

    expect(response.status()).toBe(bookingData.expectedStatusCodes.ok);

    const body = await response.json();
    expect(body.firstname).toBe(updatePayload.firstname);
    expect(body.lastname).toBe(updatePayload.lastname);
    expect(body.totalprice).toBe(updatePayload.totalprice);
    expect(body.depositpaid).toBe(updatePayload.depositpaid);
    expect(body.bookingdates.checkin).toBe(updatePayload.bookingdates.checkin);
    expect(body.bookingdates.checkout).toBe(updatePayload.bookingdates.checkout);
    expect(body.additionalneeds).toBe(updatePayload.additionalneeds);

    console.log(` UpdateBooking(${bookingId}) successful`);
  });

  test("should return 403 when no auth token is provided", async () => {
    const response = await bookingPage.updateBookingWithoutAuth(
      bookingId,
      bookingData.updateBooking.valid
    );

    expect(response.status()).toBe(bookingData.expectedStatusCodes.forbidden);
  });

  test("should return 405 for updating a non-existent booking ID", async () => {
    const response = await bookingPage.updateBooking(
      bookingData.getBooking.invalidId,
      bookingData.updateBooking.valid,
      authToken
    );

    expect(response.status()).toBe(bookingData.expectedStatusCodes.methodNotAllowed);
  });
});
