// Check valid inputs
// Check that it throws when no inputs are given
// Check that it throws when inputs are not of the proper type
// Check that it throws when given illogical input
// Check that any edge cases are handled properly.


const { add, subtract, multiply, divide, clearAllfields} = require("./calculator");

describe("valid additions", () => {
  test("1 + 1 = 2", () => {
    expect(add(1, 1)).toEqual(2);
  });

  test("10 + (-20) = -10", () => {
    expect(add(10, -20)).toEqual(-10);
  });

});
describe("valid subtractions", () => {
    test("100 - 20 = 80", () => {
      expect(subtract(100, 20)).toEqual(80);
    });
  
    test("878 - 52398 = -51520", () => {
      expect(subtract(878, 52398)).toEqual(-51520);
    });
});

describe("valid multiplications", () => {
    test("20 * 40 = 800", () => {
      expect(multiply(20, 40)).toEqual(800);
    });
  
    test("100000 * 2.5 = 250000", () => {
      expect(multiply(100000, 2.5)).toEqual(250000);
    });
});
  
describe("valid divisions", () => {
    test("20 / 2 = 10", () => {
      expect(divide(20, 2)).toEqual(10);
    });
  
    test("44 / 4 = 11", () => {
      expect(divide(44, 4)).toEqual(11);
    });
});

describe("divison error cases", () => {
    test("60 / 0 throws", () => {
      expect(() => {
        expect(divide(60, 0));
      }).toThrow();
    });
});

describe("factorial validation", () => {
        test("20 < 0", () => {
            expect(() => {
                expect(factorial(20));
              }).toThrow();

        });
        test("1 == 1", () => {
            expect(() => {
                expect(factorial(1)).toEqual(1);
              });
        });
        test("0 == 0", () => {
            expect(() => {
                expect(factorial(0)).toEqual(1);
              });
        });
        test("4 > 1", () => {
            expect(() => {
                expect(factorial(4)).toEqual(24);
              });
        });

});
    