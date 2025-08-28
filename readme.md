# Assignment 5 Questions and Answers

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer : The methods getElementById,getElementByClassName,querySelector and querySelectorAll are all used in javascript to select elements from html Document Object Model, but there are some difference in there selecting methods.
The differences between them are given in below:

getElementById: Select and return element by it's unique id attribute.Select only a single element.It is faster for specific functions.

getElementByClassName: Select and return elements that have same class name.It returns a live html collection. Live means the collection will change automatically if the elements matching the class are added or remove from the DOM.

querySelector: Select the first element that matches the specified css selector.

querySelectorAll: Select and return a static node list of elements. Static means the collection is a prototype at the time of selection and does not update with subsequent DOM changes.

2. How do you create and insert a new element into the DOM?

Answer: Creating and inserting an element into the DOM takes two steps. The steps are:

Step 1: Create an element by using the method document.createElement("Tag name").

Step 2: Insert the created element to a parent node using the method parentNode.appendChild(childNode). Child node is the created element.

3. What is Event Bubbling and how does it work?

Answer: Event bubbling is a default function in java script where an event triggered on a specific Document Object Model. Element first triggers handlers on that element itself, then propagates up through it's ancestors in the DOM tree all the way to the document root.

How event bubbling works:

Firstly, A user action, such as a click, occurs on a specific html element.

Secondly, The event is first directed to the element that was directly clicked (the target element).

Thirdly, If an event handler is attached to the target element, it runs. Then, the event continues to bubble up the DOM tree to its parent element, then its grandparent, and so on.

Fourthly, For each ancestor element in the path, if an event handler is attached to that element and is waiting for the event, it will also be triggered.

Finally, This process continues until the event reaches the top of the DOM tree or until the event propagation is intentionally stopped.

4. What is Event Delegation in JavaScript? Why is it useful?

Answer: In java script event delegation is technique where a single event listener is attached to a parent element to manage events triggered by its child elements, rather than attaching separate event listeners to each individual child.

It is very useful.
Like:

1. It optimize the performance.

2. It can handel dynamic content easily.

3. It simplify the code.

4. It reduces memory Footprint.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: The preventDefault() and stopPropagation() methods, both part of the java script Event interface, serve distinct purposes in controlling event behavior within the Document Object Model.

The preventDefault() method is used to prevent the browser's default action associated with a specific event. This means it stops the native behavior that would typically occur when an event fires.

The stopPropagation() method is used to prevent the event from propagating further up or down the DOM tree during the capturing and bubbling phases of event propagation. It stops the event from reaching other event listeners on parent or child elements
