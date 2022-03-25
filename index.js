// express 모듈 가져오기
const express = require('express')
// express() 메소드를 이용하여 새로운 app 만들기
const app = express()
// port 번호
const port = 5000

// mongoose 연걸
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://seoyoung:ss402ss*@boiler-plate.6shbf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

// express() -> /디렉토리로 가면 Hello World! 출력
app.get('/', (req, res) => res.send('Hello World!'))


// 5000번 포트에서 실행
app.listen(port, () => console.log(`Example app listening on port ${port}!`))