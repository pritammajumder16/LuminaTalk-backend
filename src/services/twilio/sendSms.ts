import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();

export default async (to: string, body: string): Promise<void> => {
  try {
    const accountSid = process.env.TWILIO_SID;
    const authToken = process.env.TWILIO_TOKEN;
    const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

    if (!accountSid || !authToken || !twilioPhoneNumber) {
      throw new Error("Missing Twilio configuration in .env file");
    }
    const client = twilio(accountSid, authToken);
    const message = await client.messages.create({
      body,
      to,
      from: twilioPhoneNumber,
    });
    console.log(`Message sent: ${message.sid}`);
  } catch (error) {
    throw new Error(error);
  }
};
