## Posted data is undefined

- add

```js
app.use(express.json());
```

- this will convert the json into a js object

## Posting sample

```js
const postStudent = (name) => {
  fetch("http://localhost:5000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name }),
  })
    .then((res) => res.json())
    .then((data) => setStudents(data));
};
```
