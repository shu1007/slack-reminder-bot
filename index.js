const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});
app.command('/echo', async ({ command, ack, say }) => {
  // コマンドリクエストを確認
  await ack();

  await say(`${command.text}`);
});
(async () => {
  await app.start(process.env.PORT || 3000);
})();
