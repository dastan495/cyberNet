from rest_framework import generics,status
from rest_framework.permissions import AllowAny
from setting.serializers import SendEmailSerializer
from django.core.mail import EmailMessage
from rest_framework.response import Response
from setting.models import Response123
class Util:
	@staticmethod
	def send_email(data):
		email = EmailMessage(subject=data['email_subject'], body=data['email_body'], to=[data['to_email']])
		email.send()

class SendEmailAPIView(generics.GenericAPIView):
    serializer_class = SendEmailSerializer
    permission_classes = (AllowAny, )

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        full_name = request.data.get('full_name', '')
        phone = request.data.get('phone', '')
        email = request.data.get('email', '')
        company_name = request.data.get('company_name', '')
        website = request.data.get('website', '')
        type_of = request.data.get('type_of', '')
        languages = request.data.get('languages', '')
        month = request.data.get('month', '')
        day = request.data.get('day', '')
        time = request.data.get('time', '')
        comment = request.data.get('comment', '')
        email_body = f"""
            Phone: {phone},
            Email: {email},
            Company Name: {company_name},
            website: {website},
            Type of activity of company: {type_of},
            Languages: {languages},
            Date: {month}/{day}/{time},
            Comment:{comment}
            
        """
        data = {'email_body': email_body, 'to_email': 'bezbak0@gmail.com',
                'email_subject': f'Here email from {full_name}'}
        Util.send_email(data)
        return Response({'success': 'Мы отправили вам ссылку для сброса пароля'}, status=status.HTTP_200_OK)
