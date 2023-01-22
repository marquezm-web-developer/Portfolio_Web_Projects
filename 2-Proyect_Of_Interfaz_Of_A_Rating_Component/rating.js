(function(){
    "use strict"

    ///// Stage One: Creating html elements of rating component with javascript when the file is load ////

    //Statement of global variables and constant 
    const rating = document.querySelector(".rating"); //Refer to the Div element that contain rating component
    let currentValue = 0;        //Initial value of rating component (Zero)

    //This constant contains an Array with 10 elements. Each element refer to a div element created with javascript when the file is load and storage an star background image with CSS
    const html = Array.from(Array(10)).map((element, i) => {
    return `<div class="elemento item-${i}" data-pos="${i}"></div>`
    });

    rating.innerHTML = html.join(""); //Inputs all elements of the html Array how a data string and separate each element with ""




    ///// Stage Two: creating an Array data type and get value of "data-pos" atribute for each element////

    document.querySelectorAll(".elemento").forEach(elemento => {

        const position = elemento.getAttribute("data-pos"); //Getting value of the "data-pos" atribute for each element

        currentValue = parseInt(position) + 1; //Assign value to "currentValue" variable for each element




        //Stage Three: Event Listener to mouseover event for all html elements inside array data type created before in stage two //

        elemento.addEventListener("mouseover", (e) => { //Setting mouseover event listening for each element
            e.preventDefault();
    
            document.querySelectorAll(".elemento").forEach(elem => { //It evaluate if the element contain "elemento-full" class. If True then it remove that class but if false it add that class during mouseover event.
             
                if (elem.classList.contains("elemento-full")) { //This conditional statement evaluate specifically the action when the element contain "elemento-full" class (that class is remove)
                    elem.classList.remove("elemento-full");
                };
            });
    
            for (let j=0; j<= position; j++) { //In this case, the bucle statement evaluate all elements that contain the "item-${j}" class and if it not contain "elemento-full" class then it will be added
    
                const item = document.querySelector(`.item-${j}`); //Refer to div element that contain "item-${j} class"
    
                if (!item.classList.contains("elemento-full")) { //Conditional statement that it evaluate if not contain "elemento-full" class
                    item.classList.add("elemento-full");
                };
            };
        });
    


        //Stage Four: Event Listener to click event to send after the rating value to the server //

        elemento.addEventListener("click", (e) => { //Setting click event listening for rating element selected and assign the value to "currentValue variable"
            e.preventDefault();

            currentValue = parseInt(position) + 1;

            let starValue= document.querySelector("#starRating");

            starValue.value=currentValue;

            document.querySelector("textarea").focus(); //Focus on the textarea element after select star rating
        });
    });
})()