const ul = document.getElementById("sensor-list");
const backendLink = "http://localhost:3001/";

function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}

fetch(backendLink)
  .then(resp => resp.json())
  .then(data => {
    return data.map(ip => {
      let li = createNode("li"),
        a = createNode("a");
      a.innerHTML = `<a href=${backendLink}sensors?ip=${ip} target="_blank" >${ip}<\a>`;
      append(li, a);
      append(ul, li);
    });
  })
  .catch(function(error) {
    console.log(error);
  });
