const http = new easyHTTP();

http.get("https://jsonplaceholder.typicode.com/posts", function (response) {
  console.log(response);
});

http.get("https://jsonplaceholder.typicode.com/posts", function(response) {
  console.log(response)
})