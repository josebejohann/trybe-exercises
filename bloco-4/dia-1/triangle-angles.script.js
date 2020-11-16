let x = 30;
let y = 60;
let z = 90;

function handleTriangleAngles(x, y, z) {
  if (x + y + z === 180) {
    return true;
  } else {
    return false;
  }
}

console.log(handleTriangleAngles(x, y, z));
