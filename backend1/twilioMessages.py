from twilio.rest import Client
from conf.consts import TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN

# account_sid = TWILIO_ACCOUNT_SID
# auth_token = TWILIO_AUTH_TOKEN
client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

def send_message_by_twilio(user, lesson, phone):
    toNumber = 'whatsapp:+972' + str(phone)
    client.messages.create(
        body='hey {0}, we wanted to remind you that you signed up for {1} class that starts in 30 min'.format(user, lesson),
        from_='whatsapp:+14155238886',
        to=toNumber
    )
