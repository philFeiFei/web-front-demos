export var sex = "boy";
console.log(sex);
const firstName = "Li";
const lastName = "Phil";
export var calR = function () {
    console.log("计算结果");
}

function changeVal() {
    sex = "girl1";
}
setTimeout(changeVal(), 5000);
export {
    firstName as fName,
    lastName
}



