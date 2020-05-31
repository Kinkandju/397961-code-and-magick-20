'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_TEXT_X = 120;
var CLOUD_TEXT_Y = 30;
var GAP = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_STEP_X = BAR_GAP + BAR_WIDTH;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.font = ' 16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'hsl(0, 0%, 0%)';
  ctx.fillText('Ура вы победили!', CLOUD_TEXT_X, CLOUD_TEXT_Y);
  ctx.fillText('Список результатов:', CLOUD_TEXT_X, CLOUD_TEXT_Y + GAP * 2);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandom = function () {
  return Math.random();
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'hsla(240, 100%, 50%,' + getRandom() + ')';
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    var maxTime = getMaxElement(times);
    var currentBarHeight = BAR_HEIGHT * times[i] / maxTime;

    ctx.fillRect(CLOUD_X + BAR_GAP + BAR_STEP_X * i, CLOUD_HEIGHT - CLOUD_TEXT_Y - currentBarHeight, BAR_WIDTH, currentBarHeight);

    ctx.fillStyle = 'hsl(0, 0%, 0%)';
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + BAR_STEP_X * i, CLOUD_HEIGHT - CLOUD_TEXT_Y - currentBarHeight - GAP * 2);
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + BAR_STEP_X * i, CLOUD_HEIGHT - GAP * 2);
  }
};
