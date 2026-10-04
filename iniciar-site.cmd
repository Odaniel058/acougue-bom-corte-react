@echo off
cd /d "%~dp0"
echo Abrindo o site no navegador...
echo Mantenha esta janela aberta enquanto usa o site.
call npm run dev -- --host 127.0.0.1 --open
pause
