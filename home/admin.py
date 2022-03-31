from pyexpat import model
from django.contrib import admin

from home.models import Player, Game

class GameAdmin(admin.ModelAdmin):
    model = Game
    list_display = ['name',]

admin.site.register(Player)
admin.site.register(Game, GameAdmin)
