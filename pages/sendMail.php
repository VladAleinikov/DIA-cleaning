<?php
if (isset($_POST["name"]) && isset($_POST["tel"])) {
      $name = $_POST["name"];
      $tel = $_POST["tel"];
      $comment = $_POST["comment"];

      $to = "info@diasm.ru";
      $subject = "Форма пользователя";
      $message = "Имя пользовтеля - " . $_POST["email"] . " \nТелефон - " . $_POST["tel"];
      if(strlen($comment) != 0){
            $message .= "\nКомментарий - " . $comment;
      }
      mail($to, $subject, $message);
}
?>