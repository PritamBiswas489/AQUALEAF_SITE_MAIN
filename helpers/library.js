export const randomSort = (data) => {
    //get random sorting at the group level (via a hashtable)
    let randomGroupSortKey = {};
    data.forEach((d) => (randomGroupSortKey[d.slug] = Math.random()));

    //add the sortKey property to the individual array entries
    let dataSortable = data.map((x) => {
        return {
            ...x,
            sortKey: randomGroupSortKey[x.slug],
        };
    });

    dataSortable.sort((a, b) => a.sortKey - b.sortKey); //sort the groups!
    return dataSortable;
};

export const shortStr = (yourString,maxLength)=>{
    //trim the string to the maximum length
    var trimmedString = yourString.substr(0, maxLength);
    
    if(yourString.length<=maxLength){
        return trimmedString
    }
    //re-trim if we are in the middle of a word
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
    return trimmedString
}
