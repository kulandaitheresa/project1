import React from 'react';
//import ReactDOM from 'react-dom';

function Form() {
  return (
    <div>
     <div class="Form">
      <form>
        <fieldset>
        <legend>Your Details</legend>
        
<label for="User Name"><b>User Name</b></label><br></br>
<input type="user name" name="Name" pattern="[A-Za-z]" required placeholder="Enter a valid name "></input><br/>
 <label for="PhoneNum"><b>Phone Number</b></label><br></br>
    <input id="phonenum" type="tel" pattern="^\d{4}-\d{3}-\d{4}$" required></input><br></br>
     <label for="Company Profile"><b>Company Profile</b></label><br></br>
    <input type="companyprofile" name="Profile" required placeholder="Enter a valid Profile "></input><br></br>
    <label for="email"><b>Email</b></label><br></br>
    <input type="email" name="email" required placeholder="Enter a valid email address"></input><br></br>
     <label for="Address"><b>Address</b></label><br></br>
    <input type="Address" name="Address" required placeholder="Enter a valid  address"></input><br></br><br/>
    <input type="submit" value="Submit"></input><br/><br/>
    <button type="Add" class="Addbtn">Add</button>
    <button type="Edit" class="editbtn">edit</button>
    <button type="Delete" class="deletebtn">Delete</button>
</fieldset>
    </form> 

   
    </div> 
   


  
    
    
</div>

        
  );
}
export default Form;