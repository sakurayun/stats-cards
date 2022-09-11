const { constructItem, render } = require('./common');

function renderBilibiliCard(data) {
  let { description, theme } = data;
  let lengthLimit = 3;
  if (description.length > lengthLimit) {
    description = description.substr(0, lengthLimit);
    description += '...';
  }
  let items = [
    constructItem(55, 154, `简介`, 'label', 13.5),
    constructItem(126, 155, `${description}`, 'value', 13, '', 'YuGothicUI-Regular, Yu Gothic UI')
  ];
  return render(items, theme);
}

module.exports = renderBilibiliCard;
