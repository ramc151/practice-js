function findobj(arr) {
    let cap = false;
    let bulk = false

    for (let obj of arr) {
        let service = obj.service;
        if (service == 'cap' || (service == 'cap' && (service == 'survey' || service == 'hidden'))) {
            cap = true;
        } else {
            bulk = true;
            console.log(service);
        }
    }
    return cap && !bulk ? true : false
}




const obj = [
    { service: 'cap' },
    { service: 'survey' },
    { service: 'hidden' },
    // { service: 'data' },
    // { service: 'bulk' },
]

const ans = findobj(obj)
console.log(ans)