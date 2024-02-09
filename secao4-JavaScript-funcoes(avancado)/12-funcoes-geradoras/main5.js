function* geradora5() {
  yield function() {
    console.log("Vim do y1");
  };

  return function() {
    console.log("Vim do return");
  };

  // ...

  yield function() {
    console.log("Vim do y3");
  };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;

func1();
func2();
func3();
