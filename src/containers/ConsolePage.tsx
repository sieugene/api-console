import React, {FC} from 'react';

import {Console} from '../components/Console/Console';
import {Header} from '../components/Header/Header';
import {HistoryQuery} from '../components/HistoryQuery/HistoryQuery';

const ConsolePage: FC = () => {
  return (
    <>
      <Header />
      <HistoryQuery />
      <Console />
    </>
  );
};

export default ConsolePage;
