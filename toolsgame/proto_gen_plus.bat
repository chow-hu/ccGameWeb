@echo off
set m=%1
set t=%2
echo %m%
echo %t%
if "%m%" == "" (
    @REM set dir=./Proto
    set name=proto
)else (
    set dir=./Proto/%m%
    set name=%m%_proto
    cd ./Proto.js
    md %m%
    cd ../
)
@REM echo %dir%
echo %name%
cd ./Proto
svn update
if "%m%" == "game_common" (
    copy 3000_common.proto game_common\
)
cd ../
node .\node_modules\protobufjs\bin\pbjs --dependency protobufjs/minimal.js --target static-module --wrap commonjs --keep-case --o ./Proto.js/%m%/%name%.js ./Proto/%m%/*.proto
node .\node_modules\protobufjs\bin\pbts -n ccgame -o ./Proto.js/%m%/%name%.d.ts ./Proto.js/%m%/%name%.js
if "%m%" == "" (
    copy .\Proto.js\proto.* .\assets\shared\
)else if "%m%" == "game_common" (
    copy .\Proto.js\game_common\game_common_proto.* .\assets\shared\game_common\    
)else if not "%t%" == "" (
    md .\assets\subGames\%t%\proto
    copy .\Proto.js\%m% .\assets\subGames\%t%\proto\
)
@REM cd ./Proto
@REM svn update
@REM cd ../
@REM node .\node_modules\protobufjs\bin\pbjs --dependency protobufjs/minimal.js --target static-module --wrap commonjs --keep-case --o ./Proto.js/proto.js ./Proto/*.proto
@REM node .\node_modules\protobufjs\bin\pbts -n ccgame -o ./Proto.js/proto.d.ts ./Proto.js/*.js
@REM copy .\Proto.js\proto.* .\assets\shared\
