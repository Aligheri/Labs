function fn() {

    const constObject = {name: "Ivan"};
    let varObject = {name: "Yevsieiev"};

    constObject.name = "Dmitro";
    varObject.name = "Tarasenko";

    varObject = {name: "Changed"};

    console.log(constObject, varObject);
}

function createUser(name, city) {
    return {name, city};
}

fn();
console.log(createUser("Yevsieiev Ivan", "Kiev"));