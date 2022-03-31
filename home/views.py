from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers

from home.models import Player, Game

levels = [
    'enter your 1st try suggest to sell milk',
    'enter your 2nd try suggest to sell milk',
    'enter your finally suggest to sell milk',

    'enter your 1st try suggest to buy grass',
    'enter your 2nd try suggest to buy grass',
    'enter your finally suggest to buy grass',
    
    'enter what new cow you want'
]

def home(request):
    return render(request, 'home.html')


def get_inf(request):
    
    if request.is_ajax and request.method == "GET":
        myid = request.GET['id']
        instance = Player.objects.filter(id=myid).values(
            'milk',
            'money',
            'cow',
            'precow',
            'grass',
            'game',
        )[0]
        
        instance.update({
            'other' : list(Player.objects.filter(game=instance['game']).values(
                'numingame',
                'suggest'
            ))
        })


        instance.update(
            dict(
                list(
                    Game.objects.filter(id=instance['game']).values(
                    'name',
                    'milksug',
                    'grasssug',
                    'day'
                    ))[0]))

        print(instance)
        i = 0
        # ser_instance = serializers.serialize('json', [instance, ])
        return JsonResponse({"instance": instance}, status=200)
        

    # some error occured
    return JsonResponse({"error": ""}, status=400)

def levels(level, id, gameid):

    if level == 0:
        player = Player.objects.filter(id=id)[0]

        # die cow
        while player.grass < player.cow + player.precow:
            if player.cow != 0:
                player.cow -= 1
            elif player.precow != 0:
                player.precow -= 1
            else:
                break
        # decrease grass
        player.grass -= player.cow + player.precow

        # new milk
        player.milk += player.cow

        # increase cow
        # increase precow
        player.cow += player.precow
        player.precow = player.suggest
        
        # end
        player.save()
        return level + 1
    elif level == 3:

        sugessts = list(Player.objects.filter(game=gameid, suggest=None).values_list('id'))
        
        if len(sugessts) == 0:
            # all users buy or sell
            pass
            
        

    else:
        pass
