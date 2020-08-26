import React from 'react'
import {Accordion,Icon,Container,Checkbox} from 'semantic-ui-react'
import styles from './TreeItemRecursive.module.css';



const TreeItemRecursive=({body,...props})=>{
    const [active, setActive]=React.useState(false)
    const toggleActive=(e)=>{
        setActive(!active)
    }
const [visible, setVisible] = React.useState(1);
    return(
        <Container className={(visible===0)?(styles.hide):(styles.display)}>
            <br/>
            <Checkbox slider onClick={()=>(setVisible(0))}/>
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
