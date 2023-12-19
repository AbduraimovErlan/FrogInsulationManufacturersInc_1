# Generated by Django 4.2.4 on 2023-12-19 05:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('MainWepSite', '0001_initial'),
        ('MainOffice', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Warehouse1', '0001_initial'),
        ('custom_users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('Received', 'Received'), ('OperatorReview', 'Operator Review'), ('WarehouseProcessing', 'Warehouse Processing'), ('TruckLoading', 'Truck Loading'), ('Delivery', 'Delivery'), ('Completed', 'Completed'), ('Canceled', 'Canceled')], default='Received', max_length=20)),
                ('customer_name', models.CharField(max_length=100)),
                ('customer_email', models.EmailField(max_length=254)),
                ('customer_phone', models.CharField(max_length=15)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('company_name', models.CharField(blank=True, max_length=100, verbose_name='Company Name')),
                ('address_line1', models.CharField(blank=True, max_length=255, null=True)),
                ('address_line2', models.CharField(blank=True, max_length=255, null=True)),
                ('city', models.CharField(blank=True, max_length=100, null=True)),
                ('state', models.CharField(blank=True, max_length=100, null=True)),
                ('country', models.CharField(blank=True, max_length=100, null=True)),
                ('tax_exemption_document', models.FileField(blank=True, null=True, upload_to='tax_exemption_documents/')),
                ('postal_code', models.CharField(blank=True, max_length=15, null=True)),
                ('additional_info', models.TextField(blank=True, null=True)),
                ('is_loaded', models.BooleanField(default=False, null=True)),
                ('sent_at', models.DateTimeField(blank=True, null=True)),
                ('truck_fully_loaded', models.BooleanField(default=False, null=True)),
                ('total_price', models.DecimalField(decimal_places=2, max_digits=10, null=True)),
                ('tax', models.DecimalField(decimal_places=2, max_digits=10, null=True)),
                ('is_paid', models.BooleanField(default=False, null=True)),
                ('payment_method', models.CharField(default='offline', max_length=100, null=True)),
                ('transaction_id', models.UUIDField(null=True)),
                ('accounts_payable', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='MainOffice.accountspayable')),
                ('accounts_receivable', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='MainOffice.accountsreceivable')),
                ('accounts_receivable_manager', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='MainOffice.accountsreceivablemanager')),
                ('client', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='custom_users.client')),
                ('delivery_address', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='orders', to='custom_users.deliveryaddress')),
                ('driver', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Warehouse1.driver')),
                ('operational_manager', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='MainOffice.operationalmanager')),
                ('president', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='MainOffice.president')),
                ('warehouse_Worker_Driver', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Warehouse1.warehouseworkerdriver')),
                ('warehouse_supervisor', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Warehouse1.warehousesupervisor')),
                ('warehouse_worker', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Warehouse1.warehouseworker')),
            ],
        ),
        migrations.CreateModel(
            name='OrderStatusHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(max_length=50)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='status_history', to='orders.order')),
            ],
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField()),
                ('price_at_time_of_purchase', models.DecimalField(decimal_places=2, max_digits=10, null=True)),
                ('order_sku', models.CharField(blank=True, max_length=255, null=True)),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items', to='orders.order')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='order_items', to='MainWepSite.product')),
                ('product_size', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='order_items', to='MainWepSite.productsize')),
            ],
        ),
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.TextField(null=True)),
                ('is_read', models.BooleanField(default=False, null=True)),
                ('timestamp', models.DateTimeField(auto_now_add=True, null=True)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
