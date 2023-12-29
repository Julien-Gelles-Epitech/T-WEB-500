<?php
    function whoami(){
        $n = $_POST["name"];
        $a = $_POST["age"];

        if ($n != "" && $a != "" && (int)$a != 0) {
            echo "Hi, my name is $n and I'm $a years old.\n"; 
        }elseif ($n == "" && $a != "" && (int)$a != 0) {
            echo "Hi, I have no name and I'm $a years old.\n";
        }elseif (($n != "" && (int)$a == 0)) {
            echo "Hi, my name is $n.\n";
        }else{
            echo "Hi, I have no name.\n";
        }
    }
?>
