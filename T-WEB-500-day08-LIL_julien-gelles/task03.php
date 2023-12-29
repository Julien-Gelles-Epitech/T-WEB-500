<?php
    function get_shortest(array $arr){
        $shortest = null;
        foreach ($arr as $str){
            if ($shortest){
                if (strlen($str) < strlen($shortest)) {
                    $shortest = $str;
                }
            }else {
                $shortest = $str;
            }
        }
        return $shortest;
    }

?>