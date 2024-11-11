@echo off
cd ./assets/subGames
for /f %%i in ('DIR /B') do (
    echo %%i%
	if exist "%%i%\.\" (
@REM		echo true
		cd /d %%i
		git pull
		cd ../
	)else (
@REM		echo false
	)
)
@REM pause
@REM 	cd /d %%i
@REM 	git pull
@REM 	cd ../