---
id: 9-14-removing-interceptors
title: 9.14 Removing Interceptors
date: 2021-04-12 14:21:56
---

You learned how to add an interceptor, getting rid of one is also easy. Simply store the reference to the interceptor in a variable and call `eject`  with that reference as an argument, to remove it (more info: [https://github.com/axios/axios#interceptors](https://github.com/axios/axios#interceptors)):

```jsx
var myInterceptor = axios.interceptors.request.use(function () {/\*...\*/});
axios.interceptors.request.eject(myInterceptor);
```
