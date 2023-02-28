var arr = [70, 70, 70, 80, 90, 60]
var sum = 0;
for (const a of arr) {
  sum += a;
}
const avg = sum / arr.length;
console.log("Mang nhap vao",arr)
console.log("Gia tri trung binh",avg)

switch (true) {
    case (avg<=70):
        console.log("D grade");
        break;
    case (avg>71 && avg<=80) :
        console.log("C grade");
        break;
    case (avg>81 && avg<=90):
        console.log("B grade");
        break;
    case (avg>91 && avg<=100):
        console.log("A grade");
        break;
    default:
        console.log("error")
}