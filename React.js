/*
React is a JavaScript library developed by Facebook that's 
primarily used for building user interfaces. At its core, React 
revolves around the key philosophies
1.Declarative:
React uses a declarative programming style,
which means developers describe the desired outcome
rather than the step-by-step process to achieve it.
This simplifies the code and makes it more predicatbale and easier to debug.
Develpers specify waht the UI should look like fo a given state,
 and React takes care of updating DOM to match that state.

 2. Component-Based:
 React breaks down UIs into reusable components. These components
 encapsulate their own logic ans dstate. making it easier to manage
 and scale complex appplications. Components can be compsed togehter to form
 larger, more compelex UI structures, Prooting reusability and maintainability;

 3.Virtual DOM:

 React uses a virtual representation of the DOM to optimize performance .
 when changes are made ton't  the state of a componetn, React does't immidiatyly
 update the actual DOM. insted, it first updates tge virutual DOM and then compares it withe
 the previous version to identify the minimmal set of changes required. This process improves effiicy by miimizing direct 
 manipulation of the real DOM

 4. Unidirectional Data Flow:
 React follows unidirectional data flow, where data flows in a single direction.
 Prarend tcomponents pass data down th their children via props
 and child components communicate changes bact to the parend via callback
 functions. This design simplifies debbugging and understanding houw data changes over time

 5. JSX(JavaScri[t XML])
 
*/