<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">

    <title>The HTML5 Herald</title>


</head>
<form action="/test/userdetailtest" method="post" enctype="multipart/form-data">
    @csrf
    <label>
        first name
        <input name="first_name" type="text"></input>
    </label>
    <label>
        last name
        <input name="last_name" type="text"></input>
    </label>
    <input type="file" name="avatar" accept="image/*"></input>
    <button>submit</button>
</form>

<body>
</body>
</html>
