# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

WORKDIR /usr/src/app/frontend

RUN npm install -g @angular/cli 
RUN npm install
RUN npm run build --prod

WORKDIR /usr/src/app/backend

RUN npm install
# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]