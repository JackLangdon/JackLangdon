<?php
$errors = '';

$myemail = 'john@johnlangdon.io';
//<-----Put Your email address here.
if(empty($_POST['first_name'])  ||
   empty($_POST['last_name']) ||
   empty($_POST['email_address']) ||
   empty($_POST['subject']) ||
   empty($_POST['message']))
{
    $errors .= "\n Error: all fields are required";
}


$first_name = $_POST['first_name'];

$last_name = $_POST['last_name'];

$email_address = $_POST['email_address'];

$subject = $_POST['subject'];

$message = $_POST['message'];



if (!preg_match(

"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",

$email_address))

{

    $errors .= "\n Error: Invalid email address";

}

if( empty($errors))
{

$to = $myemail;
// $to = "john@johnlangdon.io";

$email_subject = "Contact form submission: $last_name";

$email_body = "You have received a new message. ".

" Here are the details:\n First Name: $first_name \n Last Name: $last_name \n ".

"Email: $email_address\n Subject: $subject\n Message: \n $message";

$headers = "From: $myemail\n";

$headers .= "Reply-To: $email_address";

mail($to,$email_subject,$email_body,$headers);

//redirect to the 'thank you' page

header('Location: http://johnlangdon.io/');

// Does this give a success alert? If no, can delete.
echo "<script>alert('Mail was sent !');</script>";
}
