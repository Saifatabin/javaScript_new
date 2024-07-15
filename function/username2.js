function loginMsg(username) {
    if (!username) {
        return `please enter username`;
    }
   return `${username} just logged in`
}
console.log(loginMsg("saif"))
console.log(loginMsg(""))