// this module reads a server-side file

// revise to this approach? https://www.w3schools.com/xml/tryit.asp?filename=try_dom_xmlhttprequest_responsexml

function readLocalxml(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    var parser = new DOMParser();
    var xml = parser.parseFromString(result, "text/xml");
    return xml;
  }
export default readLocalxml;