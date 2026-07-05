var number = document.getElementById("number")

function SetNum(numb) {
    console.log("djghdfg")

    var lastNumber = number.value.toString().slice(number.value.length - 1)

    if (number.value.length == 0) {
        if (numb == "*" || numb == "/") {
            alert("bha start ma * ya / nhi ho sakat")

        }

        else {
            number.value += numb
        }
    }


    else if (lastNumber == "+" || lastNumber == "-" || lastNumber == "*" || lastNumber == "/" || lastNumber == "%") {
        if (numb == "+" || numb == "-" || numb == "*" || numb == "/" || numb == "%") {
            alert("please enter correct data")
        }
        else {
            number.value += numb
        }
    }
    else {
        number.value += numb
    }

}

function backSpace() {

    number.value = number.value.toString().substring(0, number.value.length - 1)


}

function clearAll() {
    number.value = ""
}


function equalResult() {
    var lastNumber = number.value.toString().slice(number.value.length - 1)
    if (lastNumber == "+" || lastNumber == "-" || lastNumber == "*" || lastNumber == "/" || lastNumber == "%") {
        alert("bhai last ma operator nhi ho sakta")
    }
    else {
        number.value = eval(number.value)
    }

}

function Squre() {


    number.value = number.value * number.value;
}

function Percentage() {

    SetNum('%')

    var numb1 = number.value.split("+")


    var numb2 = numb1[1].replace("%", "")


    var numb3 = numb2 / 100;

    var final = numb1[0] * numb3

    number.value = final.toFixed(0)


}

function SqureRoot() {

    number.value = ((number.value) ** 0.5)
}

function addMinusAdd() {

    if (number.value.length > 0) {
        if (number.value[0] == "-") {

            number.value = number.value.toString().substring(1, number.value.length)

        }
        else {

            number.value = "-" + number.value.toString().substring(0, number.value.length)



        }

    }
}