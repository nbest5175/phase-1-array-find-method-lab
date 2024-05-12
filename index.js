// code your solution here


function superbowlWin(records) {
    const res = records.find(record => record.result === "W")
//    return res.year
   if (res === undefined) {
    return undefined
   }
console.log("This is our variable res: ", res)
   if (res.result === "W")
    return res.year
}

