export function convertDate(number) {
  console.log("convertDate function ran");
  var myDate = new Date(number);
  return myDate.getDate() + "/" + (myDate.getMonth() + 1);
}
