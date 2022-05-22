import { Box } from '@mui/material';
import React from 'react';

const IndexLayout = ({ children }: { children: React.ReactNode }) => {
  return <div><Box>{children}</Box></div>;
};

export default IndexLayout;