<?php
    function dynamic_body(){
        switch ($_GET["page"]) {
            case 'home':
                return file_get_contents("home.html");
            case 'php':
                return file_get_contents("php.html");
            case 'sql':
                return file_get_contents("sql.html");
            default:
                return "<p>Unknown page</p>";
        }
    }
?>