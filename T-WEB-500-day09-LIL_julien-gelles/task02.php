<?php
    function render_body(string $str){
        switch ($str) {
            case 'home':
                $page = file_get_contents("home.html");
                return $page;
            case 'php':
                $page = file_get_contents("php.html");
                return $page;
            case 'sql':
                $page = file_get_contents("sql.html");
                return $page;
            default:
                return "<p>Unknown page</p>";
        }
    }
?>