class CardInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        };
    }

    checkIsNumeric = e => {
        if (!/^\d*$/.test(e.key)) {
            e.preventDefault();
        }
    };

    hasCardNumberReachedMaxLength = (value, valueLength) => {
        return valueLength > 16;
    };

    onCreditCardChange = e => {
        const value = e.target.value;
        this.checkAndPasteNewValue(e, value);
    };

    checkAndPasteNewValue = (e, value) => {
        this.checkIsNumeric(e);
        if (value) {
            const valueLength = value.split(" ").join("").length;
            if (this.hasCardNumberReachedMaxLength(value, valueLength)) {
                e.preventDefault();
            } else {
                if (this.state.inputValue.length > value.length) {
                    this.setState({ inputValue: value });
                } else {
                    value = value.replace(/\s/g, "").split("");
                    let valueCopy = [...value];

                    for (let i = 0; i < value.length; i++) {
                        if (i == 3 || i == 7 || i == 11) {
                            valueCopy[i] = valueCopy[i] + " ";
                        }
                    }
                    value = valueCopy.join("");
                    this.setState({ inputValue: value });
                }
            }
        } else if (value == "") {
            this.setState({ inputValue: value });
        }
    };

    onPasteCardNumber = e => {
        e.clipboardData.items[0].getAsString(text => {
            this.checkAndPasteNewValue(e, text);
        });
    };

    render() {
        let cardInputClass = "failed";
        if (this.state.inputValue.length == 19) {
            cardInputClass = "success";
        }

        console.log(cardInputClass + "  " + this.state.inputValue.length);

        return (
            <div>
                <input
                    className={cardInputClass}
                    placeholder="Card number"
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.onCreditCardChange}
                    onPaste={this.onPasteCardNumber}
                />
            </div>
        );
    }
}

ReactDOM.render(<CardInput />, document.querySelector("#app"));
