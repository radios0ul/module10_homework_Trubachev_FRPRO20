let x = false;

switch (typeof x) {
  case "string":
    console.log("STRING");
    break;

  case "number":
    console.log("NUMBER");
    break;

  case "boolean":
    console.log("BOOLEAN");
    break;

  default:
    console.log("Тип x не определён");
}