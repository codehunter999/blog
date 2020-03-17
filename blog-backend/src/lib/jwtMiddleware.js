//토큰 검증용 미들웨어 
//app에 검증용 미들웨어를 적용하려면 router 미들웨어 적용전에 선언되어야 함
//main.js에서 router위에 선언해주면 됨
import jwt from 'jsonwebtoken';

const jwtMiddleware = (ctx, next) => {
    const token = ctx.cookies.get('access_token');
    if(!token){
        return next();  //토큰이 없음
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //해석된결과를 미들웨어에서 사용할수 있게 하는 코드
        ctx.state.user = {
            _id: decoded._id,
            username: decoded.username,
        };
        console.log(decoded);
        return next();
    }
    catch(e){
        //토큰 검증 실패
        return next();
    }
};

export default jwtMiddleware;