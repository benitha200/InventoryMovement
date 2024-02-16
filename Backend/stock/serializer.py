from rest_framework import serializers
from .models import *

class WarehouseSerializer(serializers.ModelSerializer):
    class Meta:
        model=Warehouse
        fields="__all__"

class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model=Section
        fields="__all__"

class CellSerializer(serializers.ModelSerializer):
    class Meta:
        model= Cell
        fields= "__all__"

class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model= Cell
        fields= "__all__"
        