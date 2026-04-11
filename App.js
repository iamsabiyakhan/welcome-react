// const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello from React!")
// const root  = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
/*
<div id="parent">
   <div id="child">
        <h1>hello world</h1>
   </div>
</div>
*/
    const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},React.createElement("h1",{},"hello world")))
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(parent)