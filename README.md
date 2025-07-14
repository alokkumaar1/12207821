# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


                                                                                                                        PS C:\Windows\system32> curl -Method Post "http://20.244.56.144/evaluation-service/register" `                          >>   -Headers @{ "Content-Type" = "application/json" } `
>>   -Body '{
>>     "email": "alokkumar82473@gmail.com",
>>     "name": "Alok Kumar",
>>     "mobileNo": "9006808449",
>>     "githubUsername": "alokkumaar1",
>>     "rollNo": "12207821",
>>     "accessCode": "CZypQK"
>>   }'
>>


StatusCode        : 200
StatusDescription : OK
Content           : {"email":"alokkumar82473@gmail.com","name":"alok kumar","rollNo":"12207821","accessCode":"CZypQK","
                    clientID":"d31e9d1b-5c25-49ee-9018-4bcaaf54cf71","clientSecret":"njgaSUVKeUtVCdRX"}
RawContent        : HTTP/1.1 200 OK
                    Access-Control-Allow-Credentials: true                                                                                  Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token,                              Authorization, accept, origin, Cache-Control, X-Requ...                                             Forms             : {}                                                                                                  Headers           : {[Access-Control-Allow-Credentials, true], [Access-Control-Allow-Headers, Content-Type,
                    Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control,
                    X-Requested-With], [Access-Control-Allow-Methods, POST, OPTIONS, GET, PUT],
                    [Access-Control-Allow-Origin, *]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 182



PS C:\Windows\system32> curl -Method Post "http://20.244.56.144/evaluation-service/auth" `
>>   -Headers @{ "Content-Type" = "application/json" } `
>>   -Body '{
>>     "email": "alokkumar82473@gmail.com",
>>     "name": "Alok Kumar",
>>     "rollNo": "12207821",
>>     "accessCode": "CZypQK",
>>     "clientID": "d31e9d1b-5c25-49ee-9018-4bcaaf54cf71",
>>     "clientSecret": "njgaSUVKeUtVCdRX"
>>   }'
>>


StatusCode        : 201
StatusDescription : Created
Content           : {"token_type":"Bearer","access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXV
                    kIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhbG9ra3VtYXI4MjQ3M0BnbWFpbC
                    5j...
RawContent        : HTTP/1.1 201 Created
                    Access-Control-Allow-Credentials: true
                    Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token,
                    Authorization, accept, origin, Cache-Control, X...
Forms             : {}
Headers           : {[Access-Control-Allow-Credentials, true], [Access-Control-Allow-Headers, Content-Type,
                    Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control,
                    X-Requested-With], [Access-Control-Allow-Methods, POST, OPTIONS, GET, PUT],
                    [Access-Control-Allow-Origin, *]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 802



PS C:\Windows\system32>











