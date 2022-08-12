let elForm = document.querySelector(".form");
let elFormInput = elForm.querySelector(".form-input");
let elFormCheckbox = elForm.querySelector(".form-checkbox");
let elList = document.querySelector(".list");
let elItemText = document.querySelector(".item-text");

let newArray = [];

elForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    let elItem = document.createElement("li");
    elItem.setAttribute("class", "list-group-item  bg-info bg-opacity-25 d-flex  align-content-center");

    let inputValue = elFormInput.value;

    if(newArray.includes(inputValue)) {
        alert("Kechirasiz bu maxsulot ro'yhatda bor")
    }else {
        if(elFormCheckbox.checked) {
            newArray.unshift(inputValue);
            elItem.innerHTML = `<label class="form-label mb-0 w-100 ">
            <input class="form-check-input form-checkbox list-item-check" value= ${inputValue} type="checkbox"> 
            ${newArray[0]}
            </label>`;
            elList.prepend(elItem); 
        }
        else {
            newArray.push(inputValue);
            elItem.innerHTML = `<label class="form-label mb-0 w-100 ">
            <input class="form-check-input form-checkbox list-item-check" value= ${inputValue} type="checkbox"> 
            ${newArray[newArray.length - 1]}
            </label>`;
            elList.appendChild(elItem);
        }
    }
   
    let elListItemCheck = elList.querySelectorAll(".list-item-check");

    for(let itemCheckValue of elListItemCheck) {
        itemCheckValue.addEventListener("click", function () {
            if (itemCheckValue.checked) {
                elItemText.textContent = itemCheckValue.value;
                console.log(itemCheckValue.value);
            }
            else {
                elItemText.textContent = "";
            }
        })
    };

    elFormInput.value = "";
    elFormInput.focus()
})

elForm.addEventListener("reset", function(evt) {
    evt.preventDefault();

    elList.textContent = ""
    newArray.splice(0,newArray.length)
})
