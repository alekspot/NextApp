'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ReactQueryClientProvider } from './ReactQueryProvider';
import { AuthProvider } from './AuthProvider';
import { CacheProvider } from '@chakra-ui/next-js';
import { MapStateProvider } from './MapStateProvider';
import { YMapProvider } from './YMapProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ReactQueryClientProvider>
        <AuthProvider>
          <ChakraProvider>
            <MapStateProvider>
              <YMapProvider>{children}</YMapProvider>
            </MapStateProvider>
          </ChakraProvider>
        </AuthProvider>
      </ReactQueryClientProvider>
    </CacheProvider>
  );
}
