import React, {FC} from 'react';

import {useAuthCheck} from './Hooks/useAuthCheck';
import {Routes} from './containers';

const App: FC = () => {
  useAuthCheck();
  return <Routes />;
};

export default App;
