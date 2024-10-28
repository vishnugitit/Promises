let data = document.getElementsByTagName("p");
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation SetTimeOUt
  setTimeout(() => {
    const value = "This is the resolved value!";
    resolve(value);
    //   resolve("This is the resolved value!")
  }, 2000);
});

promise
  //   resolve
  .then((e) => {
    data[0].innerHTML = e + " (Resolved) ";
  })
  // reject
  .catch((x) => {
    data[0].innerHTML = x;
  });
