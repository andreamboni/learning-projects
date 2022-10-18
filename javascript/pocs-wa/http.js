function httpLib() {
  this.http = new XMLHttpRequest();
}

httpLib.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error:" + self.http.status);
    }
  };

  this.http.send();
};

httpLib.prototype.post = function (url, request, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;
  this.http.onload = function () {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Erro " + self.http.status);
      callback("Objeto erro" + self.http.responseText)
    }
  };

  this.http.send(JSON.stringify(request));
};

httpLib.prototype.delete = function (url, id, callback) {
  this.http.open("DELETE", url+id, true);
  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;
  this.http.onload = function () {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Erro " + self.http.status);
      callback("Objeto erro" + self.http.responseText)
    }
  };

  this.http.send();
};

httpLib.prototype.put = function (url, id, request, callback) {
  this.http.open("PUT", url+id, true);
  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;
  this.http.onload = function () {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Erro " + self.http.status);
      callback("Objeto erro" + self.http.responseText)
    }
  };

  this.http.send(JSON.stringify(request));
};