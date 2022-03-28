let Mock = require("mockjs")
let arr =
    [
        "http://www.bjjfr.com/data/upload/image/20210714/1626253658407494.jpg",
        "11111",
        "http://www.bjjfr.com/data/upload/image/20210714/1626253663977881.jpg",
        "http://www.bjjfr.com/data/upload/image/20210714/1626253667762810.jpg"
    ]


Mock.mock("/api/PinPai", "get", (config) => {
    console.log(config)
    return arr
})