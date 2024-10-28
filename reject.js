let data = document.getElementsByTagName("p");
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          const error = "An error occurred:";
          reject(error);
        }, 2000);
      });
      promise
        .then((e) => {
          data[0].innerHTML = e;
        })
        .catch((x) => {
          data[0].innerHTML = x + " (Error) ";
        });