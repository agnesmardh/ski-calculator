# Ski length calculator

A web-app which calculates the ski length for you based on body length and age or ski type.
In the GUI there is one tab under the heading for younger childrens and one tab for older children and adults.
Backend in .NET/C# and frontend in React JS.

## Uses the following rules for calculations
* For children under 5 the ski length is the same as body length
* For children over 5 and under 9 the ski length is the same as body length + 15 cm
* For children over 8 and adults with ski type 'classic' the ski length is the same as body length + 20 cm but with a maximum of 207 cm
* For children over 8 and adults with ski type 'freestyle' the ski length is the same as body length + 15 cm

## Description of code
Code and tests for the backend is in ski-backend.
The controllers handles the three API endpoints: One for children and one per type (classic/freestyle) for older children and adults.
The services folder with the service for ski length calculator handles the business logic and is also the code which is being tested.
The test project is called Tests and contain all the backend tests.

The code for the frontend is in ski-frontend.
The forms in the tabs are seperate components.

## To run the project

### Run backend:
In terminal\
cd ski-backend\
dotnet run --project ./Ski/ski.csproj

Go to <https://localhost:5001/swagger/index.html> to see the API

### Run tests for backend:
In terminal\
cd ski-backend/Tests\
dotnet test

### Run frontend:
In terminal\
cd ski-frontend\
npm install\
npm start

With frontend and backend running go to this adress to see the UI:
<https://localhost:3000/>

## Dependencies
Frontend modules to get bootstrap styling of components.\
[reactstrap](https://reactstrap.github.io/)\
[classnames](https://www.npmjs.com/package/classnames)

## Notes and possible improvements
It is just a proof of concept at this time which means that some changes would be necessary before application would go into production.
For example, right now the API allows any origin to make request. That should be changed before application goes into production.
There is some code duplication in the form components in frontend, which could be improved by refactoring.
Quality would also be improved if tests were added in the frontend as well.
Frontend validation could be added for a better user experience. For example checking that the body length input is correct (for example in centimeters and not meters), or that the input for age is correct for the current tab.
