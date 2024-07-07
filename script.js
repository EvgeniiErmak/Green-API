function getApiUrl() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    return `https://api.green-api.com/waInstance${idInstance}`;
}

function displayResponse(response) {
    document.getElementById('response').innerText = JSON.stringify(response, null, 2);
}

async function getSettings() {
    const apiUrl = getApiUrl();
    const response = await fetch(`${apiUrl}/getSettings/${apiTokenInstance}`);
    const data = await response.json();
    displayResponse(data);
}

async function getStateInstance() {
    const apiUrl = getApiUrl();
    const response = await fetch(`${apiUrl}/getStateInstance/${apiTokenInstance}`);
    const data = await response.json();
    displayResponse(data);
}

async function sendMessage() {
    const apiUrl = getApiUrl();
    const response = await fetch(`${apiUrl}/sendMessage/${apiTokenInstance}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({chatId: '11001234567@c.us', message: 'Hello from GREEN-API!'})
    });
    const data = await response.json();
    displayResponse(data);
}

async function sendFileByUrl() {
    const apiUrl = getApiUrl();
    const response = await fetch(`${apiUrl}/sendFileByUrl/${apiTokenInstance}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({chatId: '11001234567@c.us', urlFile: 'https://example.com/file.png', fileName: 'file.png', caption: 'Check out this file!'})
    });
    const data = await response.json();
    displayResponse(data);
}
