## Posted data is undefined?

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

# MongoDB

- get the mongoDB_URI. It may looks like `mongodb+srv://sohanemon:<password>@<clusterName>.2gtvyou.mongodb.net/?retryWrites=true&w=majority` or `mongodb://localhost:8000/"`
- then set as a client

```js
const { MongoClient } = require("mongodb");
// step: 1
const client = new MongoClient(process.env.MONGODB_URI);
```

- retrieve the collection from database

```js
try {
  // step: 2
  const collection = client.db("<myDbName").collection("<myCollectionName>");
  // myCollectionName collection is inside the myDbName database
} finally {
}
```

- operate different operations on collection variable now

## Insert/Create/Post

```js
const runMongo = async () => {
  try {
    const collection = client.db("users").collection("students");
    const doc = {
      name: "rafi",
    };
    // step: 3
    collection.insertOne(doc);
  } finally {
  }
};
```

> make sure to run `runMongo()`

> as it is async then we can use `runMongo().catch(console.log)`

- now send the fetched data from frontend to the server as

```js
try {
    const collection = client.db("users").collection("students");
    app.post("/register", async (req, res) => {
      const doc = req.body;
      // step: 3
      const result = await collection.insertOne(doc);
      res.send(result);
    });
```

## Get/Read

- `find()` / `findOne` takes `query` and `options` as parameter

```js
try {
    const collection = client.db("users").collection("students");

    app.get("/students", async (req, res) => {
      // step: 3
      const cursor = collection.find({});
      // await is not required here bcoz find returns a cursor not a promise
      // step: 4
      const result = await cursor.toArray();
      // .toArray() returns a promise to await is required
      res.json(result);
    });

  }...
```

- `findOne` doesn't return any cursor. So, `await` should be used with `findOne` function as it returns a promise
- by hovering on any function, vs code shows what actually a function return like [this](./src/assets/Screenshot%20from%202022-11-01%2019-28-35.png). Anything after `:` or `=>` determines what actually returning there.

```js
app.get("/student/:_id", async (req, res) => {
  const _id = req.params._id;
  const result = await collection.findOne({ _id: ObjectId(_id) });
  res.json(result);
});
```

## Update/Put/Patch

- Similar to other it also have `updateOne` and `updateMany` function

```js
app.put("/update/:_id", async (req, res) => {
  const _id = req.params._id;
  const doc = req.body;
  const result = await collection.updateOne(
    { _id: ObjectId(_id) },
    {
      $set: doc,
    }
  );
  res.send(result);
});
```

## Delete

- `deleteOne` function takes a query argument. Which describes about the items.
- for deleting an item using \_id one should pass using `ObjectId` function.

```js
app.delete("/delete/:_id", async (req, res) => {
  const _id = req.params._id;
  // step: 4
  const result = await collection.deleteOne({ _id: ObjectId(_id) });
  res.send(result);
});
```
