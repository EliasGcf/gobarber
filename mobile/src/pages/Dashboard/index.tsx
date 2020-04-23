import React from 'react';
import { View, Button } from 'react-native';

// import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="SignOut" onPress={() => signOut()} />
    </View>
  );
};

export default Dashboard;
