import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import Burger from './Burger';
import sampleBurgers from '../sample-burgers';

class App extends React.Component {

    state = {
        burgers: {},
        order: {}
    }

    addBurger = burger => {
        // 1. Создать копию объекта
        const burgers = { ...this.state.burgers };
        // 2. Добавить новый бургер в переменную burgers
        burgers[`burger${Date.now()}`] = burger;
        // 3. Записать наш новый объект burger в state
        this.setState({ burgers })
    }

    loadSampleBurgers = () => {
        this.setState({ burgers: sampleBurgers })
    }

    render() {
        return (
            <div className="burger-paradise">
                <div className="menu">
                    <Header title={"Hot Burger"} amount={10} hot={true} />
                    <ul className="burgers">
                        {Object.keys(this.state.burgers).map(key => {
                            return <Burger
                                key={key}
                                index={key}
                                details={this.state.burgers[key]}
                            />
                        })}
                    </ul>
                </div>
                <Order />
                <MenuAdmin
                    addBurger={this.addBurger}
                    loadSampleBurgers={this.loadSampleBurgers}
                />
            </div>
        )


    }
}

export default App;