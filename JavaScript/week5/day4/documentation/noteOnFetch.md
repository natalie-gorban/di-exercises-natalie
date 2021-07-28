# FETCH API

The Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.

If you have worked with XMLHttpRequest (XHR) object, the Fetch API can perform all the tasks as the XHR object does.

In addition, the Fetch API is much simpler and cleaner. It uses the **Promise** to deliver more flexible features to make requests to servers from the web browsers.

The `fetch()` method is available in the global scope that instructs the web browsers to send a request to a URL.

The promise rejects if the fetch was unable to make HTTP-request, e.g. network problems, or there’s no such site. Abnormal HTTP-statuses, such as 404 or 500 do not cause an error.

```javascript
fetch(url)
    .then(response => {
        // handle the response
    })
    .catch(error => {
        // handle the error
    });
```

*Syntax*

```
const fetchResponsePromise = fetch(resource [, init])
```

Parameters

1. resource
This defines the resource that you wish to fetch. This can either be:

    * A string or any other object with a stringifier — including a URL object — that provides the URL of the resource you want to fetch.

    * A Request object.

2. init (Optional)
An object containing any custom settings that you want to apply to the request. The possible options are:

    * method
    The request method, e.g., GET, POST. By default GET

    * headers
    Any headers you want to add to your request, contained within a Headers object 

    * body
    Any body that you want to add to your request


---

## With POST request

Fetch defaults to GET requests, but you can use all other types of requests, change the headers, and send data. To do this, you need to set your object and pass it as the second argument of the fetch function.

This object needs to include three keys: **method**, **body**, and **headers**. 

* The method key should have the value 'POST'. 

* body should be set to a JSON string. 

* Note that the request body should be a JSON string while the headers should be a JSON object.

Documentation here : https://javascript.info/fetch

```
// Default options are marked with *
method: 'POST', // *GET, POST, PUT, DELETE, etc.
mode: 'cors', // no-cors, *cors, same-origin
cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
credentials: 'same-origin', // include, *same-origin, omit
headers: {
  'Content-Type': 'application/json'
  // 'Content-Type': 'application/x-www-form-urlencoded',
},
redirect: 'follow', // manual, *follow, error
referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
body: JSON.stringify(data) // body data type must match "Cont
```

---

# GET Request

A basic fetch request is really simple to set up. Have a look at the following code:

```javascript
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

Here we are fetching a JSON file across the network and printing it to the console. 

The simplest use of `fetch()` takes one argument — the path to the resource you want to fetch — and **returns a promise containing the response (a Response object).**

This is just an HTTP response, not the actual JSON. 
To extract the JSON body content from the response, we use the `Response.json()`method.

---

# POST REQUEST

Uploading JSON data

Use `fetch()` to POST JSON-encoded data.

```javascript
const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
```

