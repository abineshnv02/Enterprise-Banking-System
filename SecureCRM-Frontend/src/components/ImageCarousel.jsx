import { Carousel } from "react-bootstrap";

function ImageCarousel() {

    const images = [

        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400",

        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1400",

        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400",

    ];

    return (

        <div className="container mt-5">

            <Carousel fade interval={3000}>

                {images.map((image, index) => (

                    <Carousel.Item key={index}>

                        <img

                            src={image}

                            className="d-block w-100 rounded shadow"

                            style={{

                                height: "500px",

                                objectFit: "cover"

                            }}

                            alt="CRM"

                        />

                        <Carousel.Caption>

                            <h2>

                                Enterprise CRM Platform

                            </h2>

                            <p>

                                Secure • AI Powered • Cloud Ready

                            </p>

                        </Carousel.Caption>

                    </Carousel.Item>

                ))}

            </Carousel>

        </div>

    );

}

export default ImageCarousel;