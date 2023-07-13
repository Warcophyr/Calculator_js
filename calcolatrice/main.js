const number = "0123456789";
const operator = ["+", "-", "x", "/", "n^m", "√", "."];
let calculate = [];

function do_operation()
{
    let calculate = [];
    let result = 0
    const value_to_calculate = document.getElementById("display").value;

    j = 0
    for (let i = 0; i < value_to_calculate.length; i++) 
    {
        if(operator.includes(value_to_calculate[i]))
        {
            calculate.push(Number(value_to_calculate.slice(j, i)));
            calculate.push(value_to_calculate[i]);
            j = i;
        }
        if((i === value_to_calculate.length-1) && (!(operator.includes(value_to_calculate[i]))))
        {
            calculate.push(Number(value_to_calculate.slice(j, i+1)));
        }
    }

    if(operator.includes(calculate[calculate.length-1]))
    {
        calculate.pop();
    }

    for (let i = 0; i < calculate.length; i++) 
    {
        switch (calculate[i+1]) {
            case "+":
                result = result + (calculate[i] + calculate[i+2]);
                break;
            case "-":
                result = result + calculate[i] - calculate[i+2];
                break;
            case "x":
                result = result + (calculate[i] * calculate[i+2]);
                break;
            case "/":
                result = result / (calculate[i] / calculate[i+2]);
                break;
            default:
                break;
        }
    }

    if(calculate.length === 1)
    {
        result = calculate[0]
    }

    console.log(result)

    return document.getElementById("display").value = result; 
}

function remove_last()
{
    let display = document.getElementById("display");
    let value_to_calculate = display.value;
    value_to_calculate = value_to_calculate.slice(0, value_to_calculate.length-1);
    return display.value = value_to_calculate;
}

function operation(element)
{
    let display = document.getElementById("display");
    if(number.includes(element))
    {
        return display.value += element;
    }
    else if (operator.includes(element))
    {
        if((element !== display.value[display.value.length-1]) && (number.includes(display.value[display.value.length-1])))
        {
            return display.value += element;
        }
        else if((element !== display.value[display.value.length]) && (operator.includes(display.value[display.value.length-1])))
        {
            display.value = display.value.slice(0, display.value.length-1);
            return display.value += element;
        }
    }
}
