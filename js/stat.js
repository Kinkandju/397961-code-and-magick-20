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

// Внутри этой функции был текст, он отрисовывался на белом облаке и его тени.
// Текст необходим только в одном месте.
// function renderCloud(ctx, x, y, color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
// }

function renderCloud(ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#fff';
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.font = ' 16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'hsl(0, 0%, 0%)';
  ctx.fillText('Ура вы победили!', CLOUD_TEXT_X, CLOUD_TEXT_Y);
  ctx.fillText('Список результатов:', CLOUD_TEXT_X, CLOUD_TEXT_Y + GAP * 2);
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = Math.max.apply(Math, times);

  for (var i = 0; i < players.length; i++) {
    var player = players[i];
    var time = times[i];

    if (player === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsla(240, 100%, 50%,' + Math.random() + ')';
    }

    var currentBarHeight = BAR_HEIGHT * time / maxTime;

    ctx.fillRect(CLOUD_X + BAR_GAP + BAR_STEP_X * i, CLOUD_HEIGHT - CLOUD_TEXT_Y - currentBarHeight, BAR_WIDTH, currentBarHeight);

    ctx.fillStyle = 'hsl(0, 0%, 0%)';
    ctx.fillText(Math.round(time), CLOUD_X + BAR_GAP + BAR_STEP_X * i, CLOUD_HEIGHT - CLOUD_TEXT_Y - currentBarHeight - GAP * 2);
    ctx.fillText(player, CLOUD_X + BAR_GAP + BAR_STEP_X * i, CLOUD_HEIGHT - GAP * 2);
  }
};
