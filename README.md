# Mobile Application for QRCar
> cbarange | 17th November 2020
---
[![View](https://views.whatilearened.today/views/github/QRCar/mobile-app-qrcar.svg)](https://github.com/QRCar/mobile-app-qrcar)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/QRCar/mobile-app-qrcar)](https://GitHub.com/QRCar/mobile-app-qrcar/pulls)
[![GitHub contributors](https://img.shields.io/github/contributors/QRCar/mobile-app-qrcar)](https://GitHub.com/QRCar/mobile-app-qrcar/contributors/)

## Get Started

```bash
node --version # 12 or more expected
npm --version # 6 or more expected
# If your nodejs version is under 12.x.x, install newest
sudo apt-get purge nodejs
sudo apt-get purge --auto-remove nodejs
sudo apt update && sudo apt upgrade -y
sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt -y install nodejs gcc g++ make
sudo apt update
# Install Yarn
sudo npm install -g yarn
yarn global add expo-cli
~/.yarn/bin/expo init mobile-app-qrcar
# Start application
cd mobile-app-qrcar
yarn install
yarn start # you can also use: expo start
``` 


