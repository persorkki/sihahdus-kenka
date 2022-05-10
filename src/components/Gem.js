import { ListGroupItem, Image} from 'react-bootstrap';
import React from 'react';

export function GemLi(props) {
  return (
    <ListGroupItem as="li" className="d-flex bg-dark border-light" style={{lineHeight: "24px"}}> 
      <div style={{flexBasis:"5%"}}>
        <Image className="m-auto" style={{ height: "47px", width: "47px" }} src={props.Icon} loading="lazy" />
      </div>   
      <div className="text-light align-self-center" style={{flexBasis:"35%"}}>
        {props.Name}
      </div>
      <div className="text-info align-self-center" style={{ flexBasis: "70%", whiteSpace:"pre-line" }}>
        {props.Effect}
      </div>
      <div className="small text-muted justify-self-end" style={{flexBasis:"5%"}}>
        {props.Weight}
      </div>
      </ListGroupItem >
        

  );
}

export default GemLi;