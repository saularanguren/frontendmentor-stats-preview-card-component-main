const increaseStatistics = (dataObject) => {
    let counter = 0

    const interval = setInterval(() => {
        (dataObject.speed < 50) ? counter += 9 : counter++
        dataObject.htmlElement.textContent = counter
        
        if(counter >= dataObject.result) {
            if(counter > dataObject.result) {
                const exceededResult = counter - dataObject.result
                counter -= exceededResult
            }

            dataObject.htmlElement.textContent = `${counter}${dataObject.stringAdd}`
            clearInterval(interval)
        }
    }, dataObject.speed)
}

export const increaseStatisticsFunction = (repeatFunction, arrayOfObjects) => {
    for(let i = 0; i <= repeatFunction; i++) {
        arrayOfObjects.forEach(element => {
            increaseStatistics(element)
        })
    }
}