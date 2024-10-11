FROM judge0/compilers:1.4.0-slim

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get update && \
    apt-get install -y nodejs

RUN apt-get install -y build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libsqlite3-dev libreadline-dev libffi-dev curl && \
    curl -O https://www.python.org/ftp/python/3.10.7/Python-3.10.7.tar.xz && \
    tar -xf Python-3.10.7.tar.xz && \
    cd Python-3.10.7 && \
    ./configure --enable-optimizations && \
    make altinstall && \
    cd ../ && \
    rm -rf Python-3.10.7 && \
    rm Python-3.10.7.tar.xz

COPY docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]

LABEL maintainer="Hiroshi Fujiwara <hiroshi.829f@gmail.com>"
LABEL version="0.4"
