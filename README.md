# How to usages

1. Move to each folder and run `npm install`
2. start applicartion on different ports

#### commands to run on local

follow instruction on `https://github.com/lalitrhombus/blesk/blob/master/README.md` then

1. Move to repo folder
2. `cd header`
3. `npm install && PORT=3000 npm start`
4.  Open New terminal
5. `cd cart`
6. `npm install && npm link blesk && PORT=4000 npm start`
7. Open New terminal
8. `cd products-list`
9. `npm install && npm link blesk && PORT=5000 npm start`
10. Open New terminal
11. `cd list`
12. `npm install && npm link blesk && PORT=5003 npm start`
13. Open New terminal
14. `cd homepage`
15. `npm start`

`
access the application on (http://localhost:8080/) an unsecrured browser follow these link for more information on how to do that
https://medium.com/@that_lady_dev/how-to-disable-web-security-in-a-chrome-browser-265fa95f6a97 
https://alfilatov.com/posts/run-chrome-without-cors/#:~:text=Just%20do%20follow%20steps%3A,user%2Ddata%2Ddir%3D~%2FchromeTemp`
