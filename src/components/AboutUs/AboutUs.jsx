import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const AboutUs = () => {
    return (
        <div className="container p-7 mt-5">
            <h1>ABOUTUS</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, cumque.
            </p>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Abouts Us</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ratione soluta libero suscipit temporibus modi maxime tempore ad. Magni, molestias? Culpa fugiat, numquam 
                        cumque molestias aperiam ea eaque quia magnam ratione harum exercitationem nostrum libero neque quisquam dolores consequuntur commodi! Rerum similique, amet iure doloribus porro voluptatibus eum unde, 
                        deserunt perferendis quam ab nostrum cumque praesentium autem veritatis optio quae veniam voluptas, officia incidunt delectus asperiores? Rem cum, minus incidunt deleniti officia odit similique obcaecati, fuga eveniet amet animi. Quia.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>ABOUTUS</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem consequatur iusto distinctio 
                        fuga esse sint, accusantium doloribus aspernatur in nobis perspiciatis ex nihil eveniet veritatis aliquid? Ullam nisi
                        recusandae cumque ad minima amet similique repudiandae corporis, et dolor voluptatibus ut?
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default AboutUs;