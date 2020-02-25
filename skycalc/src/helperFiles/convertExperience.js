export function convertExperience(xp,name) {
    const levelingExp = {
        1: 50,
        2: 125,
        3: 200,
        4: 300,
        5: 500,
        6: 750,
        7: 1000,
        8: 1500,
        9: 2000,
        10: 3500,
        11: 5000,
        12: 7500,
        13: 10000,
        14: 15000,
        15: 20000,
        16: 30000,
        17: 50000,
        18: 75000,
        19: 100000,
        20: 200000,
        21: 300000,
        22: 400000,
        23: 500000,
        24: 600000,
        25: 700000,
        26: 800000,
        27: 900000,
        28: 1000000,
        29: 1100000,
        30: 1200000,
        31: 1300000,
        32: 1400000,
        33: 1500000,
        34: 1600000,
        35: 1700000,
        36: 1800000,
        37: 1900000,
        38: 2000000,
        39: 2100000,
        40: 2200000,
        41: 2300000,
        42: 2400000,
        43: 2500000,
        44: 2600000,
        45: 2750000,
        46: 2900000,
        47: 3100000,
        48: 3400000,
        49: 3700000,
        50: 4000000
    }
    const runecraftingExp = {
        1: 50,
        2: 100,
        3: 125,
        4: 160,
        5: 200,
        6: 250,
        7: 315,
        8: 400,
        9: 500,
        10: 625,
        11: 785,
        12: 1000,
        13: 1250,
        14: 1600,
        15: 2000,
        16: 2465,
        17: 3125,
        18: 4000,
        19: 5000,
        20: 6200,
        21: 7800,
        22: 9800,
        23: 12200,
        24: 15300
    }


    if(xp<50) {
        return 0
    }
    
    let sumNum = 0
    let prevLevel = 0
    let currentExp
    let maxExp
    if(name==="Runecrafting") {
        let expList = Object.values(runecraftingExp)
        
        for(let i=0;i<expList.length;i++) {
            sumNum = sumNum+expList[i];
            if(xp-sumNum>=0) {
                prevLevel++
                sumNum++
            }
            else {
                currentExp = Math.round((-1)*(xp-sumNum))
                maxExp = Math.round(expList[i])
                let final = {currentExp:currentExp,maxExp:maxExp,level:prevLevel}
                return final
            }
        }
    }
    else { 
        let expList = Object.values(levelingExp)
        for(let i=0;i<expList.length;i++) {
            sumNum = sumNum+expList[i];
            if(xp-sumNum>=0) {
                prevLevel++
                sumNum++
            }
            else {
                currentExp = Math.round((-1)*(xp-sumNum))
                    maxExp = Math.round(expList[i])
                    let final = {currentExp:currentExp,maxExp:maxExp,level:prevLevel}
                    return final
            }
        }
    }
}