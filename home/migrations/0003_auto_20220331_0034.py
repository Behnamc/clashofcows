# Generated by Django 3.2.9 on 2022-03-30 20:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_auto_20220328_0710'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='grasssug',
            field=models.SmallIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='game',
            name='milksug',
            field=models.SmallIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='player',
            name='suggest',
            field=models.SmallIntegerField(null=True),
        ),
    ]
