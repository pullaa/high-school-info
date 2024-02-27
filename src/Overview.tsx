import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface SchoolParams{
    dbn: string;
}

const Overview: React.FC = () => {
      
      const [ schoolData, setSchoolData] = useState<any>(null);

      useEffect(() => {
         setSchoolData([]);
      }, []);


      return (
        <div>
            Sample Overview
        </div>
      )
}

export default Overview;
