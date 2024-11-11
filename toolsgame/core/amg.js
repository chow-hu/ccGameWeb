/*
 * @Description: 
 * @Author: pck
 * @Date: 2022-02-08 18:15:38
 * @Reference: 
 */
const AMG_KEY = "061ce97b482d8549727f3cce47bc3aee";// md5('handmobi123456');
const AMG_FILE_END = "AMG-END";
console.log(AMG_KEY);
function encrypt(buff) {
    let endBUffer = Buffer.from(AMG_FILE_END);
    let buffLen = buff.byteLength;
    let isamg = true;
    for (let index = 0; index < endBUffer.byteLength; index++) {
        if (endBUffer[index] !== buff[buffLen - endBUffer.byteLength + index]) {
            isamg = false;
            break;
        }
    }
    if (isamg) return false;
    if (buffLen <= 16) {
        return false;
    }
    let signBuff = new Buffer.from(AMG_KEY);
    let n = signBuff.byteLength + 16;
    if (n > buffLen) {
        n = buffLen;
    }
    for (let index = 16; index < n; index++) {
        buff[index] ^= signBuff[index - 16];
    }
    return Buffer.concat([buff, endBUffer]);
}

function decrypt(buff) {
    let endBUffer = Buffer.from(AMG_FILE_END);
    let buffLen = buff.byteLength;
    let isamg = true;
    for (let index = 0; index < endBUffer.byteLength; index++) {
        if (endBUffer[index] !== buff[buffLen - endBUffer.byteLength + index]) {
            isamg = false;
            break;
        }
    }
    if (!isamg) return false;

    buff = buff.slice(0, buffLen - endBUffer.byteLength);
    buffLen = buff.byteLength;
    if (buffLen <= 16) {
        return false;
    }
    let signBuff = new Buffer.from(AMG_KEY);
    let n = signBuff.byteLength + 16;
    if (n > buffLen) {
        n = buffLen;
    }
    for (let index = 16; index < n; index++) {
        buff[index] ^= signBuff[index - 16];
    }
    return Buffer.concat([buff, endBUffer]);
}

exports.encrypt = encrypt;
exports.decrypt = decrypt;

