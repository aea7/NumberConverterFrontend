## Number Converter App (Spring Boot, Swagger, MySQL, React)

In the project directory, you can run:
To run the backend:

java -jar backend/numberConverter-0.0.1-SNAPSHOT.jar
-

And Backend code is at:
https://github.com/aea7/NumberConverter

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

## Backend README.md file:

## Number Converter Backend

Run the Spring application (MySQL should be running locally) and then:

Try out the api with http://localhost:8080/swagger-ui.html 

OR

http://localhost:8080/option  ->  returns the format options GET
-

http://localhost:8080/convert  ->  returns the format options POST, body example:
-

{
 from: "Decimal",
 to: "Hexadecimal", 
 number: 123
}