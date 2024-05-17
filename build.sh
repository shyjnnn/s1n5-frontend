#!/bin/bash

# 최상위 디렉토리로 이동
cd ../

# output 디렉토리가 존재하지 않으면 생성
mkdir -p output

# [team-repo-name] 디렉토리에서 모든 파일을 output 디렉토리로 복사
cp -R ./frontend/* ./output

# output 디렉토리를 [team-repo-name] 디렉토리에 복사
cp -R ./output ./frontend

# 디버깅을 위해 output 디렉토리 내용을 확인
ls -al output
