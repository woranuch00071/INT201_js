### 5.
### Instruction
- Create Registration Form as follows.

**init() :**
1. Create all Elements under `<head>` and `<body>`

    * **head** <br>
    
    `<title>Registration Form</title>`

    * **body**

 ```   
 <h2>Register</h2>
 <div>
 <label for="name">Full Name:</label>
 <input type="text" id="name" name="name" required>
 </div>
 <div>
 <label for="email">Email Address:</label>
 <input type="email" id="email" name="email" required>
 </div>
 <div>
 <button type="submit">Register</button>
 </div>
 //for show userRegister
 <div>
 </div>
 ```

2. add an event listener to the **"Register"** button to call the **"showUserRegister"** function when **clicked.**

**showUserRegister():**
1. Create a `<p>` tag and add a `<p>` tag to last a `<div>` tag.
2. Set a `<p>` tag textContent: name and email from an `<input>` tag.
