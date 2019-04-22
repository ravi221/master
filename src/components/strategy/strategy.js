import React, {Component} from 'react';
import axios from '../../axios';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions/index';

class Strategy extends Component {
    state = {
        selectStrategy : {
            name : '',
            email: '',
            phone: '',
            status:''
        },
        loading: false,
        strategy: [],
        error: false
    }
    componentDidMount() {
        this.props.onInitStrategy();
    }
    render() {
        return (
            <div>
                
                {this.props.strategy.length &&
                <Grid
                    data={this.props.strategy}
                >
                    <Column field="name" title="Name" />
                    <Column field="email" title="Email"/>
                    <Column field="phone" title="Phone" />
                    <Column field="status" title="Status"/>
                </Grid>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        strategy: state.strategy.strategy
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitStrategy: () => dispatch(Actions.initStrategy())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Strategy);