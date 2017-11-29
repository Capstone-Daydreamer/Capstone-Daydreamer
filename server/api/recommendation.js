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

const checkAgainst = (userSubs, id) => {
    let results = {}
    
    userSubs.forEach((userSub) => {
        let catsName = userSub.categories[0].alias
        let subName = userSub.alias
        let opinion = userSub.userSubCategory.love ? 1 : -1
        if (!userSub.userSubCategory.love && !userSub.userSubCategory.dislike) opinion = 0
        if (results[catsName]) {
            if (results[catsName][subName]) {
                results[catsName][subName] += opinion
            } else {
                results[catsName][subName] = opinion
            }
        } else {
            let obj = { [subName]: opinion }
            results[catsName] = obj
        }
        
    })
    return finalPick(results, id)
}


function finalPick(obj, id) {
    let lastresult = {}
    const arrKey = Object.keys(obj)
    arrKey.forEach(cat => {
        lastresult[cat] = ''
        let arrKeySubcat = Object.keys(obj[cat])
        if (cat === 'Restaurants' || cat === 'Bars'){
            arrKeySubcat = arrKeySubcat.filter(subcat => {
                return (obj[cat][subcat] > 0)
            })
            if (arrKeySubcat.length <= 0) arrKeySubcat = Object.keys(obj[cat])
            let hash = id % arrKeySubcat.length
            lastresult[cat] = arrKeySubcat[hash]
        } else {
            let max = 0
            arrKeySubcat.forEach(subcat => {
                if (obj[cat][subcat] > max) {
                    lastresult[cat] = subcat
                    max = obj[cat][subcat]
                }
            })
        }
    })
    return lastresult
}

module.exports = checkAgainst

