import Emoji from "./Emoji";

class Text extends Emoji {
    constructor(props) {
        super(props);
    }
    render() {
        const decoratedtext = this.addEmoji('I am javascxript lang', '💜');
        return super.render(decoratedtext);
    }
}

export default Text;