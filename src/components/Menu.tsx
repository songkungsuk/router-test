import { Link } from 'react-router-dom';

export const Menu = () => {
    let name = '홍길동';
    return (
        <div>
            <h3>Angc</h3>
            <a href="/">홈</a>&nbsp;
            <a href="/buttons">버튼</a>&nbsp;
            <a href={`/topic?name=${name}`}>주제</a>&nbsp;
            <a href="/contact">연결</a>
            <h3>Link</h3>

            <Link to="/">홈</Link>
            <Link to="/topic">토픽</Link>
            <Link to="/contact">컨택트</Link>

        </div>
    )
}