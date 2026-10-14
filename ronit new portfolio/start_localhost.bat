@echo off
title Ronit Kumar Singh - Localhost Server (Port 8080)
echo ========================================================
echo  Starting Localhost Web Server on http://localhost:8080/
echo  Press Ctrl+C to stop the server at any time.
echo ========================================================
start "" "http://localhost:8080/"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
