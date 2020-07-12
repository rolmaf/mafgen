let addNameInputText = "";
let addRoleInputText = "";
let addRoleAmountText = "";
let namesArray = [];
let rolesArray = [];
let rolesArrayRand = [];


function validateText() {
    addNameInputText = document.querySelector(".players-names-input").value;
    addNameInputText = addNameInputText.trim().toLowerCase().replace(/[0-9]/g, '');
    addNameInputText = addNameInputText.charAt(0).toUpperCase() + addNameInputText.slice(1);
}

function updateTitle(queue) {
    if (queue == "name") {
        if (namesArray.length > 0) {
            document.querySelector(".entered-names__title").innerHTML = "Введенные имена:";
            document.querySelector(".players-names-input").value = "";
        } else {
            document.querySelector(".entered-names__title").innerHTML = "Введенных имен пока нету";
            document.querySelector(".players-names-input").value = "";
        }
    } else {
        if (rolesArray.length > 0) {
            document.querySelector(".entered-roles__title").innerHTML = "Введенные роли:";
            document.querySelector(".roles-amount-input").value = "";
            document.querySelector(".roles-names-input").value = "";
        } else {
            document.querySelector(".entered-roles__title").innerHTML = "Введенных ролей пока нету";
            document.querySelector(".roles-amount-input").value = "";
            document.querySelector(".roles-names-input").value = "";
        }
    }




}

function addNameIntoArray() {

    validateText();

    if (addNameInputText != "" && namesArray.indexOf(addNameInputText) == -1) {
        // console.log(addNameInputText);
        namesArray.push(addNameInputText);
        updateNames();
    } else {
        alert("Введите другое имя");
    }

    updateTitle();
}

function updateNames() {
    document.querySelector(".entered-names__array").innerHTML = "";
    namesArray.map((num) => {
        document.querySelector(".entered-names__array").innerHTML += "<li class='entered-names__list-item'><div><div>" + num + "</div><button class='rm-name' onclick='deleteName(event)'>X</button></div></li>"
    })

    updateTitle("name");
}

function deleteName(event) {
    let deleteNameVariable = event.target.parentNode.textContent;
    deleteNameVariable = deleteNameVariable.slice(0, -1);
    let deleteNameVariableIndexInArray = namesArray.indexOf(deleteNameVariable);
    namesArray.splice(deleteNameVariableIndexInArray, 1);
    // console.log(namesArray);
    updateNames();
}

function validateRole() {
    addRoleInputText = document.querySelector(".roles-names-input").value;
    addRoleInputText = addRoleInputText.trim().toLowerCase().replace(/[0-9]/g, '');
    addRoleInputText = addRoleInputText.charAt(0).toUpperCase() + addRoleInputText.slice(1);
    addRoleAmountText = document.querySelector(".roles-amount-input").value;
    validateAmountRoles = document.querySelector(".roles-amount-input").value > 0;

    if (addRoleInputText != "" && validateAmountRoles) {
        return true;
    } else {
        return false;
    }
}

function updateRoles() {
    document.querySelector(".entered-roles__array").innerHTML = "";

    rolesArray.map((num, index) => {
        document.querySelector(".entered-roles__array").innerHTML += `<li class='entered-roles__list-item'><div>${num}<div></div><button class='rm-name' onclick='deleteRole(event)'>X</button></div></li>`;
    })

    updateTitle("role");
}

function deleteRole(event) {
    let deleteRoleVariable = event.target.parentNode.textContent;
    deleteRoleVariable = deleteRoleVariable.slice(0, -1);
    let deleteRoleVariableIndexInArray = rolesArray.indexOf(deleteRoleVariable);
    rolesArray.splice(deleteRoleVariableIndexInArray, 1);
    // console.log(namesArray);
    updateRoles();
}
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
    
function addRoleIntoArray() {
    let validate = validateRole();
    if (validate == true) {
        for (let i = 0; i < addRoleAmountText; i++) {
            rolesArray.push(addRoleInputText);
        }

        updateRoles();

    } else {
        alert("Введите валидные значения");
    }
}

function giveOutValidate() {
    if (namesArray.length == rolesArray.length) {
        return true;
    } else {
        return false;
    }
}

function giveOutRoles() {
    let giveOutValidateVar = giveOutValidate();
    if (giveOutValidateVar == true) {
        document.querySelector(".give-out-roles__list").innerHTML = "";
        rolesArrayRand = rolesArray;
        rolesArrayRand = shuffle(rolesArrayRand);
        rolesArrayRand.map((num, index) => {
            document.querySelector(".give-out-roles__list").innerHTML += `<li>${namesArray[index]} - ${rolesArrayRand[index]}</li>`;
        });
    } else {
        alert("Кол-во имен не равняется кол-ву ролей!");
    }

}




document.querySelector(".players-names-input").addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        addNameIntoArray();
    }
});

document.querySelector(".add-name-btn").addEventListener("click", function () {
    addNameIntoArray();
});

document.querySelector(".add-roles-btn").addEventListener("click", function () {
    addRoleIntoArray();
});

document.querySelector(".give-out-roles__btn").addEventListener("click", () => {
    giveOutRoles();
});