// const heading = React.createElement(
//   "h1", // tag
//   { id: "heading" }, // used to give attributes to our tag
//   "Hello World from react!" // child element
// );
// console.log(heading);  //object : this object is a react element  and if you want more than one children create array of children
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);  // convert the heading object into h1 tag and put it inside the root

// const parent=React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement(
//             "h1",
//             {id:"heading"},
//             "I am an h1 tag"
//         )
//     )
// );

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

const parent=React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child1"},
            [
                React.createElement(
                    "h1",
                    {},
                    "I am an h1 tag of child1 tag"
                ),
                React.createElement(
                    "h2",
                    {},
                    "I am an h2 tag of child1 tag"
                )
            ]
        ),
        React.createElement(
            "div",
            {id:"child2"},
            [
                React.createElement(
                    "h1",
                    {},
                    "I am an h1 tag of child2 tag"
                ),
                React.createElement(
                    "h2",
                    {},
                    "I am an h2 tag of child2 tag"
                )
            ]
        )
    ]
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


/* <div id="parent">
    <div id="child1">
        <h1></h1>
        <h2></h2>
    </div>
    <div id="child2">
        <h1></h1>
        <h2></h2>
    </div>
</div>

ReactElement(object)=>HTML(Browser understand)

*/
