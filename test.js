
const calculateTemp = () => {
    const inputTemp = document.getElementById('inputtemp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let Fahrenheit = ((cel) * 9 / 5) + 32;
        return Fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = (fah - 32) * (5 / 9).toFixed(1);
        return celsius;
    }

    let result;

    document.getElementById('result').style.color = "black";
    document.getElementById('result').style.fontWeight = "bold";
    //document.getElementById('result').style.textDecoration = "underline";

    if (valueTemp == 'celsius') {

        result = celToFah(inputTemp);
        document.getElementById('result').innerHTML = `🌡️ ${inputTemp} &degC is equals to ${result} ℉`;

    } else {

        result = fahToCel(inputTemp);
        document.getElementById('result').innerHTML = `🌡️ ${inputTemp} &degF is equals to ${result} ℃`;
    }
};

