// Code your solution here
function findMatching(names, driver){
    const result = names.filter(object => object.toLowerCase() === driver.toLowerCase());
    return result;
};

function fuzzyMatch(names, driver){
    const result = names.filter(object => object.slice(0, driver.length) === driver);
    return result;
    
}

function matchName(names, driver){
    const result = names.filter(object => object.name === driver)
    return result;
}