@echo off
echo Starting the Ecliptica Store Server...
echo =======================================
:: Check if virtual environment exists and activate it
if exist "venv\Scripts\activate.bat" (
    call venv\Scripts\activate.bat
)

:: Start the Django server
echo Starting server at http://127.0.0.1:8000/
python manage.py runserver

pause
