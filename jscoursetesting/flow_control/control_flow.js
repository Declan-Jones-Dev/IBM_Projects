let userRole = "admin";
let accessLevel; // Unassigned value to variable

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin");
    userMessage = "Welcome, Admin!"; 
    } else {
        userMessage = "Welcome, User!";
} else {
    userMessage = "Please log in to access the system";
}

console.log("User Message:", userMessage);

let userType = "subscriber"; 
let userCategory;

switch (userType) {
    case "admin":
      userCategory = "Administrator";
      break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

// This example shows the use of the ternary operator (? :) to evaluate the "truthyness" of the statement with the "?" operator and evaluates as false if : "Not authenticated" is true and vice versa
let authenticatedStatus = isAuthenticated ? "Authenticated" : 
"Not authenticated"; 

console.log("Authentication Status:", authenticationStatus);


