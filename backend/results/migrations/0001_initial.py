# Generated by Django 4.2.3 on 2023-07-15 09:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Result',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('drink_kind', models.CharField(max_length=50)),
                ('drink_count', models.PositiveIntegerField(blank=True, default=0, verbose_name='총 결과 값')),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='ResultDetailModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dosu', models.CharField(max_length=10, verbose_name='도수')),
                ('sugar', models.CharField(max_length=10, verbose_name='당도')),
                ('drink_name', models.CharField(max_length=15, verbose_name='술 이름')),
                ('description', models.TextField(verbose_name='설명')),
                ('before_result', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='results', to='results.result', verbose_name='술 종류')),
            ],
        ),
    ]
