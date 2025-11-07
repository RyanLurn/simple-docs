### Mock page for testing code syntax highlighting

Inline code: `console.log("Hello, world!"){:js}`

**HTML:**
```html
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>MDN Web Docs Example: Toggling full-screen mode</title>
    <link rel="stylesheet" href="styles.css">
    <style class="editable">
        video::backdrop {
          background-color: #448;
        }
    </style>

    <!-- import the webpage's javascript file -->
    <script src="script.js" defer></script>
  </head>
  <body>
    <section class="preview">
      <video controls
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
        width="620">

        Sorry, your browser doesn't support embedded videos.  Time to upgrade!

      </video>
    </section>

<textarea class="playable playable-css" style="height: 100px;">
video::backdrop {
  background-color: #448;
}
</textarea>

<textarea class="playable playable-html" style="height: 200px;">
<video controls
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620">
Sorry, your browser doesn't support embedded videos.  Time to upgrade!
</video>
</textarea>

    <div class="playable-buttons">
        <input id="reset" type="button" value="Reset" />
      </div>
    </body>
    <script src="playable.js"></script>
  </body>
</html>
```

**CSS:**
```css
html {
	margin: 0;
	background: black;
	height: 100%;
}

body {
	margin: 0;
	width: 100%;
	height: inherit;
}

/* the three main rows going down the page */

body > div {
  height: 25%;
}

.thumb {
	float: left;
	width: 25%;
	height: 100%;
	object-fit: cover;
}

.main {
  display: none;
}

.blowup {
  display: block;
  position: absolute;
  object-fit: contain;
  object-position: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
}

.darken {
  opacity: 0.4;
}
```

**JavaScript:**
```js
// --- Demonstration of imports ---

// Importing named exports and the default export
import defaultAnimal, { person, add } from './module.js';

// Importing everything from the module as an alias
import * as Module from './module.js';


// --- Demonstration of exports ---

// Named exports
export const person = { name: "Alice", age: 30 };

export function add(x, y = 0) {
  return x + y;
}

// Default export
const defaultAnimal = { name: "Default Animal" };
export default defaultAnimal;

// Generator function
export function* idGenerator() {
  let id = 0;
  while (true) {
    yield id++;
  }
}

// Using typeof for runtime type checks
console.log(typeof person);  // object
console.log(add(2, 3));      // 5
console.log(defaultAnimal);  // { name: "Default Animal" }

// Emulating 'satisfies' behavior using runtime checks
function createAnimal(animal) {
  if (typeof animal.name === 'string') {
    return animal;  // Ensures the animal has a 'name' property
  }
  throw new Error("Animal must have a name");
}

const dog = createAnimal({ name: "Buddy", breed: "Golden Retriever" });
console.log(dog);  // { name: 'Buddy', breed: 'Golden Retriever' }

// Generator usage
const generator = Module.idGenerator();
console.log(generator.next().value);  // 0
console.log(generator.next().value);  // 1
console.log(generator.next().value);  // 2

// Handling a generic-like behavior by allowing any type and runtime checks
function identity(arg) {
  return arg;
}

let str = identity("Hello");
let num = identity(42);
console.log(str, num);  // "Hello", 42

// Emulating default generics by using default parameters
function wrapInArray(value = "") {
  return [value];
}

const stringArray = wrapInArray();  // Default is empty string
const numberArray = wrapInArray(42);  // Passes 42 explicitly
console.log(stringArray, numberArray);  // [""] , [42]

// --- for-of and for-in loops ---

// for-of: Iterates over iterable objects like arrays, strings, maps, etc.
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);  // Outputs: apple, banana, cherry
}

// for-in: Iterates over enumerable properties of an object
const car = { make: "Tesla", model: "Model S", year: 2021 };
for (const key in car) {
  if (car.hasOwnProperty(key)) {
    console.log(`${key}: ${car[key]}`);  // Outputs key-value pairs of car object
  }
}

// --- IIFE (Immediately Invoked Function Expression) ---

(function () {
  console.log("This IIFE runs immediately after it's defined.");
  const privateVar = "I'm private inside the IIFE!";
  console.log(privateVar);  // Accessing the private variable inside the IIFE
})();

// --- Using a generator to loop indefinitely ---
function* infiniteGenerator() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const gen = infiniteGenerator();
console.log(gen.next().value);  // 0
console.log(gen.next().value);  // 1

// --- Async and Await ---

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

// Example usage of async function
fetchData('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log(data))  // Outputs fetched data
  .catch(error => console.error(error));

// JSDoc type annotations
/**
 * @typedef {Object} Task
 * @property {string} title
 * @property {boolean} completed
 */

/**
 * Create a task
 * @param {Task} task
 * @returns {Task}
 */
function createTask(task) {
  return task;
}

const myTask = createTask({
  title: "Learn JavaScript",
  completed: false,
});
console.log(myTask);

// Importing everything as a namespace (simulated for demonstration)
console.log(Module.person);  // { name: "Alice", age: 30 }
console.log(Module.add(10, 20));  // 30
```

**TypeScript:**
```ts
// Using 'typeof' to infer types
const person = { name: "Alice", age: 30 };
type PersonType = typeof person;  // { name: string; age: number }

// 'satisfies' to ensure a type matches but allows more specific types
type Animal = { name: string };
const dog = { name: "Buddy", breed: "Golden Retriever" } satisfies Animal;

// Generics with 'extends' and default values
function identity<T extends number | string = string>(arg: T): T {
  return arg;
}

let str = identity();  // Default type is string
let num = identity(42);  // T inferred as number

// 'extends' with interface and class
interface HasLength {
  length: number;
}

function logLength<T extends HasLength = string>(arg: T): void {
  console.log(arg.length);
}

logLength("Hello");    // OK: string has length (default is string)
logLength([1, 2, 3]);  // OK: array has length
// logLength(123);      // Error: number doesn't have length

// 'typeof' with functions
function add(x: number, y: number): number {
  return x + y;
}

type AddFunctionType = typeof add;  // (x: number, y: number) => number

// Generic interfaces with 'extends' and default types
interface Box<T extends object = { message: string }> {
  content: T;
}

let defaultBox: Box = { content: { message: "Hello" } };  // Uses default type
let customBox: Box<{ status: number }> = { content: { status: 200 } };

// Complex example with 'satisfies' and default generics
type Task = {
  title: string;
  description?: string;
  completed: boolean;
};

const myTask = {
  title: "Learn TypeScript",
  completed: false,
  priority: "High",
} satisfies Task;  // Allows priority but ensures Task structure

// Generic function with default type
function wrapInArray<T = string>(value: T): T[] {
  return [value];
}

const stringArray = wrapInArray();  // Default to string
const numberArray = wrapInArray(42);  // T inferred as number

/**
 * Combines two generic types into a tuple.
 * 
 * @template T - The first type.
 * @template U - The second type.
 * @param {T} first - The first value.
 * @param {U} second - The second value.
 * @returns {[T, U]} A tuple containing both values.
 */
function combine<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}
```

**JSX:**
```jsx
function Item({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}
```

**TSX:**
```tsx
interface Post {
  title: string;
  slug: string;
  content: string;
}

// posts will be populated at build time by getStaticProps()
function Blog({ posts }: { posts: Post[] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}

// This function gets called at build time on server-side.
export async function getStaticProps() {
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}

export default Blog
```

**JSON:**
```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ],
  "from": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON"
}
```

**JSONC:**
```jsonc
// A jsonc example document
{
 owner:{
  name:`komkom`
  dob: /* just some random dob */ `1975-01-25T12:00:00-02:00`
 }

 database:{ // our live db
  server:`192.168.1.1`
  ports:[8001,8002,8003]
  connectionMax:5000
  enabled:true
 }

 servers:{ // a server
  alpha:{
   ip: /* is soon invalid */ `10.0.0.1`
   dc:`eqdc10`
  }

  beta:{
   ip:`10.0.0.2`
   dc:`eqdc10`
  }
 }

 clients:{
  data:[["gamma","delta"],[1,2]]
 }

 hosts:[alpha,omega]
}
```

**YAML:**
```yaml
name: Check dist/

on:
  push:
    branches:
      - main
    paths-ignore:
      - '**.md'
  pull_request:
    paths-ignore:
      - '**.md'

jobs:
  check-dist:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Set Node.js 16.x
        uses: actions/setup-node@v3
        with:
          node-version: 16.x
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Rebuild the dist/ directory
        run: |
          npm run build:compile
          npm run build:package

      - name: Compare the expected and actual dist/ directories
        run: |
          if [ "$(git diff --ignore-space-at-eol dist/ | wc -l)" -gt "0" ]; then
            echo "Detected uncommitted changes after build.  See status below:"
            git diff
            exit 1
          fi
        id: diff

      # If index.js was different than expected, upload the expected version as an artifact
      - uses: actions/upload-artifact@v3
        if: ${{ failure() && steps.diff.conclusion == 'failure' }}
        with:
          name: dist
          path: dist/
```

**Markdown:**
```md
An h1 header
============

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺



An h2 header
------------

Here's a numbered list:

 1. first item
 2. second item
 3. third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

~~~
define foobar() {
    print "Welcome to flavor country!";
}
~~~

(which makes copying & pasting easier). You can optionally mark the
delimited block for Pandoc to syntax highlight it:

~~~python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print(i)
~~~



### An h3 header ###

Now a nested list:

 1. First, get these ingredients:

      * carrots
      * celery
      * lentils

 2. Boil some water.

 3. Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

[^1]: Some footnote text.

Tables can look like this:

Name           Size  Material      Color
------------- -----  ------------  ------------
All Business      9  leather       brown
Roundabout       10  hemp canvas   natural
Cinderella       11  glass         transparent

Table: Shoes sizes, materials, and colors.

(The above is the caption for the table.) Pandoc also supports
multi-line tables:

--------  -----------------------
Keyword   Text
--------  -----------------------
red       Sunsets, apples, and
          other red or reddish
          things.

green     Leaves, grass, frogs
          and other things it's
          not easy being.
--------  -----------------------

A horizontal rule follows.

***

Here's a definition list:

apples
  : Good for making applesauce.

oranges
  : Citrus!

tomatoes
  : There's no "e" in tomatoe.

Again, text is indented 4 spaces. (Put a blank line between each
term and  its definition to spread things out more.)

Here's a "line block" (note how whitespace is honored):

| Line one
|   Line too
| Line tree

and images can be specified like so:

![example image](example-image.jpg "An exemplary image")

Inline math equation: $\omega = d\phi / dt$. Display
math should get its own line like so:

$$I = \int \rho R^{2} dV$$

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

**MDX:**
```mdx
<MyComponent id="123" />

You can also use objects with components, such as the `thisOne` component on
the `myComponents` object: <myComponents.thisOne />

<Component
  open
  x={1}
  label={'this is a string, *not* markdown!'}
  icon={<Icon />}
/>
```

**Shellscript:**
```bash
#!/bin/bash
# weather.sh
# Copyright 2018 computer-geek64. All rights reserved.

program=Weather
version=1.1
year=2018
developer=computer-geek64

case $1 in
-h | --help)
	echo "$program $version"
	echo "Copyright $year $developer. All rights reserved."
	echo
	echo "Usage: weather [options]"
	echo "Option          Long Option             Description"
	echo "-h              --help                  Show the help screen"
	echo "-l [location]   --location [location]   Specifies the location"
	;;
-l | --location)
	curl https://wttr.in/$2
	;;
*)
	curl https://wttr.in
	;;
esac
```