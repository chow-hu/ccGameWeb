/*
 * @Description:
 * @Author: zy
 * @Date: 2021-06-17 16:19:59
 * @Reference:
 */


const WRAP_INSPECTION = true;
const WORD_REG = /([a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûа-яА-ЯЁё]+|\S)/;
const SYMBOL_REG = /^[!,.:;'}\]%\?>、‘“》？。，！]/;
const LAST_WORD_REG = /([a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûаíìÍÌïÁÀáàÉÈÒÓòóŐőÙÚŰúűñÑæÆœŒÃÂãÔõěščřžýáíéóúůťďňĚŠČŘŽÁÍÉÓÚŤżźśóńłęćąŻŹŚÓŃŁĘĆĄ-яА-ЯЁё]+|\S)$/;
const LAST_ENGLISH_REG = /[a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûаíìÍÌïÁÀáàÉÈÒÓòóŐőÙÚŰúűñÑæÆœŒÃÂãÔõěščřžýáíéóúůťďňĚŠČŘŽÁÍÉÓÚŤżźśóńłęćąŻŹŚÓŃŁĘĆĄ-яА-ЯЁё]+$/;
const FIRST_ENGLISH_REG = /^[a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûаíìÍÌïÁÀáàÉÈÒÓòóŐőÙÚŰúűñÑæÆœŒÃÂãÔõěščřžýáíéóúůťďňĚŠČŘŽÁÍÉÓÚŤżźśóńłęćąŻŹŚÓŃŁĘĆĄ-яА-ЯЁё]/;

// in case truncate a character on the Supplementary Multilingual Plane
// test case: a = '😉🚗'
// safeSubstring(a, 1) === '😉🚗'
// safeSubstring(a, 0, 1) === '😉'
// safeSubstring(a, 0, 2) === '😉'
// safeSubstring(a, 0, 3) === '😉'
// safeSubstring(a, 0, 4) === '😉🚗'
// safeSubstring(a, 1, 2) === safeSubstring(a, 1, 3) === '😉'
// safeSubstring(a, 2, 3) === safeSubstring(a, 2, 4) === '🚗'
export function safeSubstring(targetString: string, startIndex: number, endIndex?: number) {
    let newStartIndex = startIndex;
    const startChar = targetString[startIndex];
    // lowSurrogateRex
    if (startChar >= '\uDC00' && startChar <= '\uDFFF') {
        newStartIndex--;
    }
    let newEndIndex;
    if (endIndex !== undefined) {
        newEndIndex = endIndex;
        if (endIndex - 1 !== startIndex) {
            const endChar = targetString[endIndex - 1];
            // highSurrogateRex
            if (endChar >= '\uD800' && endChar <= '\uDBFF') {
                newEndIndex--;
            }
        } else if (startChar >= '\uD800' && startChar <= '\uDBFF') {
            // highSurrogateRex
            newEndIndex++;
        }
    }
    return targetString.substring(newStartIndex, newEndIndex) as string;
}

export function localFragmentText(stringToken: string, allWidth: number, maxWidth: number, measureText: (string: string) => number) {
    // check the first character
    const wrappedWords: string[] = [];
    // fast return if strArr is empty
    if (stringToken.length === 0 || maxWidth < 0) {
        wrappedWords.push('');
        return wrappedWords;
    }
    let text = stringToken;
    while (allWidth > maxWidth && text.length > 1) {
        let fuzzyLen = text.length * (maxWidth / allWidth) | 0;
        let tmpText = safeSubstring(text, 0, fuzzyLen);
        let width = measureText(tmpText);
        let pushNum = 0;

        let checkWhile = 0;
        const checkCount = 10;

        // Exceeded the size
        while (width > maxWidth && checkWhile++ < checkCount) {
            fuzzyLen *= maxWidth / width;
            fuzzyLen |= 0;
            tmpText = safeSubstring(text, 0, fuzzyLen);
            width = measureText(tmpText);
        }
        checkWhile = 0;

        // Find the truncation point
        while (width <= maxWidth && checkWhile++ < checkCount) {
            tmpText = safeSubstring(text, 0, fuzzyLen + 1);
            pushNum = tmpText.length - fuzzyLen;
            fuzzyLen += pushNum;
            width = measureText(tmpText);
        }

        fuzzyLen -= pushNum;
        // in case maxWidth cannot contain any characters, need at least one character per line
        if (fuzzyLen === 0) {
            fuzzyLen = 1;
        } else if (fuzzyLen === 1 && text[0] >= '\uD800' && text[0] <= '\uDBFF') {
            // highSurrogateRex
            fuzzyLen = 2;
        }
        let sLine = safeSubstring(text, fuzzyLen);;
        let sText = safeSubstring(text, 0, fuzzyLen);
        let result;

        // symbol in the first
        if (WRAP_INSPECTION) {
            if (SYMBOL_REG.test(sLine || tmpText)) {
                result = LAST_WORD_REG.exec(sText);
                fuzzyLen -= result ? result[0].length : 0;
                if (fuzzyLen === 0) { fuzzyLen = 1; }

                sLine = safeSubstring(text, fuzzyLen);
                sText = safeSubstring(text, 0, fuzzyLen);
            }
        }

        // To judge whether a English words are truncated
        if (FIRST_ENGLISH_REG.test(sLine)) {
            result = LAST_ENGLISH_REG.exec(sText);
            if (result && sText !== result[0]) {
                fuzzyLen -= result[0].length;
                sLine = safeSubstring(text, fuzzyLen);
                sText = safeSubstring(text, 0, fuzzyLen);
            }
        }

        // The first line And do not wrap should not remove the space
        if (wrappedWords.length === 0) {
            wrappedWords.push(sText);
        } else {
            sText = sText.trim();
            if (sText.length > 0) {
                wrappedWords.push(sText);
            }
        }
        text = sLine || tmpText;
        allWidth = measureText(text);
    }

    if (wrappedWords.length === 0) {
        wrappedWords.push(text);
    } else {
        text = text.trim();
        if (text.length > 0) {
            wrappedWords.push(text);
        }
    }
    return wrappedWords;
}
