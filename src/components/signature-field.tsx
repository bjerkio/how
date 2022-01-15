import React from 'react';
import { Flex, Box, Text } from 'theme-ui';

const SignatureField = () => {
  return (
    <Flex sx={{ my: 4, width: '100%', gap: 3, flexDirection: 'column', maxWidth: '500px' }}>
      <Flex sx={{ my: 4, width: '100%', gap: 3 }}>
        <Flex sx={{ flexGrow: 1, gap: 3, width: '100%' }}>
          <Text>Sted:</Text>
          <Box
            sx={{ borderBottom: '2px solid black', width: '100%', flexGrow: 1 }}
          />
        </Flex>
        <Flex sx={{ flexGrow: 2, gap: 3, width: '100%' }}>
          <Text>Dato:</Text>
          <Box
            sx={{ borderBottom: '2px solid black', width: '100%', flexGrow: 1 }}
          />
        </Flex>
      </Flex>
      <Flex sx={{ flexGrow: 1, gap: 3, width: '100%' }}>
        <Box sx={{ width: '100px' }}>For kunde:</Box>
        <Box
          sx={{ borderBottom: '2px solid black', width: '100%', flexGrow: 1 }}
        />
      </Flex>
      <Flex sx={{ flexGrow: 1, gap: 3, width: '100%' }}>
        <Box>Navn:</Box>
        <Box
          sx={{ borderBottom: '2px solid black', width: '100%', flexGrow: 1 }}
        />
      </Flex>
      <Flex sx={{ flexGrow: 1, gap: 3, width: '100%' }}>
        <Box>Tittel:</Box>
        <Box
          sx={{ borderBottom: '2px solid black', width: '100%', flexGrow: 1 }}
        />
      </Flex>
    </Flex>
  );
};

export default SignatureField;
