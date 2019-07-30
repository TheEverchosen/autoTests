export function generatePassword(length){
    var password = ''
    var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    for (var i = 0; i <= length; i++){
        password = password.concat(charset.charAt(Math.floor(Math.random() *
        Math.floor(charset.length))))
    }
    return password;
}