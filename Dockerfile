FROM ubuntu:latest
FROM node:14.20.0 as builder


RUN mkdir /app
WORKDIR /app

RUN npm install -g @angular/cli@15.2.10

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 4200

# CMD ["ng", "serve", "--watch", "--host", "0.0.0.0", "--poll", "1000"]
# CMD ["ng", "serve", "--host", "0.0.0.0"]
CMD ["npm", "start"]

FROM builder

RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF

CMD ["npm", "start"]
# CMD ["ng", "serve", "--host", "0.0.0.0"]
# CMD ["ng", "serve", "--watch", "--host", "0.0.0.0", "--poll", "1000"]

# antigo
# FROM node:20.8.1 as builder

# RUN mkdir /app
# WORKDIR /app

# RUN npm install -g @angular/cli@17.0.0-rc.0

# COPY package.json package-lock.json ./
# RUN npm install

# COPY . .
# CMD ["ng", "serve", "--host", "0.0.0.0"]

# FROM builder

# RUN <<EOF
# apt-get update
# apt-get install -y --no-install-recommends git
# EOF

# RUN <<EOF
# useradd -s /bin/bash -m vscode
# groupadd docker
# usermod -aG docker vscode
# EOF
# # install Docker tools (cli, buildx, compose)
# # COPY --from=gloursdocker/docker / /

# CMD ["ng", "serve", "--host", "0.0.0.0"]
