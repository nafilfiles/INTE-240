<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IT Grades</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-blue-200 font-mono text-xl font-bold text-center mt-8">
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "";
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "DROP Database if EXISTS itgrades;";
    if ($conn->query($sql) === TRUE) {
        echo "Step 1: Database Deleted successfully <br/>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }



    $sql = "Create Database itgrades;";
    if ($conn->query($sql) === TRUE) {
        echo "Step 2: itgrades created successfully <br/>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $sql = "CREATE TABLE `itgrades`.`inte` (`id` INT NOT NULL AUTO_INCREMENT ,
`course` VARCHAR(25) NOT NULL , `grade` VARCHAR(3) NOT NULL , PRIMARY KEY (`id`))
ENGINE = InnoDB;";
    if ($conn->query($sql) === TRUE) {
        echo "Step 3: inte Table created successfully <br/>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
    ?>
</body>

</html>