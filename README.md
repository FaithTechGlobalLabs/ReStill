# ReStill Project

Your daily companion for spiritual growth, mood tracking, and finding inner peace through faith. Reflect, be still, find peace. 

![MIT License](https://badgen.net/badge/license/MIT/blue)
![Develop](https://badgen.net/badge/stage/develop/blue)

<!--
Other 4D cycle badges
![Discover](https://badgen.net/badge/stage/discover/orange)
![Discern](https://badgen.net/badge/stage/discern/gray)
![Develop](https://badgen.net/badge/stage/develop/blue)
![Demonstrate](https://badgen.net/badge/stage/demonstrate/green)
-->

Tech stack:

- Server: [NestJS](https://nestjs.com/)
- Client: [Expo](https://expo.dev)
- Database: PostgreSQL

## 📋 Requirements

- [Node.js](https://nodejs.org/en/) 18.0+ or 20.0+ 
- [Docker Desktop](https://www.docker.com/)

## 🚀 Getting Started

These are the instructions for setting up a local development environment.

### Installation

1. Clone this repository

2. Install the server

    ```bash
    $ cd <PROJECT-ROOT>/restill-server
    $ npm install
    ```

3. Install the client

    ```bash
    $ cd <PROJECT-ROOT>/restill-client
    $ npm install
    ```

### Running the app

1. Start up the server:

    1. Start up Docker Desktop

    2. Start the database and backend server

        ```bash
        $ cd <PROJECT-ROOT>/restill-server
        $ docker compose up --build
        ```

2. Start up the client:

    ```bash
    $ cd <PROJECT-ROOT>/restill-server
    $ npx expo start
    ```

    In the output, you'll find options to open the app in a

    - [development build](https://docs.expo.dev/develop/development-builds/introduction/)
    - [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
    - [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)

## 🗓️ How to Participate

- We chat async on FaithTech Slack | [#prj-our-project][slack]
- We meet online every Thursday at 2PM ET | [conference link][online-meeting]

[online-meeting]: https://us02web.zoom.us/j/86329350029?pwd=R1o4dmhpcVc0UmNrNGVLb291SnBXdz09
[slack]: https://faithtechhub.slack.com/archives/C06MPGYFR6V

## 👏 How to Contribute

Details on how to get involved with the project.

### [Code of Conduct][code]

We have adopted a Code of Conduct that we expect project participants to adhere to.
Please read the [full text][code] so that you can understand what actions will and will not be tolerated.

[code]: https://github.com/FaithTechGlobalLabs/.github/blob/main/CODE_OF_CONDUCT.md

### Contributing Guide

Instructions on how people can contribute to this project.

## 📄 License

Project is MIT licensed, as found in the [LICENSE][license] file.

[license]: ./LICENSE

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).
