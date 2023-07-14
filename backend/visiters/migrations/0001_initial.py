# Generated by Django 4.2.3 on 2023-07-14 02:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('results', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Visiter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gender', models.CharField(choices=[('male', 'Male'), ('female', 'Female')], max_length=10, null=True)),
                ('age', models.CharField(choices=[('twenty', '20대'), ('thirty', '30대'), ('forty', '40대'), ('fifty', '50대')], max_length=10, null=True)),
                ('result', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='results.result')),
                ('result_detail', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='results.resultdetailmodel')),
            ],
        ),
    ]
