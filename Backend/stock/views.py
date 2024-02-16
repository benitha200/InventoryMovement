from django.shortcuts import render
from rest_framework import generics
from .models import Warehouse
from .serializer import *

# Create your views here.

class WarehouseListView(generics.ListAPIView):
    queryset=Warehouse.objects.all()
    serializer_class=WarehouseSerializer


class WareHouseCreateView(generics.CreateAPIView):
    queryset=Warehouse.objects.all()
    serializer_class=WarehouseSerializer

class SectionCreateView(generics.CreateAPIView):
    queryset=Section.objects.all()
    serializer_class=SectionSerializer

class SectionListView(generics.ListAPIView):
    queryset=Section.objects.all()
    serializer_class=SectionSerializer

class CellCreateView(generics.CreateAPIView):
      queryset=Cell.objects.all()
      serializer_class=CellSerializer

class CellListView(generics.ListAPIView):
      queryset= Cell.objects.all()
      serializer_class=CellSerializer

class SupplierCreateView(generics.CreateAPIView):
      queryset= Supplier.objects.all()
      serializer_class=SupplierSerializer

class SupplierListView(generics.ListAPIView):
       queryset=Supplier.objects.all()
       serializer_class=SupplierSerializer
       
