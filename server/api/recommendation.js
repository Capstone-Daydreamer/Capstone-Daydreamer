const littlecats = ['Bars', 'Concerts', 'Museums', 'Music']

const bigcats = [{
    name: 'Pop',
    category: {
        name: 'Music'
    },
}, {
    name: 'History',
    category: {
        name: 'Museums'
    }
}, {
    name: 'Art',
    category: {
        name: 'Museums'
    }
},
{
    name: 'History',
    category: {
        name: 'Museums'
    }
}, {
    name: 'Tiki',
    category: {
        name: 'Bars'
    }
}, {
    name: 'Dive',
    category: {
        name: 'Bars'
    }
}]

const checkAgainst = (userSubs) => {
    let results = {}
    
    userSubs.forEach((userSub) => {
        let catsName = userSub.categories[0].dataValues.name
        if (results[catsName]) {
            if (results[catsName][userSub.name]) {
                results[catsName][userSub.name]++
            } else {
                results[catsName][userSub.name] = 1
            }
        } else {
            let obj = { [userSub.name]: 1 }
            results[catsName] = obj
        }
        
    })
    
    return finalPick(results)
}

const objectHelper = (key) => {
    let obj = {}
    return obj[key] = 1
}

function finalPick(obj) {
    let lastresult = {}
    const arrKey = Object.keys(obj)
    arrKey.forEach(cat => {
        lastresult[cat] = ''
        const arrKeySubcat = Object.keys(obj[cat])
        let max = 0
        arrKeySubcat.forEach(subcat => {
            if (obj[cat][subcat] > max) {
                lastresult[cat] = subcat
                max = obj[cat][subcat]
            }
        })
    })

    console.log('Looking for results*********', lastresult)
    return lastresult
}

module.exports = checkAgainst

