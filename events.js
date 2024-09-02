// Your code here




window.addEventListener("DOMContentLoaded", event => {
    console.log("DOM has loaded");

    const redinput2 = document.getElementById("red-input");
    redinput2.addEventListener("input", redf);


    const additem = document.getElementById("add-item");
    additem.addEventListener("click", additemf);


    const colorselect2 =  document.getElementById("color-select");
    colorselect2.addEventListener("change", colorf);

    const removelistener = document.getElementById("remove-listeners");

    removelistener.addEventListener("click", event => {
        console.log("Remove listener")
        redinput2.removeEventListener("input", redf);

        additem.removeEventListener("click", additemf);

        colorselect2.removeEventListener("change", colorf);


    });


  });

   function additemf(event){
    const listadd = document.getElementById("list-add");
    const newLi = document.createElement("li")
    newLi.innerHTML = listadd.value

    const ul = document.getElementsByTagName("ul")[0]
    console.log(ul)
    ul.appendChild(newLi)
    }

    function redf(event){
        const redinput = document.getElementById("red-input");
        if(redinput.value === "red"){
        // console.log("To do change backround color")
        redinput.classList.add("backgroundred")
        }else{
        redinput.classList.remove("backgroundred")
        }
    }

    function colorf(event){
        //console.log("Change color")
        const colorselect =  document.getElementById("color-select");
        const section3 = document.getElementById("section-3");
        document.body.style.setProperty('--colorselected',colorselect.value)
        section3.classList.add("colorselected")

    }
