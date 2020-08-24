import React from 'react'
import {Accordion,Icon,Container} from 'semantic-ui-react'



const TreeItemRecursive=({body,...props})=>{
    const [active, setActive]=React.useState(false)
    const toggleActive=(e)=>{
        setActive(!active)
    }
    return(
        <Container>
            <Accordion id={body.id} styled>
                <Accordion.Title active={active} onClick={toggleActive}>
                    <Icon name='dropdown' />
                    {(body && body.header && body.header.label ? body.header.label : null)}
                </Accordion.Title>            
                
                <Accordion.Content active={active}>
                    {(body && body.children ? body.children.map((e)=>(<TreeItemRecursive body={e}/>)):null)}
                </Accordion.Content>      
            </Accordion>
        </Container>
    )
}

export default TreeItemRecursive