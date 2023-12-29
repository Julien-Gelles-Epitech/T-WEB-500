<?php
    function calc(string $operator, int $nbr1, int $nbr2){
        if ($operator == "/" && $nbr2 == 0) {
            return "Cannot divide by 0";
        } else {
            switch ($operator) {
                case "+":
                    return $nbr1 + $nbr2;
                case "-":
                    return $nbr1 - $nbr2;
                case "*":
                    return $nbr1 * $nbr2;
                case "/":
                    return $nbr1 / $nbr2;
                case "%":
                    return $nbr1 % $nbr2;
                default:
                    return "Unknown operator";
            }
        }
    }

    function calc2(string $operator, int $nbr1, int $nbr2){
        $arr = array("+","-","*","/","%");
        if (in_array($operator, $arr)) {
            if ($operator == "/" && $nbr2 == 0) {
                return "Cannot divide by 0";
            } else {
                $result = eval( "return $nbr1$operator$nbr2;" ); 
                return $result; 
            }
        }else{
            return "Unknown operator";
        }
    }
?>