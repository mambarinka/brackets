module.exports = function check(str, bracketsConfig) {
    let configArray = bracketsConfig.map((i) => i[0] + i[1]); // создание одномерного массива из конфига

    let newStr = str;

    while (true) { // пока массив не закончится
        for (let i = 0; i < configArray.length; i++) {
            str = str.replace(configArray[i], ''); // поиск нужного элемента в строке и замена его на ''
        }

        if (str.length == 0) {
            return true;
        }


        if (newStr === str) { // элемент не удален, т.е. нет совпадения из configArray
            return false;
        }
        //   console.log(`newStr: ${newStr}`);
        //   console.log(`str: ${str}`);
        newStr = str;
    }
};
