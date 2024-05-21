export const createObjectsFunction = () => { 
    const obj1 = {
        htmlElement: document.querySelector('#info-1'),
        result: 10,
        stringAdd: 'k+',
        speed: 51
    }
    
    const obj2 = {
        htmlElement: document.querySelector('#info-2'),
        result: 314,
        stringAdd: '',
        speed: 10
    }
    
    const obj3 = {
        htmlElement: document.querySelector('#info-3'),
        result: 12,
        stringAdd: 'm+',
        speed: 51
    }

    return [
        obj1,
        obj2,
        obj3
    ]
}