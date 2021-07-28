const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "foo");
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "foo1");
});

Promise.all([p1, p2, p3, p4 ])
    .then(values => {
        console.log(values);
    })
    .catch(errors => {
        console.log(errors)
    })