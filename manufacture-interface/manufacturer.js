// JavaScript code for the manufacturer interface
const socket = io();
const messageArea = document.querySelector('.message__area');
const textarea = document.querySelector('#textarea');
const sendButton = document.querySelector('#sendButton');

socket.on('message', (msg) => {
    appendMessage(msg, 'incoming');
    scrollToBottom();
});

sendButton.addEventListener('click', () => {
    const message = textarea.value.trim();
    if (message) {
        sendMessage(message);
    }
});

textarea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const message = textarea.value.trim();
        if (message) {
            sendMessage(message);
        }
    }
});

function sendMessage(message) {
    let msg = {
        user: 'Manufacturer',
        message: message.trim()
    };

    appendMessage(msg, 'outgoing');
    textarea.value = '';
    scrollToBottom();

    socket.emit('message', msg);
}

function appendMessage(msg, type) {
    let messageDiv = document.createElement('div');
    let className = 'message ' + type;
    messageDiv.classList.add(className);
    messageDiv.innerHTML = `<h4>${msg.user}</h4><p>${msg.message}</p>`;
    messageArea.appendChild(messageDiv);
}

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight;
}
