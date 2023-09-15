# React

Thank you for stopping by and reading this. This project will focus on highlighting the key aspects of working with the React library. I must warn you that my English, unfortunately, is far from perfect) And overall, this is my first project of this kind. So, I apologize for any mistakes in the text and possibly unclear wording.

## React App structure

1: node_modules - This folder contains all the files needed to run NPM packages. We never manually change the contents of this folder.

2: public - This folder contains assets with our App. For example favicon.ico, images, manifest.json, fonts.

3: index.html - The main file in our App. All manipulate we do in our react App change this file.

4: package.json - This file contains information about all the packages we installed for development.

5: src - This is our main folder. All changes, we add folders with components, write App logic. All this we do in this folder.

### Basic definitions

Component - small piece of functionality. For exempla - button.

Module - series of component.

Pure functions - always returns the same output for the same argument values.

### partOneProps - example using "props"

Following the PROPS legend, we can pass values ​​in from the parent component to the children. And there use this value. PROPS cannot be passed back in this way, from a child component to a parent component.

React components have JSX format. Because of this, the syntax is slightly different. Example: class -> className. Write everything with help camelCase.
In Main component we can see how write the inline style.

### Data and Events
