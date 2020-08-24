import React from 'react';
import TreeItemRecursive from './Components/Base/TreeItemRecursive'
import 'semantic-ui-css/semantic.min.css'

const userdata={
  id:1,
  header:{
    label:"item1"
  },
  children:[
    {
      id:2,
      header:{
        label:"item2"
      },
      children:[
        
      ]
    },
    {
      id:3,
      header:{
        label:"item3"
      },
      children:[
        {
          id:4,
          header:{
            label:"item4"
          },
          children:[
            
          ]
        },
        {
          id:5,
          header:{
            label:"item5"
          },
          children:[
            
          ]
        }
      ]
    },
    {
      id:6,
      header:{
        label:"item6"
      },
      children:[
        
      ]
    }
  ]
}
export const App = () => {
  return (
      <TreeItemRecursive body={userdata}/>    
  );
}
