# Generated by Django 4.2.3 on 2023-07-13 07:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visiters', '0002_alter_visiter_gender'),
    ]

    operations = [
        migrations.CreateModel(
            name='Count',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count', models.PositiveIntegerField(default=1)),
            ],
        ),
    ]