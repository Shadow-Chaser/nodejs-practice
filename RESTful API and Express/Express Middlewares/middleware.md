# Middleware
What is the middleware?
> Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.

Now what is the next middleware function?
> The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.


Middleware functions can perform the following tasks:
* Execute any code.
* Make changes to the request and the response objects.
* End the request-response cycle.
* Call the next middleware in the stack.

<br/>

_**Example**_

```javascript
const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
```
