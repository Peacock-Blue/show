import React, {useState} from 'react';
import {Accordion, Icon, Header, Container, Divider} from 'semantic-ui-react';

export const Show = ({userdata}) => {
  const [active, setActive] = useState(0);
  return (
    <>
    <Container>
      <Header size='huge' content={userdata.name}/>
      <Divider/>
      {
        (userdata.meta.length!==0)?
              (
                <div>
                    {userdata.meta.map((data, i)=>(
                        <Accordion styled>
                            <Accordion.Title
                              active={active === data.index}
                              onClick={()=>{setActive(data.index)}}
                            >
                              <Icon name='dropdown' />
                              {data.name}
                            </Accordion.Title>
                            <Accordion.Content active={active === data.index}>
                              <p>
                                {data.[data.name]}
                              </p>
                            </Accordion.Content>
                          </Accordion>
                      ))}
                </div>
              ):(<div/>)
      }
    </Container>
    </>
  );
}
