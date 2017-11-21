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

const checkAgainst = (userSubs, leaderPicks) => {
    console.log('***************', userSubs.categories)
    let results = {}

    userSubs.forEach((userSub) => {
        if (leaderPicks.indexOf(userSub.category.name) !== -1) {
            if (results[userSub.category.name]) {
                if (results[userSub.category.name][userSub.name]) {
                    results[userSub.category.name][userSub.name]++
                } else {
                    results[userSub.category.name][userSub.name] = 1
                }
            } else {
                let obj = { [userSub.name]: 1 }
                results[userSub.category.name] = obj
            }
        }
    })
    console.log('Looking for results*********',results)
    return results
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
    return lastresult
}

module.exports = checkAgainst

