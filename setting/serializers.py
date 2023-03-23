from rest_framework import serializers
from setting.models import Response123


class SendEmailSerializer(serializers.Serializer):
    full_name = serializers.CharField(
        max_length=100
    )
    phone = serializers.CharField(
        max_length=25
    )
    email = serializers.EmailField()
    company_name = serializers.CharField(
        max_length=255
    )
    website = serializers.CharField(
        max_length=255
    )
    type_of = serializers.CharField(
        max_length=255
    )
    languages = serializers.CharField(
        max_length=255
    )
    month = serializers.CharField(
        max_length=25
    )
    day = serializers.CharField(
        max_length=24
    )
    time = serializers.CharField(
        max_length=25
    )
    comment = serializers.CharField(
        max_length=1000
    )
    class Meta:
        model = Response123 
        fields = ('full_name','phone','email','company_name','website','type_of','languages','month','day','time','comment','')
