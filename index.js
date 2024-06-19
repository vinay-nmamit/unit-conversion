function convertAndDisplay(from, to) {
    const inputValue = document.getElementById('inputValue').value;
    const length = parseFloat(inputValue);

    let result;
    if (from === 'miles' && to === 'km') {
        result = length * 1.6;
        alert(`${length} miles = ${result} km`);
    } else if (from === 'km' && to === 'miles') {
        result = length * 0.6213;
        alert(`${length} km = ${result} miles`);
    } else if (from === 'km' && to === 'ft') {
        result = length * 3281;
        alert(`${length} km = ${result} ft`);
    } else if (from === 'miles' && to === 'ft') {
        result = length * 5280;
        alert(`${length} miles = ${result} ft`);
    } else {
        alert('Unsupported conversion.');
    }
}