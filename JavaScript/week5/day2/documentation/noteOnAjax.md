# AJAX

Asynchronous JavaScript and XML, while not a technology in itself, is a term coined in 2005 by Jesse James Garrett, that describes a "new" approach to using a number of existing technologies together, including HTML or XHTML, CSS, JavaScript, DOM, XML, XSLT, and most importantly the XMLHttpRequest object.

When these technologies are combined in the **Ajax model**, web applications are able to make quick, incremental updates to the user interface without reloading the entire browser page. This makes the application faster and more responsive to user actions.

Although X in Ajax stands for XML, JSON is used more than XML nowadays because of its many advantages such as being lighter and a part of JavaScript. Both JSON and XML are used for packaging information in the Ajax model.

**Ajax is just a means** of loading data from the server and selectively updating parts of a web page without reloading the whole page.

In a nutshell, **it is the use of the XMLHttpRequest object to communicate with servers**

### Note

Ajax has become so popular that you hardly find an application that doesn't use Ajax to some extent. The example of some large-scale Ajax-driven online applications are: Gmail, Google Maps, Google Docs, YouTube, Facebook, Flickr, and so many other applications.

Note: Ajax is not a new technology, in fact, Ajax is not even really a technology at all. Ajax is just a term to describe the process of exchanging data from a web server asynchronously through JavaScript, without refreshing the page.

---

## Why AJAX

AJAX is a developer's dream, because you can:

1. Read data from a web server - after the page has loaded

2. Update a web page without reloading the page

3. Send data to a web server - in the background

---

## XMLHttpRequest

Basically, what Ajax does is make use of the browser's built-in XMLHttpRequest (XHR) object to send and receive information to and from a web server asynchronously, in the background, without blocking the page or interfering with the user's experience.

To perform Ajax communication JavaScript uses a special object built into the **browser—an XMLHttpRequest (XHR)** object—to make HTTP requests to the server and receive data in response.

All modern browsers (Chrome, Firefox, IE7+, Safari, Opera) support the XMLHttpRequest object

![ajax](https://www.tutorialrepublic.com/lib/images/ajax-illustration.png)

![ajax](https://www.excellarate.com/wp-content/uploads/2019/11/modern-way-ajax-in-wp-image1.png)

---

## Why XMLHttpRequest

### Note

The GET method is generally used to send small amount of data to the server. Whereas, the POST method is used to send large amount of data, such as form data.In GET method, the data is sent as URL parameters. But, in POST method, the data is sent to the server as a part of the HTTP request body. Data sent through POST method will not visible in the URL.

### Details

XMLHttpRequest is a built-in browser object that allows to make HTTP requests in JavaScript.

In modern web-development XMLHttpRequest is used for three reasons:

1. Historical reasons: we need to support existing scripts with XMLHttpRequest.

2. We need to support old browsers, and don’t want polyfills (e.g. to keep scripts tiny).

3. We need something that fetch can’t do yet, e.g. to track upload progress

**[See more HERE](https://attacomsian.com/blog/xhr-monitor-progress)**

---

## Events

## Most used events

Listen to xhr events for response.

These three events are the most widely used:

1. load – when the request is complete (even if HTTP status is like 400 or 500), and the response is fully downloaded.

2. error – when the request couldn’t be made, e.g. network down or invalid URL.

3. progress – triggers periodically while the response is being downloaded, reports how much has been downloaded.

## Ready states

XMLHttpRequest changes between states as it progresses. The current state is accessible as xhr.readyState.

All states, as in the specification:

```
UNSENT = 0; // initial state
OPENED = 1; // open called
HEADERS_RECEIVED = 2; // response headers received
LOADING = 3; // response is loading (a data packet is received)
DONE = 4; // request complete
```

![readystate](C:\Users\nakac\OneDrive\Documents\Sessions DI\Advanced Javascript - Week5\Week5Day2\AJAX\pics\readyState.png)


### onreadystatechange

An event handler for an event that fires at every state change.

* readyState = 0 After you have created the XMLHttpRequest object, but before you have called the open() method.

* readyState = 1 After you have called the open() method, but before you have called send().

* readyState = 2 After you have called send().

* readyState = 3 After the browser has established a communication with the server, but before the server has completed the response.

* readyState = 4 After the request has been completed, and the response data has been completely received from the server.

---

## Steps with XMLHttpRequest

1. Create an XMLHttpRequest object;
2. Confirguration of the request
	
	`xhr.open(method, URL, [async, user, password])`

	This method specifies the main parameters of the request:

	* method – HTTP-method. Usually "GET" or "POST".

	* URL – the URL to request, a string, can be URL object.

	* async – if explicitly set to false, then the request is synchronous, we’ll cover that a bit later.

	* user, password – login and password for basic HTTP auth (if required).

3. Opens the connection and sends the request to server
	
	`xhr.send([body])`

---

# API

See video https://www.youtube.com/watch?v=7YcW25PHnAA 