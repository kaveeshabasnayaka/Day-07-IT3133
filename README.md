# Day-07
# topic : React parent child communication
# 2020ICT98

This practical demonstrates parent-to-child and child-to-parent communication using props and state in a functional component setup.

### **Project Overview**

## **Files**
1. **App.js**: Contains the parent component that manages state and passes a callback function to the child component.
2. **Childcom.js**: Represents the child component, which uses the parent's callback to send data back.

## **Key Concepts Covered**
**State Management**: Using `useState` to manage and update the parent's state.
**Props**: Passing data and functions between components.
**Callback Functions**: Enabling the child component to send data back to the parent.

## How It Works
The parent component (App.js) defines a function (receivename) and passes it to the child component as a prop (setfun).
The child component (Childcom.js) calls the setfun function, sending the string "My name is bob" to the parent.
The parent receives the string and updates its state using the useState hook.
The updated state is displayed in the parent component.

## **How to Run**
1. Clone the repository and navigate to the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Navigate to project Folder
```bash
   cd day_7
   ```
4. Run Project
```bash
   npm start
   ```
5. Open your browser and navigate to http://localhost:3000.

## output 
output.png