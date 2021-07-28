# Synchronous

**JavaScript is single threaded**

A thread represents how many parts of programs can you execute independently and at the same time. The easiest way to find whether a language is single threaded or multithreaded is by knowing how many call stacks it has. JS has one, so it is a single threaded language.

**One line at a time**

```javascript
console.log("1");
console.log("2"); //cannot execute before "1"
console.log("3"); //cannot execute before "2"
```

So isn’t this a bottleneck? If I run multiple time consuming also referred to as blocking operations like HTTP requests, the program will have to wait for the response of each operation before executing the next one. As they terminate, they are removed in a **LIFO** (last-in, first-out) order. 

![Event Loop and Async Programming in JavaScript | Noteworthy - The Journal  Blog](https://miro.medium.com/max/800/1*fOsu7oCcYn-HpVREkMD8sg.gif)

---

# Asynchronous

Asynchronicity means that if JavaScript has to wait for an operation to complete, it will execute the rest of the code while waiting.

Start something now -> finish it later

When you use callbacks to continue code execution after asynchronous operations, these callbacks are called asynchronous callbacks.

![](C:\Users\nakac\OneDrive\Documents\Sessions DI\Advanced Javascript - Week5\Week5Day2\Asynchronous\asynchronous_callback.png)

To get around this problem, we need a way to do tasks asynchronously even though we have a single thread. This is where the event loop comes handy

<u>Asynchronous programming is a means of parallel programming in which a unit of work runs separately from the main application thread and notifies the calling thread of its completion, failure or progress.</u>

The main benefits one can gain from using asynchronous programming are improved application performance and responsiveness. One particularly well suited application for the asynchronous pattern is providing a responsive UI in a client application while running a computationally or resource expensive operation.

![How JavaScript works: Event loop and the rise of Async programming + 5 ways  to better coding with async/await | by Alexander Zlatkov | SessionStack Blog](https://miro.medium.com/max/1400/1*FA9NGxNB6-v1oI2qGEtlRQ.png)


WebAPI: run the code in a different part of the browser so the stack can continue running
--> NON BLOCKING

![JavaScript&#39;s Call Stack, Callback Queue, and Event Loop - CEK.io](https://cek.io/images/event-loop/loupe.gif)
