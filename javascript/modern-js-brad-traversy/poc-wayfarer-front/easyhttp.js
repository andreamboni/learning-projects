function easyHTTP() {
  this.http = new XMLHttpRequest();
}

easyHTTP.prototype.get = function(url, minhaRola) {
  this.http.get("GET", url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      minhaRola(self.http.responseText);
    }
  };

  this.http.send();
};
