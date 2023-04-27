## How to use
it's Simple:
```javascript
import createMethod from "create-custom-method"
createMethod(source, "print", () => {
    console.log("source: " + source)
})
```
`source` is the variable that you want to add your method to. The second argument is what is the name of your method will be and the last argument is your method function. It can be either a callback function or not!
