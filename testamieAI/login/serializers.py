from rest_framework import serializers
from login.models import Stock


class StockSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stock
        fields = ("id", "title", 'stock_count')