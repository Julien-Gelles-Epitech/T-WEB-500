<?php
    $data = $_GET["name"];
    header('Content-type: application/json');
    if (!empty($data)) {
        echo json_encode(array("name" => $data));
    }else{
        echo json_encode(array("name" => null));
    }
?>