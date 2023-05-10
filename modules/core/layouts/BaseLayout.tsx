import type { FC, PropsWithChildren } from 'react';

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => (
  <main>{children}</main>
);

export default BaseLayout;
