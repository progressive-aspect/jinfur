let Mock = require("mockjs")
Mock.mock(
    "/api/home",
    [
        "http://www.bjjfr.com/data/upload/image/20211107/1636254625557552.jpg",
        "http://www.bjjfr.com/data/upload/image/20211122/1637573979617270.jpg",
        "http://www.bjjfr.com/data/upload/image/20210824/1629797011979856.jpg",
        "http://www.bjjfr.com/data/upload/image/20210828/1630117393406436.jpg",
        "http://www.bjjfr.com/data/upload/image/20210714/1626246559918144.jpg"
    ]
)
Mock.mock(
    "/api/home1",
    [
        "http://bj.121314.com/data/upload/image/20210729/1627527486386852.jpg",
        "http://bj.121314.com/data/upload/image/20210729/1627527505158912.jpg",
        "http://bj.121314.com/data/upload/image/20210729/1627528232939308.jpg",
        "http://bj.121314.com/data/upload/image/20210729/1627527519542724.jpg"
    ]
)
Mock.mock(
    "/api/home2",
    [
        "http://bj.121314.com/data/upload/image/20210704/2-2106061332160-L.jpg",
        "http://bj.121314.com/data/upload/image/20210704/2-210606094I90-L.jpg",
        "http://bj.121314.com/data/upload/image/20210729/1627528309549814.jpg",
        "http://bj.121314.com/data/upload/image/20210704/2-2106061426490-L.jpg",
        "http://bj.121314.com/data/upload/image/20210704/2-210606094A20-L.jpg",
        "http://bj.121314.com/data/upload/image/20211009/1633764116770351.jpg"
    ]
)
Mock.mock(
    "/api/home3",
    [{
            image: "http://bj.121314.com/data/upload/image/20211009/1633761431357313.jpg",
            title: "MR.周&MS.陈",
            pro: "Shooting Time: 2021.12.19"
        },
        {
            image: "http://bj.121314.com/data/upload/image/20211011/1633923926193297.jpg",
            title: "MR.范&MS.谷",
            pro: "Shooting Time: 2021.12.11"
        },
        {
            image: "http://bj.121314.com/data/upload/image/20211011/1633931164276754.jpg",
            title: "MR.朱&MS.栾",
            pro: "Shooting Time: 2021.11.23"
        },
        {
            image: "http://bj.121314.com/data/upload/image/20211011/1633937115602229.jpg",
            title: "MR.王&MS.李",
            pro: "Shooting Time: 2021.11.06"
        },
        {
            image: "http://bj.121314.com/data/upload/image/20211009/1633761652228290.jpg",
            title: "MR.赵&MS.张",
            pro: "Shooting Time: 2021.10.9"
        },
        {
            image: "http://bj.121314.com/data/upload/image/20211009/1633761322477656.jpg",
            title: "MR.苗&MS.刘",
            pro: "Shooting Time: 2021.10.09"
        },
        {
            image: "http://bj.121314.com/data/upload/image/20210806/1628243591954527.jpg",
            title: "MR.马&MS.沙",
            pro: "Shooting Time: 2021.07.25"
        },
        {
            image: "http://bj.121314.com/data/upload/image/20211011/1633938201393538.jpg",
            title: "MR.张&MS.王 ",
            pro: "Shooting Time: 2021.10.11"
        }
    ]
)
Mock.mock(
    "/api/home4",
    [
        {
            image: "http://bj.121314.com/data/upload/image/20210704/2106061312254955.jpg",
            img:"http://bj.121314.com/static/images/vr-player.png",
            title:"· 维罗纳美学中心 ·",
            pro:"VERONA AESTHETIC CENTER"
        },
        {
            image: "http://bj.121314.com/data/upload/image/20210704/2106061132344641.jpg",
            img:"http://bj.121314.com/static/images/vr-player.png",
            title:"· 摩尔庄园体验中心 ·",
            pro:"Verona aesthetic Center"
        }
    ]
)