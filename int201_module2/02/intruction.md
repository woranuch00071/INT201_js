### 2.
### Instruction:
- Following practice 1 

#### practice 1 is 

 - Adding task When the user enters text into the input field and clicks the button, add the text as a new item in the list `<ul id="todoList"></ul>.`

1. init() :: Add an event listener to the "addButton" button to call the "addTask" function when clicked.
2. addTask() ::
    * 2.1 Create a `<li>` tag and set its **textContent** to the value from the `<input type="text" id="todoInput" placeholder="Enter a new task">` field.
    * 2.2 Add a `<li>` tag to the `<ul id="todoList"></ul>`
    * 2.3 After adding the item, clear the `<input type="text" id="todoInput" placeholder="Enter a new task">` field to prepare for the next task.
        
#### but change html as follows.

```
<!DOCTYPE html>
<html>
<head>
 <title>Interactive To-Do List</title>
 <style>
 .todoInput {
 padding: 10px;
 font-size: 16px;
 border: 2px solid #ddd;
 border-radius: 4px;
 margin-right: 5px;
 }
 .addButton {
 padding: 10px 20px;
 font-size: 16px;
 background-color: #5cb85c;
 color: white;
 border: none;
 border-radius: 4px;
 cursor: pointer;
 }
 </style>
</head>
<body>
 <div>
 <input type="text" class="todoInput" placeholder="Enter a new task">
 <button class="addButton">Add</button>
 </div>
 <div>
 <ul id="todoList"></ul>
 </div>
 <script src="todo.js"></script>
</body>
</html>

```