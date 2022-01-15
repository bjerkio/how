import React from 'react';
import { Box, Text } from 'theme-ui';

export interface KeyContentProps {
  title: string;
  value: string;
}

const KeyContent: React.FC<KeyContentProps> = ({ title, value }) => {
  if (!value) {
    return null;
  }

  return (
    <Box sx={{ py: 2 }}>
      <Text sx={{ fontWeight: 'bold', width: '250px' }}>{title}</Text>
      <br />
      <Text>{value}</Text>
    </Box>
  );
};

export default KeyContent;
