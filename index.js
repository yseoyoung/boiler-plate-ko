// express 모듈 가져오기
const express = require('express')
// express() 메소드를 이용하여 새로운 app 만들기
const app = express()
// port 번호
const port = 5000

// User 가져오기
const { User } = require("./models/User");
// bodyParser
const bodyParser = require('body-parser');

const config = require('./config/key');

//bodyParser가 client에서 오는 정보를 서버에서 분석해서 가져올 수 있게 함
//application/x-www-form-urlencoded 형식
app.use(bodyParser.urlencoded({ extended: true }));

//application/json 형식
app.use(bodyParser.json());



// mongoose 연걸
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

// express() -> /디렉토리로 가면 Hello World! 출력
app.get('/', (req, res) => res.send('3월 27일!'))


app.post('/register', (req, res) => {

    //회원 가입할 때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터 베이스에 넣어준다.


    //인스턴스 생성
    const user = new User(req.body)

    //정보들 user 모델에 저장
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })

})


// 5000번 포트에서 실행
app.listen(port, () => console.log(`Example app listening on port ${port}!`))