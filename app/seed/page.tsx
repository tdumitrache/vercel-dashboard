'use client';

import React, { useEffect } from 'react';

const page = () => {
  useEffect(() => {
    fetch('http://localhost:3000/seed/api', { method: 'POST' });
  }, []);

  return <div>Page seed</div>;
};

export default page;
