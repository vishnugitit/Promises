// Getting Elements
let aptitude_round = document.getElementById("round1");
let communication_round = document.getElementById("round2");
let technical_round = document.getElementById("round3");
let hr_round = document.getElementById("round4");
let bug = document.getElementById("error");

// Aptitude
function aptitude() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Aptitude Round");
    }, 2000);
  });
}

// Communication
function communication() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Communication Round");
    }, 1500);
  });
}

// Technical
function technical() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Technical Interview");
    }, 1000);
  });
}

// HR
function hr() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("HR Interview");
    }, 500);
  });
}

aptitude()
  .then((a) => {
    aptitude_round.innerHTML = a;
    console.log(a);
    return communication();
  })
  .then((b) => {
    communication_round.innerHTML = b;
    console.log(b);
    return technical();
  })
  .then((c) => {
    technical_round.innerHTML = c;
    console.log(c);
    return hr();
  })
  .then((d) => {
    hr_round.innerHTML = d;
    console.log(d);
  });
