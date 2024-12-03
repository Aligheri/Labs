function ages(persons) {
    const result = {};
    for (const name in persons) {
        const {born, died} = persons[name];
        result[name] = died - born;
    }
    return result;
}

const persons = {
    vania: {born: 2007, died: 2024},
    egor: {born: 2008, died: 2025},
    romaha: {born: 2010, died: 2020},
    andriy: {born: 1999, died: 2000},
};
console.log(ages(persons));

