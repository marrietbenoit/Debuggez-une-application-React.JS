import { getMonth } from "./index";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
    // Create a date in January
    const date = new Date(2022, 0, 1);

    // Verify that getMonth returns the correct month
    expect(getMonth(date)).toBe("janvier");
});
        it("the function return juillet for 2022-07-08 as date", () => {
    // Create a date in July
    const date = new Date(2022, 6, 8);

    // Verify that getMonth returns the correct month
    expect(getMonth(date)).toBe("juillet");
});
it("the function returns décembre for 2022-12-31 as date", () => {
    // Create a date in December
    const date = new Date(2022, 11, 31);

    // Verify that getMonth returns the correct month
    expect(getMonth(date)).toBe("décembre");
});
    });
})

