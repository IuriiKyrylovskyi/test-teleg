import { unsuccessMessage } from '~/utils/constants/unsuccessMessage';

type SendCodes = 200 | 400 | 404;

interface ISendResponse {
  code: SendCodes;
  message: string;
}

export default defineEventHandler(async (event) => {
  try {
    const messageData = await readBody(event);

    const response = (await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: messageData.message,
        }),
      }
    )) as unknown as ISendResponse;

    return Response.json({
      code: 200,
      message: response.message,
    });
  } catch (error) {
    return Response.json({ code: 400, message: unsuccessMessage });
  }
});
