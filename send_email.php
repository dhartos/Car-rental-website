<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $content = $_POST["content"];

    // Email details
    $to = "holuwarthosyn21@outlook.com";
    $subject = "New enquiry from $name";
    $message = "Name: $name\n\nContent:\n$content";

    // Send email
    if (mail($to, $subject, $message)) {
        echo "Your enquiry has been sent. Check your email for response.";
    } else {
        echo "Failed to send enquiry. Please try again later.";
    }
}
?>
