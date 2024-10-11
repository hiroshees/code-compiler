# Compilers

## 言語
* nodejs 16
* python 3.10.7

## 言語の追加
* extra/Dockerfileに言語のインストール関連の設定を追加
* extra/testに言語ごとのテストコードを作成する

## ビルド
```
cd extra
docker build -t hiroshees/compilers .
```

## run test
```
cd extra
./bin/run-test
```
