const values = [10, 20, 30, 5, 8, -10];

const calculation = {
  sum(arr) {
    let sum = 0;
    arr.map((value) => {
      sum += value;
    });

    return console.log(sum);
  },
  sub(arr) {
    let sub = values[0];
    values.shift();

    arr.map((value) => {
      sub -= value;
    });

    return console.log(sub);
  },
  div(a, b) {
    if (a === 0 || b === 0) {
      return console.log("it is not possible to divide by zero");
    } else {
      return console.log(a / b);
    }
  },
  multi(arr) {
    let multi = values[0];
    values.shift();

    arr.map((value) => {
      multi *= value;
    });

    return console.log(multi);
  },
};

calculation.multi(values);
calculation.sum(values);
calculation.sub(values);
calculation.div(10, 1500);
