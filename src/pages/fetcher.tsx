import React, { useEffect, useState } from 'react';
import Request from '../core/request';

//? example for fetching data from api via gatsby
interface IDataDTO {
    status: {
        verify: boolean;
        sentCount: number;
    };
    type: string;
    deleted: boolean;
    _id: string;
    user: string;
    text: string;
    __v: number;
    source: string;
    updatedAt: string;
    createdAt: string;
    used: boolean;
}
const FetcherComponent = () => {
    const [data, setData] = useState<IDataDTO[]>([]);
    useEffect(() => {
        (Request.otherSiteGet<any>('https://cat-fact.herokuapp.com/facts')
            .then(res => setData(res.data))
            .catch(e => console.error(e))
        );
    }, []);
    return (
        <div>
            <h1>Dataaaaaaaa</h1>
            <table style={{ borderSpacing: 0 }}>
                <thead>
                    <tr>
                        <th style={tableDataStyle}>user</th>
                        <th style={tableDataStyle}>text</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => (
                        <tr key={i}>
                            <td style={tableDataStyle}>{d.user}</td>
                            <td style={tableDataStyle}>{d.text}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const tableDataStyle = {
    border: '1px solid #DDD',
    padding: '.5rem',
    borderSpacing: 0,
};

export default FetcherComponent;