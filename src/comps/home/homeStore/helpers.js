/* reset argumens */

/** 
 *  Reset Objects for resetting all states to defaults
 *  used in Home.js 80, 87, 95
 * */
export const reset = (resetall) => {
    for(let val in resetall ) {
        resetall[val]()
    }
}

