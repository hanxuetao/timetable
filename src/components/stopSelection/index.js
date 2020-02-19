import React from 'react';
import { AutoComplete,Typography } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const {Text} = Typography;

const STOP_INFO = gql`
  {
  stops {
    gtfsId
    name
    lat
    lon
    zoneId
  }
}
`;

function StopSelection (){

        const { loading, error, data } = useQuery(STOP_INFO);

         return (
             <div>
                 <AutoComplete
                     dataSource={data}
                     style={{ width: 200 }}
                     onSearch={this.onSearch}
                     placeholder="input here"
                 />
             </div>

         )

}

export default StopSelection

