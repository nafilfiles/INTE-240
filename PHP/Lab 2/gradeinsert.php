<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grade Insert</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-red-200 font-mono text-xl font-bold text-center mt-8">
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "itgrades";
    $course = "INTE 240";
    $grade = "A";
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "INSERT INTO inte (course, grade)
VALUES ('$course', '$grade')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
    ?>
</body>

</html>