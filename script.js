console.log

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('send').addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var content = document.getElementById('content').value;

        // Here you can do something with the name and content, like sending it to the server
        
        // For now, let's just log them
        console.log('Name:', name);
        console.log('Content:', content);
        
        // You can also reset the input fields after submission
        document.getElementById('name').value = '';
        document.getElementById('content').value = '';
    });
});
