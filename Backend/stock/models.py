from django.db import models

# Create your models here.

class Warehouse(models.Model):
    name=models.CharField(max_length=100)

    class Meta:
        db_table="warehouse"

    def __str__(self) -> str:
        return self.name
    
class Section(models.Model):
    warehouse=models.ForeignKey(Warehouse,on_delete=models.CASCADE)
    name=models.CharField(max_length=200)

    class Meta:
        db_table="section"

    def __str__(self) -> str:
        return self.name

class Cell(models.Model):
    section= models.ForeignKey(Section, on_delete=models.CASCADE)
    name=models.CharField(max_length=200)

    class Meta:
        db_table= "cell"
    def __str__(self) -> str:
        return self.name
    
class Supplier(models.Model):
      cell= models.ForeignKey(Section, on_delete=models.CASCADE)
      name=models.CharField(max_length=200)

      class Meta:
          db_table= "supplier"
      

