const { constructItem, render } = require('./common');

function renderBilibiliCard(data) {
  let { name, description, following, fans, likes, level, views, theme } = data;
  let lengthLimit = 14;
  if (description.length > lengthLimit) {
    description = description.substr(0, lengthLimit);
    description += '...';
  }
  let items = [
    constructItem(94, 44, `${name}`, 'title', 18),
    constructItem(55, 84, `粉丝`, 'label', 13.5),
    constructItem(203, 85, `播放量`, 'label', 13.5),
    constructItem(55, 119, `点赞`, 'label', 13.5),
    constructItem(203, 119, `等级`, 'label', 13.5),
    constructItem(55, 154, `简介`, 'label', 13.5),
    constructItem(126, 84, `${fans}`, 'value', 15),
    constructItem(126, 119, `${likes}`, 'value', 15),
    constructItem(289, 86, `${views}`, 'value', 15),
    constructItem(289, 121, `${level}`, 'value', 15),
    constructItem(126, 155, `${description}`, 'value', 13, '', 'YuGothicUI-Regular, Yu Gothic UI')
  ];
  return render(items, theme);
}

module.exports = renderBilibiliCard;
