// class UserStorage {
//   loginUser(id, password, onSuccess, onError) {
//     setTimeout(() => {
//       if (
//         (id === "ellie" && password === "dream") ||
//         (id === "coder" && password === "academy")
//       ) {
//         onSuccess(id);
//       } else {
//         onError(new Error(""));
//       }
//     }, 2000);
//   }
//   getRoles(user, onSuccess, onError) {
//     setTimeout(() => {
//       if (user === "ellie") {
//         onSuccess({ name: "ellie", role: "admin" });
//       } else {
//         onError(new Error("No Access"));
//       }
//     }, 1000);
//   }
// }

// const userStorage = new UserStorage();
// const id = prompt("enter your id");
// const password = prompt("enter your passrod");
// userStorage.loginUser(
//   id,
//   password,
//   (user) => {
//     userStorage.getRoles(
//       user,
//       (userWithRole) => {
//         alert(
//           `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
//         );
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// When new Promise is created, the executor runs automatically.
// const promise = new Promise((resolve, reject) => {
//   console.log("doing something...");
//   setTimeout(() => {
//     resolve("jaewon");
//     reject(new Error("not jaewon"));
//   }, 1000);
// });

// promise //
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// Promise chaining

// const fetchNumber = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(1);
//   }, 1000);
// });

// // Promise 의 resolve, reject 와 .then, .catch 의 관계
// // +--------+-----------+-----------+
// // | return | resolve   | reject    |
// // +--------+-----------+-----------+
// // | .then  | fulfilled | fulfilled |
// // +--------+-----------+-----------+
// // | .catch | fulfilled | rejected  |
// // +--------+-----------+-----------+
// // -> reject 를 catch 로 잡으면 fulfilled 된 Promise 를 반환한다

// fetchNumber
//   .catch((num) => num * 2)
//   .then((num) => num * 3)
//   .then((num) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject(num - 1);
//       }, 1000);
//     });
//   })
//   .catch((num) => {
//     console.log(num);
//   });

// const getHen = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("🐓");
//     }, 1000);
//   });
// };

// const getEgg = (hen) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${hen} => 🥚`);
//     }, 1000);
//   });
// };

// const getFries = (egg) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${egg} => 🍳`);
//     }, 1000);
//   });
// };

// getHen()
//   .then((hen) => {
//     return getEgg(hen);
//   })
//   .then((egg) => {
//     return getFries(egg);
//   })
//   .then((fries) => {
//     return console.log(fries);
//   });
