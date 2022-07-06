import { ReactNode } from 'react';

import './styles.scss';

interface ProgramsProps {
   children: ReactNode;
}

export function Programs({ children }: ProgramsProps) {
   return (
      <>
         <h1>Programs</h1>
         {children}
      </>
   );
}
