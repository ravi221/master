import React, {Component} from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import * as Actions from '../../store/actions/index';
import { connect } from 'react-redux';
import axios from '../../axios';
import Spinner from '../ui/spinner/spinner';
import Aux from '../../hoc/aux';
import withErroHandler from '../../hoc/withErrorHandler/withErrorHandler';
//import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Program extends Component {

    state = {
        selectProgram : {
            firstName : '',
            email: '',
            phone: '',
            status:''
        },
      
    }
    componentDidMount() {
      this.props.onInitPrograms();
      
    }

    postStrategy = () => {
        axios.post('/saveStrategy.json', this.state.selectProgram)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }
    render() {
    console.log(this.props)
    let programInfo = this.props.error ? <p>Programs can't be loaded</p> : <Spinner />

    if(this.props.programs) {
        programInfo = (
            <Aux>
                <button onClick={this.postStrategy}>Post Strategy</button>
                
                    <Grid
                        data={this.props.programs}
                    >
                        <Column field="name" title="Name" />
                        <Column field="email" title="Email"/>
                        <Column field="phone" title="Phone" />
                        <Column field="status" title="Status"/>
                    </Grid>
                
            </Aux>
        )
    }
        return (
            <div>
                {programInfo}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        programs: state.program.programs,
        error: state.program.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitPrograms: () => dispatch(Actions.initPrograms())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErroHandler(Program, axios));