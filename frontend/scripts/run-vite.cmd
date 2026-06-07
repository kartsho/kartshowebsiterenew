@echo off
setlocal

set "NODE_24=%ProgramFiles%\nodejs\node.exe"

if exist "%NODE_24%" (
  "%NODE_24%" "%~dp0..\node_modules\vite\bin\vite.js" %*
  exit /b %errorlevel%
)

echo Node 20.19+ is required to run Vite 8.
echo Expected node.exe at: "%ProgramFiles%\nodejs\node.exe"
exit /b 1
