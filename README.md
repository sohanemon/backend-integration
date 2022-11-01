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

# MongoDB

- get the mongoDB_URI. It may looks like `mongodb+srv://sohanemon:<password>@<clusterName>.2gtvyou.mongodb.net/?retryWrites=true&w=majority` or `mongodb://localhost:8000/"`
- then set as a client

```js
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URI);
```

- retrieve the collection from database

```js
try {
  const collection = client.db("<myDbName").collection("<myCollectionName>");
  // myCollectionName collection is inside the myDbName database
} finally {
}
```

- operate different operations on collection variable now

## Insert/Create

```js
const runMongo = async () => {
  try {
    const collection = client.db("users").collection("students");
    const doc = {
      name: "rafi",
    };
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
      const cursor = collection.find({});
      // await is not required here bcoz find returns a cursor not a promise
      const result = await cursor.toArray();
      // .toArray() returns a promise to await is required
      res.json(result);
    });

  }...
```

## Delete

- `deleteOne` function takes a query argument. Which describes about the items.
- for deleting an item using \_id one should pass using `ObjectId` function.

```js
app.delete("/delete/:_id", async (req, res) => {
  const _id = req.params._id;
  const result = await collection.deleteOne({ _id: ObjectId(_id) });
  res.send(result);
});
```
