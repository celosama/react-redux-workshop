import React, { Component } from 'react';

class ItemList extends Component {
    render() {
        const items = this.props.items;

        if (!items) {
            return <p>Use the controls above to add tasks do your todo list.</p>
        }

        return(
            <ul>
                {items.map((todo, index) => {
                    const completed = () => {
                        if (todo.completed === true)
                            return 'completed';
                    }

                    return <li key={index} id={todo.id} className={completed()}>{todo.text}</li>
                })}
            </ul>
        )
    }
}

export default ItemList;