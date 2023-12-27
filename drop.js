<!DOCTYPE html>
<html>
<head>
    <title>Show/Hide Dropdown</title>
    <style>
        #dropdown {
            display: none;
        }
    </style>
</head>
<body>
    <label for="showDropdown">Show Dropdown</label>
    <input type="checkbox" id="showDropdown">
    <div id="dropdown">
        <label for="selectOption">Select an option:</label>
        <select id="selectOption">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var checkbox = document.getElementById('showDropdown');
            var dropdown = document.getElementById('dropdown');
            checkbox.addEventListener('change', function () {
                dropdown.style.display = checkbox.checked ? 'block' : 'none';
            });
        });
    </script>

</body>
</html>
