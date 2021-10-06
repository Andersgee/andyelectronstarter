import counterReducer, { CounterState, addAmount, setAmount } from "./counterSlice";

describe("counter reducer", () => {
  const initialState: CounterState = {
    value: 3,
  };
  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
    });
  });

  it("should handle add amount", () => {
    const actual = counterReducer(initialState, addAmount(2));
    expect(actual.value).toEqual(5);
  });

  it("should handle set amount", () => {
    const actual = counterReducer(initialState, setAmount(9));
    expect(actual.value).toEqual(9);
  });
});
