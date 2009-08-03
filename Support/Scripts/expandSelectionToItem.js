var textContext = require('espresso').textContext;

function expandSelectionToItem() {
	textContext.expandSelectionToItem();
	return true;
}

exports.main = expandSelectionToItem;
