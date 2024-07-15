function loginMsg(username) {
    if (username===undefined) {
        return `please enter username`;
    }
   return `${username} just logged in`
}
console.log(loginMsg("saif"))
console.log(loginMsg())