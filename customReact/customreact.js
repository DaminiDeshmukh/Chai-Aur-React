//simple example to create a custom rendering function  that takes a react like object and turn it into real html element
function customRender(reactElement,container)
{
    /*
    const domElement=document.createElement(reactElement.type)//khali container bna liya-element create ho gya
    domElement.innerHTML=reactElement.children //children ko add kr diya
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)//container me dal diya
    */


    //modular bna rhe
    const domElement=document.createElement(reactElement.type)//khali html element bna liya-based on type a create <a> </a>
    domElement.innerHTML=reactElement.children //children ko add kr diya-set the content <a>click here to learn react</a>


//     The for loop iterates through each property in props. It skips children (since that's already added as inner content) and adds all other attributes (like href and target) to domElement.
// So, <a>click here to learn react</a> becomes <a href="https://reactjs.org" target="_blank">click here to learn react</a>.
    for (const prop in reactElement.props) {
        if(prop=='children') //skip for children
        continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
   // container.appendChild(domElement) places domElement inside container, which is the main HTML element where you want this new tag to appear.

    container.appendChild(domElement)//container me dal diya
}
//a tag ko render krna h
const reactElement={
    type:'a', // tag name-just like html
    props:{
        href: 'https://reactjs.org', target:'_blank'// prop is an object for the element's attributes
    },
    children: ['click here to learn react'] // children-the content inside the tag
}
const mainContainer=document.querySelector('#root')
//maincontainer finds an html element with the id of root and stores it.
//root ko grab krna h
//rendering krni h mtlb react element ko html element me convert krna h ,intially jo bhi ho html m usme aur further add kr dena 
//(kya inject krna h aur kaha inject krna h)
customRender(reactElement,mainContainer)

// tells customRender to convert reactElement into HTML and insert it into mainContainer.

//output- 
{/* <div id="root">
    <a href="https://reactjs.org" target="_blank">click here to learn react</a>
</div> */}
