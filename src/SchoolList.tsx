import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


interface School {
    school_name: string;
    dbn: string;
}

const SchoolList: React.FC = () => {
      const [schools, setSchools] = useState<School[]>([]);

      useEffect(() => {
         const fetchData = async () => {
            try{
                const response = await axios.get("https://data.cityofnewyork.us/resource/s3k6-pzi2.json");
                setSchools(response.data);
            } catch (error){
                console.error(error);
            };
        }

        fetchData();
         
      }, []);

      return (
        <div>
            <h2>NYC School List</h2>
            <ul>
                {schools.map((school) => (
                  <li key={school.dbn}>
                     <Link to={`/school/${school.dbn}`}>{school.school_name}</Link>
                  </li>
                ))

                }
            </ul>
        </div>
      )
}

export default SchoolList;