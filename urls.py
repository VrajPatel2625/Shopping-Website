from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("earbuds/", views.earbuds, name="earbuds"),
    path("headphones/", views.headphones, name="headphones"),
    path("watches/", views.watches, name="watches"),
    path("login/", views.login_user, name="login"),
    path("register/", views.register_user, name="register"),
    path("logout/", views.logout_user, name="logout"),
    path("profile/", views.user_panel, name="user_panel"),
    path("cart/", views.cart, name="cart"),
    path("checkout/", views.checkout, name="checkout"),
    path("add_to_cart/<int:product_id>/", views.add_to_cart, name="add_to_cart"),
]
