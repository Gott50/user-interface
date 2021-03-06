import React from 'react';
import TextFieldSuggestion from './TextFieldSuggestion';

export default class TextField_Places extends TextFieldSuggestion {
  query = 'places';
  iconClass = 'locationicon';

  mapSuggestions(suggestion, context) {
    return (
      <div
        onClick={() => this.clickSuggestion(suggestion, context)}
        style={{ display: 'inline-flex', justifyContent: 'space-between' }}
      >
        <div className="suggestion_text_locations">
          {suggestion.place.location.name}
        </div>
      </div>
    );
  }

  pressEnter() {
    return false;
  }

  async clickSuggestion(suggestion, context) {
    await this.setState({ value: suggestion.place.location.pk });
    await context.setState(p => ({
      location_names: [
        ...(p.location_names || []),
        suggestion.place.location.name
      ]
    }));
    await this.submitText(context);
    this.textInput.focus();
  }

  addValue(old = [], value) {
    return [...old, value];
  }

  map(location_names = [], context) {
    return super.map(context.state.location_names, context);
  }

  remove(index, context) {
    super.remove(index, context);
    context.setState(p => {
      let l = [...p.location_names];
      l.splice(index, 1);
      return { location_names: l };
    });
  }
}
