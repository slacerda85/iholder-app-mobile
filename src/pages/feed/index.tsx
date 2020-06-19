import React from 'react';
import feed from './feed';
import Stacks from '../../components/stacks';

const Index = () => {

  return (    
       <Stacks name="Feed" component={feed} />
  );
}

export default Index;