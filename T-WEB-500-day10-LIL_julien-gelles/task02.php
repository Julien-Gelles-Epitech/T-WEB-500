<?php
    $validemail = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    header('Content-type: application/json');
    if ($validemail) {
        echo json_encode(array("msg" => "Valid Email"));
    }else{
        http_response_code(400);
        echo json_encode(array("msg" => "Invalid Email"));
    }
?>