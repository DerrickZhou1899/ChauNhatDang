Problem 4: Three ways to sum to n

Run file to see console log result

Problem 5: A Crude Server

Must run this first:
1. npm run build
2. npm run start
And then everything is good to test

Problem 6: Architecture

Module name: Leaderboard 

Overview:
Website have a scoreboard shows the top 10 users scores, score always update, user can do mission (an action) and complete mission will increase the user score
Version: 
1.0.0
Author: Chau Nhat Dang
Date: April 10,2024
Table of Contents:
1. Introduction
2. Functionality
3. Endpoints
4. Request Parameters
5. Response Format
6. Authentication and Authorization
7. Security
8. Dependencies
9. Deployment
10. Testing

Software Requirements Specification for Scoreboard module
1. Introduction:
The Leaderboard module is designed to track and display rankings of users based on their performance in specific activities or competitions. It allows users to view their own rankings as well as rankings of others.
2. Functionality:
- Update a score for a specific action completed by user.
- Retrieve scores for a specific action or user.
- Update leaderboards based on scores.
- Increase user score upon completing an action.
- Dispatch API call to the application server to update the score upon action completion. 
- Implement real-time scoreboard updates.
- Enforce strict authentication and authorization.
3. Endpoints:
- GET "/leaderboard". Description: Retrieves the leaderboard .
- POST "/action". Description: Allow user to do mission to increase their score
- GET "/list-action". Description: Allow user to view their action remaining
- GET "/score/userID". Description: Get scores of a specific user
- PUT "/update-score/userID". Description: Update user score
- WS /realtime/scoreboard. Description: WebSocket endpoint for real time scoreboard update
4. Input Parameters:
- ActionID: Unique identifier for the action
- Name: Action name
- Desc: Description
- Score reward: Score reward when action complete
5. Output Format:
- The output format will contain a list of leaderboard, each leaderboard containing the user name, rank, score,...
- Status codes: 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Server Error.
- Error messages: Detailed error messages in the response body.
6. Authentication and Authorization:
- Everyone can view the leaderboard but only authenticated user can do activity.
- Requires user authentication using JWT tokens.
- Authorization based on user roles and permissions.
7. Security:
- Input validation is performed to prevent injection attacks. User authentication tokens are securely stored and transmitted using HTTPS.
8. Dependencies:
- Database (mongo,postgreSql) for storing data.
- Authentication service for user authentication.
9. Deployment
- Use cloud platform such as AWS, Azure, use container like Docker for easy management.
10. Testing
- Automated testing like Jest, Mocha.