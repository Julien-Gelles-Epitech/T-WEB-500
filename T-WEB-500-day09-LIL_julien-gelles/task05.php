<?php

    function whoami() {  
        if (!empty($_POST["age"]) && is_numeric($_POST["age"]) && !empty($_POST["name"])) {
            $body = "Hi, my name is " . strval($_POST["name"]) . " and I'm " . strval($_POST["age"]) . " years old.";
        } else if (!empty($_POST["age"]) && is_numeric($_POST["age"]) && empty($_POST["name"])) {
            $body = "Hi, I have no name and I'm " . $_POST["age"] . "years old.";
        } else if ((empty($_POST["age"]) || !(is_numeric($_POST["age"]))) && !empty($_POST["name"])) {
            $body = "Hi, my name is " . $_POST["name"] . ".";
        } else {
            $body = "Hi, I have no name.";
        }
        if (!empty($_POST["curriculum"])) {
            $body = $body . "I'm a student of " . $_POST["curriculum"] . ".";
        }
        echo $body;
    }

    function form_is_submitted() {
        if (!empty($_POST["name"])|| !empty($_POST["age"])|| !empty($_POST["curriculum"])) {
            return true;
        } else {
            return false;
        }
    }
?>
