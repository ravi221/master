import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

const customGrid = (props) => {
    return (
        <Grid
                            style={{ height: '400px' }}
                            data={props.data}
                        >
                            <Column field="email" title="Email" width="40px" />
                            <Column field="firstname" title="First Name" width="250px" />
                            <Column field="lastname" title="Last Name" />
                            <Column field="phone" title="Phone" width="80px" />
                            <Column field="" width="120px"
                        cell={(props) => (
                            <td>
                                <button onClick={() => this.buttonClicked(props.dataItem.firstname)}>select</button>
                            </td>
                        )} />
                        </Grid>
    )
}

export default customGrid;