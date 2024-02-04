# frontend-dev


# Parcel 
 - Dev Build
 - Local Server
 - HMR = Hot Module Replacement
 - File Watcher Algorithm - written in C++
 - Caching - Faster Builds
 - Image Optimization
 - Minification
 - Bundling
 - Compress your files
 - Consistent Hashing
 - Code Splitting
 - Differential Bundling  - support olders browsers
 - Diagnostic
 - Error Handling
 - HTTPs 
 - Tree shaking - remove unused code 

 # Lifecycle methods of class based components
  ## hierarchy - 
  Render Phase - 
   - Parent constructor
   - Parent render
   - child 1 constructor
   - child 1 render
     - sub-child constructor
     - sub-child render
   - child 2 constructor
   - child 2 render
     - sub-child constructor
     - sub-child render
  Commit Phase - 
   - sub-child componentDidMount(child1)
   - child 1 componentDidMount
   - sub-child componentDidMount(child2)
   - child 2 componentDidMount
   - Parent componentDidMount


 # Testing (Developer)- 
   - Unit Testing
    - you test react component in isolation. Ex Comp A and B,So testing A ,then -> A is Isolated with all other 
   - Integration Testing
   - End to End Testing - e2e testing

  # Setting up testing in your application
   - Install React testing library
   - install Jest
   - install babel dependencies
   - configure Babel 
   - Configure Parcel Config file to disable default babel transplation(go to -> https://parceljs.org/languages/javascript/#babel)
   - Jest configuration - npx jest --init
   - Install jsdon library
   - Install -> npm i -D @babel/preset-react to make JSX work in test cases
   - Include @babel/preset-react inside my babel config file
   - npm i -D @testing-library/jest-dom ->


