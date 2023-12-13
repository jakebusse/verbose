function copy(id) {
    // Get the text field
    var copyText = document.getElementById(id);

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.textContent);

    // Alert the copied text
    // alert("Copied the text: " + copyText.textContent);
    }

function populate() {
    document.getElementById('custName').textContent = document.getElementById('inputCustName').value;
    document.getElementById('custConcern').textContent = document.getElementById('inputCustConcern').value;
    document.getElementById('empathyAdjective').textContent = document.getElementById('inputEmpathyAdjective').value;
}

function reset() {
    document.getElementById('custName').textContent = '[NAME]';
    document.getElementById('custConcern').textContent = '[CONCERN]';
    document.getElementById('empathyAdjective').textContent = '[EMPATHY ADJECTIVE]';
}