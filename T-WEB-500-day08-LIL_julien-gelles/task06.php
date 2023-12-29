<?php
    function str_to_blocarray(string $str){
        $arr = str_split($str);
        $arr2 = array();
        $current = $arr[0];
        $str2 = "";
        foreach ($arr as $value) {
            if ($value == $current) {
                $str2 = $str2 . $value;
            } else {
                $current = $value;
                array_push($arr2, $str2);
                $str2 = $value;
            }  
        }
        array_push($arr2, $str2);
        return $arr2;
    }

    function blocarray_to_str(array $arr){
        $str = "";
        foreach ($arr as $value) {
            $str = $str . strlen($value);
            $car = str_split($value)[0];
            $str = $str . $car;
        }
        return $str;
    }

    function sequence(int $n){
        $line = "1";
        echo "$line\n";
        for ($i=0; $i < $n; $i++) {
            $arr = str_to_blocarray($line);
            $str = blocarray_to_str($arr);
            echo "$str\n";
            $line = $str;
        }
    }
?>