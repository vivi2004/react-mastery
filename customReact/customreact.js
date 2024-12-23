function customRender(reactElement, container) {
  /*   
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children 
     domElement.setAttribute('href' , reactElement.props.href);
     domElement.setAttribute('target' , reactElement.props.container.appendChild)
     container.appendChild(domElement); 
      */
  const domElement = document.createElement(reactElement.type);
  if (reactElement.children) {
    domElement.innerHTML = domElement.children;
  }

  for (const prop in reactElement.props) {
    if (prop == "children") continue;

    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://reactjs.org",
    target: "_blank",
  },
  children: "Click me to visit   React app",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
