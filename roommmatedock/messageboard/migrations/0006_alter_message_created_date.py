# Generated by Django 4.1.7 on 2023-03-18 03:20

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('messageboard', '0005_alter_message_created_date_alter_message_replies'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='created_date',
            field=models.DateField(default=datetime.datetime(2023, 3, 18, 3, 20, 16, 844100, tzinfo=datetime.timezone.utc)),
        ),
    ]
