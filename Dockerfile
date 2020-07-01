FROM node:10.19.0

WORKDIR /usr/src/react/portfolio

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]