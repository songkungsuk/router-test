import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Menu = () => {
    let name = '홍길동';
    return (
        <div>
            <Nav variant='pills' defaultActiveKey={'/'}>
                <Nav.Item>
                    <Nav.Link href='/'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/buttons'>버튼</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href={`/topic?name=${name}`}>주제</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/contact'>연결</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/state'>plus & minus</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/grid1'>grid1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/grid2'>grid2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/boot'>Boot</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/alert'>알림</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/carousel'>carousel</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/login'>login</Nav.Link>
                </Nav.Item>
            </Nav>
            <h3>Angc</h3>
            <a href="/">홈</a>&nbsp;
            <a href="/buttons">버튼</a>&nbsp;
            <a href={`/topic?name=${name}`}>주제</a>&nbsp;
            <a href="/contact">연결</a>&nbsp;
            <a href="/state">plus & minus</a>&nbsp;
            <a href="/grid1">grid1</a>&nbsp;
            <a href="/grid2">grid2</a>&nbsp;
            <a href="/boot">Boot</a>&nbsp;
            <h3>Link</h3>

            <Link to="/">홈</Link>&nbsp;
            <Link to="/topic">토픽</Link>&nbsp;
            <Link to="/contact">컨택트</Link>&nbsp;
            <Link to="/state">state</Link>&nbsp;
            <Link to="/grid1">grid1</Link>&nbsp;
            <Link to="/grid2">grid2</Link>&nbsp;
            <Link to="/boot">Boot</Link>&nbsp;

        </div>
    )
}