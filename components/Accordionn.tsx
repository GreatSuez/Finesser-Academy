
import { Container, Accordion, Text } from "native-base";
import * as React from 'react'


const data = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];


const Accordionn = (data:any) => {
    return (
        <Container>
            <Accordion dataArray={data} expanded={[0]}/>
        </Container>
      );
}

export default Accordionn