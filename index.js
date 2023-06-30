const express = require("express");
const MongoClient = require("mongodb").MongoClient;
//데이터베이스의 데이터 입력,출력을 위한 함수명령어 불러들이는 작업
const app = express();
const port = 7003;

//ejs 태그를 사용하기 위한 세팅
app.set("view engine","ejs");
//사용자가 입력한 데이터값을 주소로 통해서 전달되는 것을 변환(parsing)
app.use(express.urlencoded({extended: true}));
app.use(express.json()) 
//css/img/js(정적인 파일)사용하려면 이코드를 작성!
app.use(express.static('public'));

//데이터 베이스 연결작업
let db; //데이터베이스 연결을 위한 변수세팅(변수의 이름은 자유롭게 지어도 됨)

MongoClient.connect("mongodb+srv://saunogq:dudwndi7@cluster0.xaury3g.mongodb.net/?retryWrites=true&w=majority",function(err,result){
    //에러가 발생했을경우 메세지 출력(선택사항)
    if(err) { return console.log(err); }

    //위에서 만든 db변수에 최종연결 ()안에는 mongodb atlas 사이트에서 생성한 데이터베이스 이름
    db = result.db("test_form");

    //db연결이 제대로 됬다면 서버실행
    app.listen(port,function(){
        console.log("서버연결 성공");
    });

});

const foodData =[
    {
        img: "/img/1.png",
        title: "순대"
    },
    {
        img: "/img/2.png",
        title: "곱창"
    },
    {
        img: "/img/3.png",
        title: "막창"
    },
    {
        img: "/img/4.png",
        title: "조개"
    },
    {
        img: "/img/5.png",
        title: "육회"
    },
    {
        img: "/img/6.png",
        title: "닭발"
    },
    {
        img: "/img/7.png",
        title: "간"
    },
    {
        img: "/img/8.png",
        title: "생간"
    },
    {
        img: "/img/9.png",
        title: "천엽"
    },
    {
        img: "/img/10.png",
        title: "순대국"
    },
    {
        img: "/img/11.png",
        title: "돼지껍데기"
    },
    {
        img: "/img/12.png",
        title: "내장탕"
    },
    {
        img: "/img/13.png",
        title: "생선눈"
    },
    {
        img: "/img/14.png",
        title: "보신탕"
    },
    {
        img: "/img/15.png",
        title: "소주"
    },
    {
        img: "/img/16.png",
        title: "맥주"
    },
    {
        img: "/img/17.png",
        title: "막걸리"
    },
    {
        img: "/img/18.png",
        title: "오징어"
    },
    {
        img: "/img/19.png",
        title: "쥐포"
    },
    {
        img: "/img/20.png",
        title: "견과류"
    },
    {
        img: "/img/21.png",
        title: "레몬"
    },
    {
        img: "/img/22.png",
        title: "청양고추"
    },
    {
        img: "/img/23.png",
        title: "새우"
    },
    {
        img: "/img/24.png",
        title: "새끼보"
    },
    {
        img: "/img/25.png",
        title: "와인"
    },
    {
        img: "/img/26.png",
        title: "이과두주"
    },
    {
        img: "/img/27.png",
        title: "육포"
    },
    {
        img: "/img/28.png",
        title: "선지국"
    },
    {
        img: "/img/29.png",
        title: "번데기"
    },
    {
        img: "/img/30.png",
        title: "산낙지"
    },
    {
        img: "/img/31.png",
        title: "오돌뼈"
    },
    {
        img: "/img/32.png",
        title: "양고기"
    },
    {
        img: "/img/33.png",
        title: "회"
    },
    {
        img: "/img/34.png",
        title: "메뚜기"
    },
]

app.get("/",function(req,res){
    res.render("index.ejs")
});
app.get("/form",(req,res)=>{
    res.render("testform.ejs", {foodData:foodData})
})

