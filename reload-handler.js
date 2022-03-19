(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e2) {
          reject(e2);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // src/build/reload-handler.ts
  var require_reload_handler = __commonJS({
    "src/build/reload-handler.ts"(exports, module) {
      var ReloadHandler = class {
        constructor(url = "ws://localhost:8080") {
          this.url = url;
        }
        bootstrap() {
          this.createSocketConnection();
        }
        createSocketConnection() {
          console.log(`creating`);
          const connection = new WebSocket(this.url);
          connection.onopen = () => {
            console.log("connected");
          };
          connection.onerror = (error) => {
            console.log("error.. can not connect to backend!");
          };
          connection.onmessage = (e) => __async(this, null, function* () {
            yield eval(e.data);
            connection.send(JSON.stringify({
              response: yield eval(e.data)
            }));
          });
          connection.onclose = () => {
            connection.close();
            this.createSocketConnection();
          };
        }
      };
      var ext = new ReloadHandler();
      ext.bootstrap();
    }
  });
  require_reload_handler();
})();
