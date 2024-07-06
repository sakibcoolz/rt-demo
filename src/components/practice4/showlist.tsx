import React, { useEffect } from "react";
import {Datas} from '../../model/model';

const ShowList: React.FC<Datas> = ({list}) => {
    
    console.log("show list component", list)
    return (
        <div>
            <ul>
                {
                    list.map((record)=> (
                        <li>{record.task}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ShowList;