

function parseNBTData(data) {
    let decoded = atob(data);
    try {
    result = pako.inflate(decoded);
    } catch (err) {
    console.log(err);
    }
    let parsedData = nbt.parseUncompressed(result, function(error, data) {
    if (error) { throw error; }
    });
    //let stringData = JSON.stringify(parsedData);
    //console.log(stringData)
    //return stringData
    return parsedData
    
}
//parseNBTData(myJson.profile.members[profileId].inv_armor.data)
