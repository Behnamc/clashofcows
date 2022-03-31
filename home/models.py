from django.db import models
from django.contrib.auth.models import User


class Game(models.Model):
    name = models.CharField(max_length=32, default='')
    milksug = models.SmallIntegerField(default=0)
    grasssug = models.SmallIntegerField(default=0)
    day = models.SmallIntegerField(default=0)
    sizeofsug = models.SmallIntegerField(default=3)
    level = models.SmallIntegerField(default=0)

    def __str__(self):
        return self.name


class Player(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    milk = models.SmallIntegerField()
    money = models.SmallIntegerField()
    cow = models.SmallIntegerField()
    precow = models.SmallIntegerField()
    grass = models.SmallIntegerField()
    suggest = models.SmallIntegerField(null=True)
    
    game = models.ForeignKey(Game, on_delete=models.CASCADE, null=True)
    numingame = models.SmallIntegerField(default=0)




