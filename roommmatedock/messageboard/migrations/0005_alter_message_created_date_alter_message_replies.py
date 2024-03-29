# Generated by Django 4.1.7 on 2023-03-18 03:18

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('messageboard', '0004_alter_message_users_read'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='created_date',
            field=models.DateField(default=datetime.datetime(2023, 3, 18, 3, 18, 25, 474462, tzinfo=datetime.timezone.utc)),
        ),
        migrations.AlterField(
            model_name='message',
            name='replies',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='reply_message', to='messageboard.reply'),
        ),
    ]
