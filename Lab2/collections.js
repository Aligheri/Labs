const phoneBookArray = [
    {name: "Marcus Aurelius", phone: "+380445554433"},
    {name: "John Doe", phone: "+123456789"},
    {name: "Jane Smith", phone: "+987654321"},
];

const phoneBookHash = {
    "Marcus Aurelius": "+380445554433",
    "John Doe": "+123456789",
    "Jane Smith": "+987654321",
};

function findPhoneByNameArray(name) {
    for (const contact of phoneBookArray) {
        if (contact.name === name) {
            return contact.phone;
        }
    }
    return "Not found";
}

function findPhoneByNameHash(name) {
    return phoneBookHash[name] || "Not found";
}

console.log("Поиск в массиве объектов:");
console.log(findPhoneByNameArray("Marcus Aurelius"));
console.log(findPhoneByNameArray("Unknown")); // Not found

console.log("\nПоиск в хеш-таблице:");
console.log(findPhoneByNameHash("Jane Smith"));
console.log(findPhoneByNameHash("Unknown"));