import React, { Component } from 'react';
import React from 'react';


class BurgerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beef: '',
      amount: '',
      doneness: 3,
      toppings: [],
      cheese: '',
      bun: 'plain',
      sauce: '',
      extra: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  handleDonenessChange = (event) => {
    this.setState({
      doneness: parseInt(event.target.value)
    });
  }

  handleToppingsChange = (event) => {
    const target = event.target;
    const name = target.name;
    const checked = target.checked;
    let toppings = [...this.state.toppings];

    if (checked) {
      toppings.push(name);
    } else {
      toppings = toppings.filter(item => item !== name);
    }

    this.setState({
      toppings: toppings
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  }

  render() {
    const { beef, amount, doneness, toppings, cheese, bun, sauce, extra } = this.state;

    return (
      <div>
        <section id="overlay">
          <img src="https://1000logos.net/wp-content/uploads/2016/10/Burger-King_Logo-700x420.png" alt="Burger-King_Logo-700x420" id="logo" />
        </section>
        <hr />
        <form onSubmit={this.handleSubmit}>
          {/* First Line */}
          <h1>Let's create a burger</h1>
          <section className="meat">
            <label htmlFor="beef">What type of meat would you like?</label>
            <br />
            <input type="text" id="beef" name="beef" value={beef} onChange={this.handleInputChange} />
          </section>
          <hr />

          {/* Second Line */}
          <section className="patties">
            <label htmlFor="amount">How many patties would you like?</label>
            <br />
            <input type="number" id="amount" name="amount" min="1" max="5" value={amount} onChange={this.handleInputChange} />
          </section>
          <hr />

          {/* Third Line */}
          <section className="cooked">
            <span style={{ color: 'red' }}>Rare</span>
            <input type="range" min="1" max="5" step="1" name="doneness" id="doneness" value={doneness} onChange={this.handleDonenessChange} />
            <span style={{ color: 'saddlebrown' }}>Well-done</span>
          </section>
          <hr />

          {/* Fourth Line */}
          <section className="toppings">
            <span>Choose your toppings:</span>
            <br />
            <input type="checkbox" name="lettuce" id="lettuce" checked={toppings.includes('lettuce')} onChange={this.handleToppingsChange} />
            <span style={{ color: 'lawngreen' }}>Lettuce</span>
            <input type="checkbox" name="onion" id="onion" checked={toppings.includes('onion')} onChange={this.handleToppingsChange} />
            <span style={{ color: 'lightgrey' }}>Onion</span>
            <input type="checkbox" name="olive" id="olive" checked={toppings.includes('olive')} onChange={this.handleToppingsChange} />
            <span style={{ color: 'darkolivegreen' }}>Olive</span>
            <input type="checkbox" name="tomato" id="tomato" checked={toppings.includes('tomato')} onChange={this.handleToppingsChange} />
            <span style={{ color: 'tomato' }}>Tomato</span>
          </section>
          <hr />

          {/* Fifth Line */}
          <section className="question">
            <span>Would you like to add more cheese?</span>
            <br />
            <label htmlFor="yes">
              <input type="radio" name="cheese" id="yes" value="yes" checked={cheese === 'yes'} onChange={this.handleInputChange} />
              Yes
            </label>
            <label htmlFor="no">
              <input type="radio" name="cheese" id="no" value="no" checked={cheese === 'no'} onChange={this.handleInputChange} />
              No
            </label>
          </section>
          <hr />

          {/* Sixth Line */}
          <section className="bun-type">
            <span>What type of bun would you like?</span>
            <br />
            <select name="bun" id="bun" value={bun} onChange={this.handleInputChange}>
              <option value="plain">Plain</option>
              <option value="seasame">Seasame</option>
              <option value="pretzel">Pretzel</option>
              <option value="brioche">Brioche</option>
              <option value="potato">Potato</option>
            </select>
          </section>
          <hr />

          {/* Seventh Line */}
          <section className="sauce-selection">
            <label htmlFor="sauce">What sauce would you add?</label>
            <br />
            <input list="sauces" id="sauce" name="sauce" value={sauce} onChange={this.handleInputChange} />
            <datalist id="sauces">
              <option value="Ketchup">great</option>
              <option value="Mayo">good</option>
              <option value="Hot-sauce">good</option>
              <option value="Mustard">great</option>
              <option value="Thousand-Island">delicious</option>
            </datalist>
          </section>
          <hr />

          {/* Eighth Line */}
          <section className="extra-info">
            <label htmlFor="extra">Anything else you want to add?</label>
            <br />
            <textarea name="extra" id="extra" cols="30" rows="5" value={extra} onChange={this.handleInputChange}></textarea>
          </section>
          <hr />

          {/* Ninth Line */}
          <section className="submission">
            <button type="submit" id="submit" name="submit">SUBMIT</button>
          </section>
        </form>
      </div>
    );
  }
}

export default BurgerForm;
ReactDOM.render(<BurgerForm />, document.getElementById('root'));
