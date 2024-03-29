# Generated by Django 4.1.7 on 2023-03-18 21:03

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('messageboard', '0006_alter_message_created_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='created_date',
            field=models.DateField(default=datetime.datetime(2023, 3, 18, 21, 3, 4, 787328, tzinfo=datetime.timezone.utc)),
        ),
        migrations.AlterField(
            model_name='reply',
            name='created_time',
            field=models.DateField(default='03-18-2023'),
        ),
        migrations.AlterUniqueTogether(
            name='message',
            unique_together={('subject', 'created_date')},
        ),
    ]
