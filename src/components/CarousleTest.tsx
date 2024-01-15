import { Carousel } from "react-bootstrap"

export const CarousleTest = () => {
    return (

        <Carousel>
            <Carousel.Item interval={1000}>
                <img src={`${process.env.PUBLIC_URL}/assets/imgs/1.jpg`} className="App-log" alt="React" />
                <Carousel.Caption>
                    <h3>첫번째 이미지</h3>
                    <p>안녕 난 첫번째 이미지야</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
                <img src={`${process.env.PUBLIC_URL}/assets/imgs/2.jpg`} className="App-log" alt="React" />
                <Carousel.Caption>
                    <h3>두번째 이미지</h3>
                    <p>안녕 난 두번째 이미지야</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
                <img src={`${process.env.PUBLIC_URL}/assets/imgs/3.jpg`} className="App-log" alt="React" />
                <Carousel.Caption>
                    <h3>세번째 이미지</h3>
                    <p>안녕 난 세번째 이미지야</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>


    )
}