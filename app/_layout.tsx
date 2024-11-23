import React, { useEffect } from 'react';
import { Slot, useRouter } from 'expo-router'; 

export default function AppLayout() {
  const router = useRouter();


  useEffect(() => {
    router.replace('./screens/SplashScreen');
  }, []);

  return <Slot />;
}
