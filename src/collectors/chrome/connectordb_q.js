function ConnectorDB(n,t,i){i=i||"https://connectordb.com";this.url=i+"/api/v1/";this.device=n;this.authHeader="Basic "+btoa(n+":"+t)}ConnectorDB.prototype={thisdevice:function(){return this.device},_doRequest:function(n,t,i){var f=this.url+n,o=this.device,s=this.apikey,e=this.authHeader,u=Q.defer(),r=new XMLHttpRequest;return r.open(t,f,!0),r.setRequestHeader("Authorization",e),r.onload=function(){if(r.status==200)try{u.resolve(JSON.parse(r.response))}catch(n){u.resolve(r.response)}else u.reject(r)},r.onerror=function(){u.reject(null)},i!=undefined?r.send(JSON.stringify(i)):r.send(),u.promise},_getPath:function(n,t,i){var r="d/";return n!==undefined&&(r+=n),t!==undefined&&(r+="/"+t),i!==undefined&&(r+="/"+i),r},createUser:function(n,t,i){var r=this._getPath(n);return this._doRequest(r,"POST",{Email:t,Password:i})},readUser:function(n){var t=this._getPath(n);return this._doRequest(t,"GET")},updateUser:function(n,t){var i=this._getPath(n);return this._doRequest(i,"PUT",t)},deleteUser:function(n){var t=this._getPath(n);return this._doRequest(t,"DELETE")},listDevices:function(n){var t=this._getPath(n)+"?q=ls";return this._doRequest(t,"GET")},createDevice:function(n,t){var i=this._getPath(n,t);return this._doRequest(i,"POST")},readDevice:function(n,t){var i=this._getPath(n,t);return this._doRequest(i,"GET")},updateDevice:function(n,t,i){var r=this._getPath(n,t);return this._doRequest(r,"PUT",i)},deleteDevice:function(n,t){var i=this._getPath(n,t);return this._doRequest(i,"DELETE")},listStreams:function(n,t){var i=this._getPath(n,t)+"?q=ls";return this._doRequest(i,"GET")},createStream:function(n,t,i,r){var u=this._getPath(n,t,i);return this._doRequest(u,"POST",r)},readStream:function(n,t,i){var r=this._getPath(n,t,i);return this._doRequest(r,"GET")},updateStream:function(n,t,i,r){var u=this._getPath(n,t,i);return this._doRequest(u,"PUT",r)},deleteStream:function(n,t,i){var r=this._getPath(n,t,i);return this._doRequest(r,"DELETE")},insertStream:function(n,t,i,r){var u=[{t:(new Date).getTime()*.001,d:r}],f=this._getPath(n,t,i);return this._doRequest(f,"UPDATE",u)},lengthStream:function(n,t,i){var r=this._getPath(n,t,i)+"/length";return this._doRequest(r,"GET").then(function(n){return parseInt(n)})},indexStream:function(n,t,i,r,u){var f=this._getPath(n,t,i)+"/data?i1="+r+"&i2="+u;return this._doRequest(f,"GET")},timeStream:function(n,t,i,r,u,f){f=f||0;var e=this._getPath(n,t,i)+"/data?t1="+r+"&t2="+u+"&limit="+f;return this._doRequest(e,"GET")}};