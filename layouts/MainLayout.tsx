import React, { ReactNode } from 'react';
import Head from "next/head";
import { Box } from '@mui/material';

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps>
  = ({
    children,
    title,
    description,
    keywords
  }) => {
    return (
      <>
        <Head>
          <title>{title || 'Todo площадка'}</title>
          <meta name="description" content={
            `todoList.`
            + description} />
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content={keywords || "Музыка"} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Box>
          {children}
        </Box>
      </>
    );
  };

export default MainLayout;
