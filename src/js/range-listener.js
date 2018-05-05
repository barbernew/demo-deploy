/*RANGE*/
var arrayOfRanges = document.getElementsByClassName('range');

console.log(document.getElementsByClassName('range'));

arrayOfRanges[0].addEventListener('change', function () {
    changeData(0, this.value);
}, false);
arrayOfRanges[0].addEventListener('input', function () {
    changeData(0, this.value)
}, false);
arrayOfRanges[1].addEventListener('change', function () {
    changeData(1, this.value)
}, false);
arrayOfRanges[1].addEventListener('input', function () {
    changeData(1, this.value)
}, false);
arrayOfRanges[2].addEventListener('change', function () {
    changeData(2, this.value)
}, false);
arrayOfRanges[2].addEventListener('input', function () {
    changeData(2, this.value)
}, false);

function changeData(i, value) {
    document.getElementById(i).innerHTML = value;
    changeResualt();
}

function changeResualt() {
    var resultData = 0;
    for (var i = 0; i < 3; i++){
        resultData += +document.getElementById(`${i}`).innerHTML;
    }
    document.getElementById('result-label').innerHTML = `${Math.round(resultData)} EUR`;
}
