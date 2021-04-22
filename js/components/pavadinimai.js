function pavadinimai(selector, account) {

    let min = 0;
    for (let i = 0; i < account.length; i++) {
        let {income} = account[i]
        let min = Math.min.apply(null, income[i]);
        console.log(min);
    }

}




export { pavadinimai }