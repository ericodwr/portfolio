import React from 'react';

import projectsData from '../../data';
import Project from '@/app/components/Project';

// AiFillGithub

const page = ({ params }) => {
  const data = projectsData.find((data) => data.id == params.id);
  return (
    <div className="h-[90vh] flex justify-between items-center">
      <div className="flex justify-between lg:items-start lg:flex-row flex-col">
        <Project data={data} />
      </div>
    </div>
  );
};

export default page;
