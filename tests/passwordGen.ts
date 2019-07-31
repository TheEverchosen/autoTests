// file contains password generator + stable creds for login
// which is shite practice

export function generatePassword(length){
    var password = ''
    var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    for (var i = 0; i <= length; i++){
        password = password.concat(charset.charAt(Math.floor(Math.random() *
        Math.floor(charset.length))))
    }
    return password;
}

export var email = 'myrandommail2@testmail.com'
export var password = '12345678'