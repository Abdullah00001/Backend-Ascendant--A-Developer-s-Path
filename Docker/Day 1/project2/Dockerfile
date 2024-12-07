# from -> its out operating system or basement where our application will run isolated way  
FROM node:22.12.0  

# WORKDIR ->using this where we will put our project,we also call root folder for our project
WORKDIR /usr/src/app

# copy package.json and package-lock.json we ensure if they arent change than skip them or if the building first time than install dependency first
COPY  package*.json .
# using this run command we install de dependency that instruct in package.json file
RUN npm i

# using this we copy our entire project content to our container project forler called app
COPY . .

# science we are using ts thats why we will build the project first with this run command
RUN npm run build
# with this we expose our isolated environment port to world
EXPOSE 5000
# and finally with this command we run our project
CMD ["npm","start"]
