import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';
import {getNoteByUser} from './../utils/api';

class Note extends Component{
    constructor(){
        super();
        this.state={notes:getNoteByUser()};
    }

    getNote(){
        // getNoteByUser().then((notes)=>{
        //     this.setState({notes});
        // });
        this.setState({notes: getNoteByUser()})
        console.log(this.state);
    }

    componentDidMount(){
        this.getNote();
    }

    render(){
        debugger;
        const {notes} = this.state;
        return(
            <div>
                <Nav/>
                    <h3>Sample Todo App</h3>
                    <hr/>

                    {notes.map((note, index)=>{
                        debugger;
                        return(
                            <div className=''col-sm-6 key={index}>
                            <div className='panel panel-primary'>
                                <div className='panel-heading'>
                                    <h3 className='panel-title'><span className='btn'>#{note._id}</span></h3>
                                </div>
                                <div className='panel-body'>
                                    <p>{note.body}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })}

                    <div className='col-sm-12'>
                        <div className='jumbotron text-center'>
                            <h2>Get Access by logging</h2>
                        </div>
                    </div>
                    <div className='col-sm-12'>
                        <div className='jumbotron text-center'>
                            <h2>View Notes</h2>
                            <Link className='btn btn-lg btn-success' to='/note'>all notes</Link>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Note;