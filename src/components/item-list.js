import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ItemList extends Component {
    render() {
        const items = this.props.todo;

        if (!items || items.length < 1) {
            return <p>Use the controls above to add tasks do your todo list.</p>
        }

        return(
            <ul>
                {items.map((todo, index) => {
                    const completed = () => {
                        if (todo.completed === true)
                            return 'completed';
                    }

                    return <li key={index} className={completed()}>{todo.text}</li>
                })}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        todo: state.todo
    }
}

export default connect(mapStateToProps)(ItemList);