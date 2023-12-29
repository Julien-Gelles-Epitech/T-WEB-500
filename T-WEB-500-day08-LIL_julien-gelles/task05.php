<?php
    function calc_average(array $arr){
        return round(array_sum($arr) / count($arr), 1);
    }
?>