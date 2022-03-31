from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from home.views import home, get_inf


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home),
    path('getinf', get_inf, name='getinf'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
