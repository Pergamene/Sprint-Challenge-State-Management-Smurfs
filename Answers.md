1. What problem does the context API help solve?

```
Prop drilling
```

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

```
Store holds the state for the entire application, and there is only one store, which is why it is the single source of truth.
Actions are a list of ways the state can be changed.  An action gets passed any data it needs (if any) and formats the action call and sends that formatted data to the reducer.
Reducers take in the current state, and an action data and reduces them into a new state which it returns and the store updates too.
```

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

```
Application state is state that is accessed by multiple components, component state is localized to a single component and can not be seen outside that component.  Most state will be application state, but sometimes it is helpful to have component state, like in a form, to store the current state of an input box before it is submitted.
```

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

```
`redux-thunk` is a middleware (meaning it happens between the `action creator` and the `reducer`), that allows `action-creators` to return a function instead of a simple action. 
```

1. What is your favorite state management system you've learned and this sprint? Please explain why!

```
Redux.  I really like how redux works, the flow makes sense and I can see how powerful it can be.  Context I really dislike and will never use.  The whole point of components is to make reusable things, and context makes them less-reusable, so I don’t see any reason to ever use it.  If the app isn’t complicated enough for redux, then I’ll use regular state, with component composition, if I need something.
```
