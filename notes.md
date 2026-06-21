**API(APPLICATION PROGRAMMING INTERFACE)** ---->API is a bridge that anables communication between a client and a server.

An API is a messenger/waiter that allows one application to communicate with another application and exchange data.
real example-you place an order with the waiter.  [USER --> API --> SERVER]  The API takes your request to the server and brings the response. it means, tum resturent mein jake waiter ko order deti ho. [Dipika --> Waiter --> Kitchen] waiter kitchen se khana lake deta h.


Weather App Example----
The app sends a request to a weather API;  Give me weather data for Bihar

API returns:-
**JSON**
{
    "city": "Bihar",
    "temperature": 37,
    "condition": "sunny"
}


Request--> API se data maangna. eg. fetch("weather-api-url)
Response--> The data return by the API.
**JSON**
 {
    "temp": 35
 }

**JSON**:---(Javascript Object Notation) is a format used to exchange/transfer/store  data.




*fetch()* ---> sends a request to an API.
eg.
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(response => response.json())
   .then(data =>{
    console.log(data)
   })

FLOW:----
   fetch() --> api --> response --> response.json() --> data --> console.log(data)


async/await
JSON Data
DOM + API connection
