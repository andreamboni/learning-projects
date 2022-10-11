const http = new httpLib;

http.get('http://localhost:8080/flight/1', function(error, response) {
  if(error) {
    console.log(error);
  } else {
    console.log(response)
  }
});