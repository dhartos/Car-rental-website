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
        
        // Create and style the popup message
        var popup = document.createElement('div');
        popup.textContent = 'Your enquiry has been sent. Check your email for response.';
        popup.classList.add('popup');
        
        // Append the popup to the document body
        document.body.appendChild(popup);
        
        // Remove the popup after a certain time (e.g., 3 seconds)
        setTimeout(function () {
            popup.remove();
        }, 5000);
    });
});
