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
        let catsName = userSub.categories[0].dataValues.alias
        let subName = userSub.alias
        if (results[catsName]) {
            if (results[catsName][subName]) {
                results[catsName][subName]++
            } else {
                results[catsName][subName] = 1
            }
        } else {
            let obj = { [subName]: 1 }
            results[catsName] = obj
        }
        
    })
    return finalPick(results)
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
    return lastresult
}

module.exports = checkAgainst

