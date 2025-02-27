import { sayHello } from "../server.ts";

describe("sayHello", () => {
  it('should log "hello world" to the console', () => {
    // Spy on console.log
    const logSpy = jest.spyOn(console, "log");

    // Call the function that triggers console.log
    sayHello();

    // Check that console.log was called with the correct message
    expect(logSpy).toHaveBeenCalledWith("hello world");

    // Restore the original console.log after the test
    logSpy.mockRestore();
  });
});
