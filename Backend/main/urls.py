"""
URL configuration for main project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from stock.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('/',include("api.urls")),
    path('warehouse/', WarehouseListView.as_view(),name="warehouse"),
    path('warehouse/create/', WareHouseCreateView.as_view(),name="warehouse-create"),

    path('section/create/', SectionCreateView.as_view(),name= "section-create"),
    path('section/', SectionListView.as_view(),name="section"),

    path('cell/create/', CellCreateView.as_view(),name= "cell-create"),
    path('cell/', CellListView.as_view(),name= "cell"),

    path('supplier/create/', SectionCreateView.as_view(), name= "supplier-create"),
    path('supplier/', SupplierListView.as_view(), name="supplier")

]
