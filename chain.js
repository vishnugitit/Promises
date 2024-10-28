 // Getting Elements
 let ug = document.getElementById("graduate");
 let section = document.getElementById("branch");
 let grade = document.getElementById("percent");
 let technical = document.getElementById("program");
 let bug = document.getElementById("error");

 //   2022/ 2023/ 2024 Graduates
 const year = new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve("2022/2023/2024 Graduates");
   }, 2000);
 });

 //   CSE Graduate
 const stream = new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve("CSE Graduate");
   }, 1500);
 });

 //   65%
 const percentage = new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve("65% Aggregate");
   }, 1000);
 });

 //   Programming Languages
 const languages = new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve("Programming Languages like(C++/ Java/ Python/ .NET)");
   }, 500);
 });

 year
   .then((a) => {
     ug.innerHTML = a;
     console.log(a);
     return stream;
   })
   .then((b) => {
     section.innerHTML = b;
     console.log(b);
     return percentage;
   })
   .then((c) => {
     grade.innerHTML = c;
     console.log(c);
     return languages;
   })
   .then((d) => {
     technical.innerHTML = d;
     console.log(d);
   })
   .catch((e) => {
     bug.innerHTML = e + " Error Occured ";
   });