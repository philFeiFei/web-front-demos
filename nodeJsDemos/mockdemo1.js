var mock = require("mockjs");
var template = {
    'title': 'Syntax Demo',

    'string1|1-10': '★',
    'string2|3': 'value',

    'number1|+1': 100,
    'number2|1-100': 100,
    'number3|1-100.1-10': 1,
    'number4|123.1-10': 1,
    'number5|123.3': 1,
    'number6|123.10': 1.123,

    'boolean1|1': true,
    'boolean2|1-2': true,

    'object1|2-4': {
        '110000': '北京市',
        '120000': '天津市',
        '130000': '河北省',
        '140000': '山西省'
    },
    'object2|2': {
        '310000': '上海市',
        '320000': '江苏省',
        '330000': '浙江省',
        '340000': '安徽省'
    },

    'array1|1': ['AMD', 'CMD', 'KMD', 'UMD'],
    'array2|1-10': ['Mock.js'],
    'array3|3': ['Mock.js'],

    'function': function () {
        return this.title
    }
}

var data4 = mock.mock(template);
var data5 = mock.mock({
    name: {
        first: '@first',
        middle: '@first',
        last: '@last',
        fullName: '@last  @first'
    }
});
var Random = mock.Random
var data6 = mock.mock({
    '222|1': '@id',
    email: Random.natural(3, 333),
    name: '@last @first',
    'ttt': {
        'name|1': ['ccf', 'dfedf', 'dccc']
    }
})

var template = {
    'key|1-10': '★'
}
var data7 = mock.toJSONSchema(template)
//第三个参数可选，代表前面的空格个数
//console.log(data);
console.log(JSON.stringify(data6, null, 2));