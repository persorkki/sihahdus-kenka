import { Row, Col, Form, ListGroup } from 'react-bootstrap';
import { GemLi} from './Gem';
import GemData from '../data/GemData.json';
import { useEffect, useState } from 'react';

function GemSearch(props) {
  const [search, setSearch] = useState('');
  const [gems, setGems] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    if (search.length > 1) {
      setGems(
        GemData.filter(
          (gem) => (
            (
              gem.Name.toLowerCase().includes(search.toLowerCase()) &&
              !gem.Name.toLowerCase().includes("vaal")
            ) ||
            gem.Effect.toLowerCase().includes(search.toLowerCase()

            )
          )
        )
      );
      
    } else {
      setGems([]);
    }
  }, [search]);

  return (
    <>
      <Row className="justify-content-md-start">
      <Col className="text-start mb-2" md="4">
        <Form onSubmit={(e) => {onSubmit(e)}}>
            <Form.Group >
              
              <Form.Text id="passwordHelpBlock" muted>Search for alternate quality gems</Form.Text>
              <Form.Control as="input" onChange={(e) => { setSearch(e.target.value) }}
                autoFocus
                type="text"
                placeholder="" />
          </Form.Group>
          </Form>
        </Col>

      </Row>

      <Row className="mb-2">
        <Col>
        <ListGroup >
        {gems.map(((gem,i) => (
          <GemLi key={i} Name={gem.Name} Effect={gem.Effect} Weight={gem.Weight} Icon={gem.icon} />
        )))}
          </ListGroup>
        </Col>
      </Row>
  </>
  );
}
export default GemSearch;