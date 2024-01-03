function number_checker() {
  let maxNum = 0;
  let maxNumbers = [];

  for (let i = 1; i <= 999; i++) {
    let out = String(i).padStart(3, "0");
    let out2 = out.split("").map(Number);

    console.log("processing...", out2);

    let tempMax = 0;

    const addTrue = checkAddition(out2[0], out2[1], out2[2]);
    const subTrue = checkSubtraction(out2[0], out2[1], out2[2]);
    const multTrue = checkProduct(out2[0], out2[1], out2[2]);
    const divTrue = checkDivision(out2[0], out2[1], out2[2]);
    const powTrue = checkPower(out2[0], out2[1], out2[2]);

    if (addTrue) {
      tempMax++;
    }
    if (subTrue) {
      tempMax++;
    }
    if (multTrue) {
      tempMax++;
    }
    if (divTrue) {
      tempMax++;
    }
    if (powTrue) {
      tempMax++;
    }

    if (tempMax > maxNum) {
      maxNum = tempMax;
      maxNumbers = out2;
    }
  }

  console.log(
    "The max number is: ",
    maxNum,
    " and the max numbers are:",
    maxNumbers
  );
}

function checkAddition(num1, num2, num3) {
  let sum1 = num1 + num2;
  let sum2 = num2 + num3;
  let sum3 = num1 + num3;

  if (sum1 === num3 || sum2 === num1 || sum3 === num2) {
    return true;
  }

  return false;
}

function checkSubtraction(num1, num2, num3) {
  let out1 = Math.abs(num1 - num2);
  let out2 = Math.abs(num2 - num3);
  let out3 = Math.abs(num1 - num3);

  if (out1 === num3 || out2 === num1 || out3 === num2) {
    return true;
  }

  return false;
}

function checkProduct(num1, num2, num3) {
  let out1 = num1 * num2;
  let out2 = num2 * num3;
  let out3 = num1 * num3;

  if (out1 === num3 || out2 === num1 || out3 === num2) {
    return true;
  }

  return false;
}

function checkDivision(num1, num2, num3) {
  let out1 = (out2 = out3 = out4 = out5 = out6 = -1);
  if (num2 !== 0) {
    out1 = num1 / num2;
    out6 = num3 / num2;
  }
  if (num3 !== 0) {
    out2 = num1 / num3;
    out4 = num2 / num3;
  }
  if (num1 !== 0) {
    out3 = num2 / num1;
    out5 = num3 / num1;
  }

  if (
    out1 === num3 ||
    out2 === num2 ||
    out3 === num3 ||
    out4 === num1 ||
    out5 === num2 ||
    out6 === num1
  ) {
    return true;
  }

  return false;
}

function checkPower(num1, num2, num3) {
  let out1 = Math.pow(num1, num2);
  let out2 = Math.pow(num2, num3);
  let out3 = Math.pow(num1, num3);

  if (out1 === num3 || out2 === num1 || out3 === num2) {
    return true;
  }

  return false;
}

number_checker();
